import { ICause } from './causes.types'
import { INotificationProp } from './notification'
import { SettingsProps } from './settings.types'
import { ROLE } from './users.types'

export interface ICreateSessionRes {
  ok: boolean
  sessionUrl: string
}

export interface IGetTopDonorsRes {
  ok: boolean
  donors: TopUserProps[]
}

export interface TopUserProps {
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
  notification: INotificationProp[]
  user_settings: SettingsProps[]
  created_at: Date
  updated_at: Date
  totalAmount: number
}

export interface IDonationCause {
  id: string
  user_id: number
  cause_id: string
  amount: number
  donated_at: string
  cause: ICause
}
