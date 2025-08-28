import { BackendBaseUrl } from '@/app/_constants/backendBaseUrl'
import { IGetALlCausesResponse } from '@/app/types/causes.types'
import axios from 'axios'

export const getCauses = async () => {
  try {
    const res = await axios.get(`http://localhost:3002/api/causes/all`)
    return res.data as IGetALlCausesResponse
  } catch (error) {
    console.log(error)
  }
}
