import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import api from './axios'

export const getUserLike = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/likes/`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get user likes')
    }

    return res.data
  } catch (error) {
    throw error
  }
}
