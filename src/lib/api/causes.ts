import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import {
  IGetAllCausesResponse,
  IGetFeaturedCausesRes,
  IGetNumberOfDonorsRes,
  IGetSingleCauseRes,
} from '@/app/types/causes.types'
import axios from 'axios'
import api from './axios'

export const getCauses = async () => {
  try {
    const res = await axios.get(`${BackendBaseUrl}/api/causes/all`)
    return res.data as IGetAllCausesResponse
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getSingleCause = async (id: string) => {
  try {
    const res = await axios.get(`${BackendBaseUrl}/api/causes/detail/${id}`)
    return res.data as IGetSingleCauseRes
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getFeaturedCauses = async () => {
  try {
    const res = await axios.get(`${BackendBaseUrl}/api/causes/featured`)
    return res.data as IGetFeaturedCausesRes
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getNumberOfDonors = async (causeId: string) => {
  try {
    const res = await api.get(`${BackendBaseUrl}/api/causes/donors/${causeId}`)
    return res.data as IGetNumberOfDonorsRes
  } catch (error) {
    console.log(error)
    throw error
  }
}
