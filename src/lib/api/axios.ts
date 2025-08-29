import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

interface FailedQueueItem {
  resolve: (value?: unknown) => void
  reject: (error?: any) => void
}

interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _retry?: boolean
}

const api = axios.create({
  baseURL: 'http://localhost:3002',
  withCredentials: true, // ✅ important for cookies
})

let isRefreshing = false
let failedQueue: FailedQueueItem[] = []

const processQueue = (error: any = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error)
    else prom.resolve()
  })
  failedQueue = []
}

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfigWithRetry

    // only trigger on 401 and not retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest.url?.includes('/refresh-token')) {
        // refresh token failed → logout user
        return Promise.reject(error)
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        }).then(() => api(originalRequest))
      }

      originalRequest._retry = true
      isRefreshing = true

      return new Promise(async (resolve, reject) => {
        try {
          // ✅ send GET request to refresh-token route (cookies automatically included)
          await api.get('/api/auth/refresh-token')
          processQueue()
          resolve(api(originalRequest)) // retry original request
        } catch (err) {
          processQueue(err)
          reject(err)
        } finally {
          isRefreshing = false
        }
      })
    }

    return Promise.reject(error)
  }
)

export default api
