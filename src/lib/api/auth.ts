import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import { ILoginResponse } from '@/app/types/users.types'
import axios from 'axios'

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const res = await axios.post(`${BackendBaseUrl}/api/auth/login`, data)

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
