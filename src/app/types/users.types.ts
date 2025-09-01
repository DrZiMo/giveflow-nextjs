import { ICause } from './causes.types'
import { IDonationCause } from './donation'
import { SettingsProps } from './settings.types'

export interface UserProps {
  id: number
  first_name: string
  last_name: string
  email: string
  phone_number: string
  profile_pic: string
  role: ROLE
  is_anonymous: boolean
  is_public: boolean
  is_history_visible: boolean
  is_deleted: boolean
  is_email_verified: boolean
  is_phone_number_verified: boolean
  saveForLater: ICause[]
  notification: any[]
  user_settings: SettingsProps[]
  created_at: Date
  updated_at: Date
}

export interface ILoginResponse {
  ok: boolean
  user: UserProps
  token: string
}

export interface IGetSingleUserRes {
  ok: boolean
  user: UserProps
}

export interface IWhoAmIRes {
  ok: boolean
  user: UserProps
}

export interface IUpdateUserRes {
  ok: boolean
  user: UserProps
}

export enum ROLE {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface IDonationHistoryRes {
  ok: boolean
  history: IDonationCause[]
}

export interface ISignUpDataProp {
  first_name: string
  last_name: string
  email: string
  password: string
  confirm_password: string
}

export interface ISignUpRes {
  ok: boolean
  user: UserProps
}
