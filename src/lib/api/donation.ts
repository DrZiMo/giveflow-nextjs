import axios from 'axios'
import api from './axios'
import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import {
  DonationsSummaryRes,
  ICreateSessionRes,
  IGetTopDonorsRes,
  IMonthlyDonationsRes,
  ITopSupportedCausesRes,
} from '@/app/types/donation'

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

    throw error
  }
}

export const getAdminDonationsSummary = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/donations/summary-admin`)
    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to fetch donations summary')
    }
    return res.data as DonationsSummaryRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }

    throw error
  }
}

export const getAdminTopSupportedCauses = async () => {
  try {
    const res = await api.get(
      `${BackendBaseUrl}/api/donations/supported-causes-admin`
    )
    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to fetch top suppoted causes')
    }
    return res.data as ITopSupportedCausesRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }

    throw error
  }
}

export const getAdminMonthlyDonations = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/donations/monthly-admin`)
    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to fetch monthly donations')
    }
    return res.data as IMonthlyDonationsRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }

    throw error
  }
}

export const getDonationsSummary = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/donations/summary`)
    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to fetch donations summary')
    }
    return res.data as DonationsSummaryRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }

    throw error
  }
}

export const getMonthlyDonations = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/donations/monthly`)
    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to fetch monthly donations')
    }
    return res.data as IMonthlyDonationsRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }

    throw error
  }
}

export const getTopSupportedCauses = async () => {
  try {
    const res = await api.get(
      `${BackendBaseUrl}/api/donations/supported-causes`
    )
    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to fetch top suppoted causes')
    }
    return res.data as ITopSupportedCausesRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }

    throw error
  }
}
