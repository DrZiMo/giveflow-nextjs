import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Valid email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

export const SignupSchema = z
  .object({
    first_name: z.string().min(1, { message: 'First name is required' }),
    last_name: z.string().min(1, { message: 'Last name is required' }),
    email: z.string().email({ message: 'Valid email is required' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    confirm_password: z
      .string()
      .min(6, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const EditUserSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required' }),
  last_name: z.string().min(1, { message: 'Last name is required' }),
})

export const PhoneNumberSchema = z.object({
  email: z.string(),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits long' }),
})

export const NotificationSchema = z.object({
  email_notifications: z.boolean(),
  sms_notifications: z.boolean(),
  push_notifications: z.boolean(),
  newsletter: z.boolean(),
  donation_receipts: z.boolean(),
  donation_reminders: z.boolean(),
})

export const PrivacySchema = z.object({
  is_anonymous: z.boolean(),
  is_public: z.boolean(),
  is_history_visible: z.boolean(),
})

export const ChangePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: 'Current password is required' }),
    newPassword: z
      .string()
      .min(6, { message: 'New password must be at least 6 characters long' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const DonationSchema = z.object({
  cause_id: z.string().uuid(),
  amount: z.number().min(1, { message: 'Amount must be at least 1' }),
})
