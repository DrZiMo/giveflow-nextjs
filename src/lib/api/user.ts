import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import { IGetSingleUserRes, IUpdateUserRes } from '@/app/types/users.types'
import api from './axios'
import axios from 'axios'

export const getSingleUser = async (userId: number) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/single-user`, {
      id: userId,
    })

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Login fieled')
    }

    return res.data as IGetSingleUserRes
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const updateUser = async (data: {
  first_name: string
  last_name: string
}) => {
  try {
    const res = await api.put(`${BackendBaseUrl}/api/auth/update-user`, data)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to update user')
    }

    return res.data as IUpdateUserRes
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}
