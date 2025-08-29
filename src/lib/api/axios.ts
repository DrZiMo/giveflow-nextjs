import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3002',
  withCredentials: true,
})

interface FailedQueueItem {
  resolve: (value?: unknown) => void
  reject: (error?: any) => void
}

let isRefreshing = false
let failedQueue: FailedQueueItem[] = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error)
    else prom.resolve(token)
  })
  failedQueue = []
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // prevent loop
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest.url === '/api/auth/refresh-token') {
        // refresh token itself failed → logout user
        return Promise.reject(error)
      }

      if (isRefreshing) {
        // queue the requests until refresh finishes
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        }).then(() => api(originalRequest))
      }

      originalRequest._retry = true
      isRefreshing = true

      return new Promise(async (resolve, reject) => {
        try {
          await api.get('/api/auth/refresh-token') // refresh cookies
          processQueue(null)
          resolve(api(originalRequest)) // retry original request
        } catch (err) {
          processQueue(err, null)
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
