export interface UsersProps {
  id: number
  first_name: string
  last_name: string
  email: string
  phone_number: string
  password: string
  profile_pic: string
  profile_pic_public_id: string
  role: ROLE
  is_anonymous: false
  is_verified: true
  is_deleted: false
  is_email_verified: false
  is_phone_number_verified: false
  created_at: Date
  updated_at: Date
}

export enum ROLE {
  USER = 'user',
  ADMIN = 'admin',
}
