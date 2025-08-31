import axios from 'axios'
import api from './axios'
import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import { ICreateSessionRes, IGetTopDonorsRes } from '@/app/types/donation'

export const newDonation = async (data: {
  cause_id: string
  amount: number
}) => {
  try {
    const res = await api.post(
      `${BackendBaseUrl}/api/donations/create-session`,
      data
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to create donation session')
    }

    return res.data as ICreateSessionRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
  }
}

export const getTopDonors = async (causeId: string) => {
  try {
    const res = await api.get(
      `${BackendBaseUrl}/api/donations/top-donors/${causeId}`
    )
    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to fetch top donors')
    }
    return res.data as IGetTopDonorsRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
  }
}
