import axios from 'axios'
import api from './axios'
import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import { IGetUserSavesRes, IToggleSaveCauseRes } from '@/app/types/saves'

export const getUserSaves = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/saves/all`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get user saves')
    }

    return res.data as IGetUserSavesRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Unknown error')
    }

    throw new Error('Unknown error')
  }
}

export const toggleSaveCause = async (cause_id: string) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/saves/toggle`, {
      cause_id,
    })

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to toggle save cause')
    }

    return res.data as IToggleSaveCauseRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Unknown error')
    }

    throw new Error('Unknown error')
  }
}
