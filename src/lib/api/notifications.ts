import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import api from './axios'
import axios from 'axios'
import { IGetAllNotificationsRes } from '@/app/types/notification'

export const getAllNotifications = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/notifications/all`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get all notifications')
    }

    return res.data as IGetAllNotificationsRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const deleteNotification = async (id: string) => {
  try {
    const res = await api.delete(
      `${BackendBaseUrl}/api/notifications/delete/${id}`
    )

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to delete notifications')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const createNotification = async (title: string, message: string) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/notifications/new`, {
      title,
      message,
    })

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to create notifications')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}
