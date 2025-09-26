import { IDonationCause } from './donation'
import { INotificationProp } from './notification'
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
  is_two_factor_authentication: boolean
  is_logged_in: true
  saveForLater: ISaveLater[]
  notification: INotificationProp[]
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
  MODERATOR = 'MODERATOR',
}

export interface IDonationHistoryRes {
  ok: boolean
  history: IDonationCause[]
}

export interface ISendMessageEmail {
  full_name: string
  email: string
  subject: string
  message: string
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

export interface ISaveLater {
  id: string
  user_id: number
  cause_id: string
  saved_at: string
  updated_at: string
}

export interface IGetTopDonorsAdminRes {
  ok: boolean
  donors: DonorProp[]
}

export interface IGetAllUsersRes {
  ok: boolean
  users: DashboardUser[]
  number: number
  activeCount: number
  suspendCount: number
  pagination: {
    page: number
    limit: number
    totalPages: number
  }
}

export interface DashboardUser {
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
  is_two_factor_authentication: boolean
  is_logged_in: true
  saveForLater: ISaveLater[]
  notification: INotificationProp[]
  user_settings: SettingsProps[]
  created_at: Date
  updated_at: Date
  totalDonated: number
  causesSupported: number
}

export interface DonorProp {
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
  is_two_factor_authentication: boolean
  is_logged_in: true
  saveForLater: ISaveLater[]
  notification: INotificationProp[]
  user_settings: SettingsProps[]
  created_at: Date
  updated_at: Date
  totalDonated: number
  supportedCauses: number
}
