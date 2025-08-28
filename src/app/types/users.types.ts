export interface UserProps {
  id: number
  first_name: string
  last_name: string
  email: string
  phone_number: string
  password: string
  profile_pic: string
  profile_pic_public_id: string
  role: ROLE
  is_anonymous: boolean
  is_verified: boolean
  is_deleted: boolean
  is_email_verified: boolean
  is_phone_number_verified: boolean
  is_public: boolean
  is_history_visible: boolean
  created_at: Date
  updated_at: Date
}

export interface ILoginResponse {
  ok: boolean
  user: UserProps
  token: string
}

export interface IWhoAmIRes {
  ok: boolean
  user: UserProps
}

export enum ROLE {
  USER = 'user',
  ADMIN = 'admin',
}
