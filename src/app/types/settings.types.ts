export interface SettingsProbs {
  userId: number
  EmailNotifications: NotificationItemValue
  SMSNotifications: NotificationItemValue
  PushNotifications: NotificationItemValue
  NewsLetter: NotificationItemValue
  DonationReciepts: NotificationItemValue
  DonationReminder: NotificationItemValue
}

interface NotificationItemValue {
  title: string
  value: boolean
  desc: string
}
