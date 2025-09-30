import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import {
  ILoginResponse,
  ISignUpDataProp,
  ISignUpRes,
  IWhoAmIRes,
} from '@/app/types/users.types'
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
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const logoutUser = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/auth/logout`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Logout failed')
    }

    return res.data
  } catch (error) {
    console.error(error)

    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string })?.message ||
        'Unknown Error'
      throw new Error(message)
    }

    // Non-Axios error
    throw new Error('Unknown Error')
  }
}

export const singUpUser = async (data: ISignUpDataProp) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/signup`, data)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Signup fieled')
    }

    return res.data as ISignUpRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const sendCodeEmail = async () => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/send-code-email`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Sending code fieled')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const sendForgetPasswordCodeEmail = async (email: string) => {
  try {
    const res = await api.post(
      `${BackendBaseUrl}/api/auth/send-forget-password-code-email`,
      { email }
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Sending code failed')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const verifyCode = async (code: { code: string }) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/verify-email`, code)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Verifing email fieled')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const verifyTwoFactorAuthentication = async (code: { code: string }) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/auth/verify-2fa`, code)

    if (!res.data.ok) {
      throw new Error(
        res.data.message || 'Verifing two factor authentication fieled'
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

export const verifyResetCode = async (data: {
  email: string
  code: string
}) => {
  try {
    const res = await axios.post(
      `${BackendBaseUrl}/api/auth/verify-reset-code`,
      data
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to verify reset code')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const resetPassword = async (data: {
  newPassword: string
  confirmPassword: string
}) => {
  try {
    const res = await axios.post(
      `${BackendBaseUrl}/api/auth/reset-password`,
      data
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to reset password')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}
