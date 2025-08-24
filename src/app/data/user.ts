import { ROLE, UsersProps } from '../types/users.types'

export const Users: UsersProps[] = [
  {
    id: 1,
    first_name: 'basho',
    last_name: 'aadam',
    email: 'basho2025@gmail.net',
    phone_number: '',
    password: '1234567',
    profile_pic: '',
    profile_pic_public_id: '',
    role: ROLE.ADMIN,
    is_anonymous: false,
    is_verified: true,
    is_deleted: false,
    is_email_verified: true,
    is_phone_number_verified: false,
    is_public: false,
    created_at: new Date(),
    updated_at: new Date(),
  },
]
