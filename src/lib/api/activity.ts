import axios from 'axios'
import api from './axios'
import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import { IGetUserActivityRes } from '@/app/types/activity'

export const getUserActivities = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/activities/`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get user activities')
    }

    return res.data as IGetUserActivityRes
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Unknown error')
    }

    throw error
  }
}
