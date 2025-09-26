import { UserProps } from './users.types'

export interface INotificationProp {
  id: string
  user_id: number
  name: string
  message: string
  user: UserProps
  is_read: boolean
  number_of_users: number
  created_at: string
  updated_at: string
}

export interface IGetAllNotificationsRes {
  ok: boolean
  notifications: INotificationProp[]
}
