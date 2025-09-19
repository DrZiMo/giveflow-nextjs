import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import api from './axios'
import axios from 'axios'
import { IGetAllCategoryRes } from '@/app/types/category'

export const getAllCategories = async () => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/categories/all`)

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to get all categories')
    }

    return res.data as IGetAllCategoryRes
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}

export const addNewCategory = async ({ name }: { name: string }) => {
  try {
    const res = await api.post(`${BackendBaseUrl}/api/categories/new`, { name })

    if (!res.data.ok) {
      throw new Error(res.data.message || 'Failed to add new category')
    }

    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Unknown Error')
    }
    throw error
  }
}
