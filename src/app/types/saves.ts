import { ICause } from './causes.types'

export interface IGetUserSavesRes {
  ok: boolean
  savedCauses: ISavedCause[]
}

export interface ISavedCause {
  id: string
  user_id: number
  cause_id: string
  saved_at: string
  updated_at: string
  cause: ICause
}
