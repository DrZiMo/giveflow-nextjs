export interface SettingsProps {
  id: string
  user_id: number
  email_notifications: boolean
  sms_notifications: boolean
  push_notifications: boolean
  news_letter: boolean
  donation_receipts: boolean
  donation_reminds: boolean
  created_at: Date
  updated_at: Date
}
