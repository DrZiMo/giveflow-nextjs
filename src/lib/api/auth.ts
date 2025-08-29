import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import { ILoginResponse, IWhoAmIRes } from '@/app/types/users.types'
import axios from 'axios'
import api from './axios'

export const whoami = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/auth/whoami`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Fieled to get the user')
    }

    return res.data as IWhoAmIRes
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/login`, data)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Login fieled')
    }

    return res.data as ILoginResponse
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}
