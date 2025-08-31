import { IUpdateSettings, IUpdateSettingsRes } from '@/app/types/settings.types'
import axios from 'axios'
import api from './axios'
import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'

export const updateSettings = async (data: IUpdateSettings) => {
  try {
    const res = await api.put(`${BackendBaseUrl}/api/settings/update`, data)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to update user')
    }

    return res.data as IUpdateSettingsRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}
