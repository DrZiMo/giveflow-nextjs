import { UserProps } from './users.types'

export interface ICreateSessionRes {
  ok: boolean
  sessionUrl: string
}

export interface IGetTopDonorsRes {
  ok: boolean
  donors: UserProps[]
}
