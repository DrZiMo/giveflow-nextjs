import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import {
  IGetSingleUserRes,
  IUpdateUserRes,
  IDonationHistoryRes,
  IGetTopDonorsAdminRes,
  IGetAllUsersRes,
} from '@/app/types/users.types'
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
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const changePassword = async (data: {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}) => {
  try {
    const res = await api.put(
      `${BackendBaseUrl}/api/auth/change-password`,
      data
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to change password')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const updatePrivacySettings = async (data: {
  is_public: boolean
  is_history_visible: boolean
  is_anonymous: boolean
}) => {
  try {
    const res = await api.put(
      `${BackendBaseUrl}/api/auth/update-privacy-settings`,
      data
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to update privacy settings')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const deleteUserTemp = async () => {
  try {
    const res = await api.delete(`${BackendBaseUrl}/api/auth/delete-user-temp`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to delete user temporarily')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const getDonationHistory = async (search?: string, time?: string) => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/auth/donation-history`, {
      params: { search, time },
    })

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get donation history')
    }

    return res.data as IDonationHistoryRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const changeProfilePic = async (formData: FormData) => {
  try {
    const res = await api.post(
      `${BackendBaseUrl}/api/auth/profile-picture`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to change profile picture')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const addPhoneNumber = async (data: { phone_number: string }) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/phone-number`, data)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to add phone number')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const toggleTwoFactorAuthentication = async () => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/two-factor`)

    if (!res.data.ok) {
      throw new Error(
        res.data.message || 'Failed to toggle two factor authentication'
      )
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const getTopDonorsAdmin = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/auth/top-donors`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get top donors')
    }

    return res.data as IGetTopDonorsAdminRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const getAllUsers = async (page: number, limit: number) => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/auth/all`, {
      params: { page, limit },
    })

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get all the users')
    }

    return res.data as IGetAllUsersRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const suspenseUser = async ({ id }: { id: number }) => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/auth/delete-temp/${id}`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to suspense user')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const restoreUser = async ({ id }: { id: number }) => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/auth/restore/${id}`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to restore user')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}
