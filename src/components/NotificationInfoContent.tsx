'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { NotificationSchema } from '@/app/schemas'
import { Save } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect } from 'react'

export function NotificationInfoContent() {
  const user = useSelector((state: RootState) => state.selectedUser.user)

  // react-hook-form
  const form = useForm<z.infer<typeof NotificationSchema>>({
    resolver: zodResolver(NotificationSchema),
    defaultValues: {
      EmailNotifications: false,
      SMSNotifications: false,
      PushNotifications: false,
      NewsLetter: false,
      DonationReciepts: false,
      DonationReminder: false,
    },
  })

  useEffect(() => {
    if (user?.user_settings?.[0]) {
      form.reset({
        EmailNotifications: user.user_settings[0].email_notifications ?? false,
        SMSNotifications: user.user_settings[0].sms_notifications ?? false,
        PushNotifications: user.user_settings[0].push_notifications ?? false,
        NewsLetter: user.user_settings[0].news_letter ?? false,
        DonationReciepts: user.user_settings[0].donation_receipts ?? false,
        DonationReminder: user.user_settings[0].donation_reminds ?? false,
      })
    }
  }, [user, form])

  function onSubmit(data: z.infer<typeof NotificationSchema>) {
    console.log('Submitted values:', data)
  }

  const settingEntries: Record<
    keyof z.infer<typeof NotificationSchema>,
    { title: string; desc: string }
  > = {
    EmailNotifications: {
      title: 'Email Notifications',
      desc: 'Receive updates and alerts via email.',
    },
    SMSNotifications: {
      title: 'SMS Notifications',
      desc: 'Get important messages via text message.',
    },
    PushNotifications: {
      title: 'Push Notifications',
      desc: 'Allow push notifications on your device.',
    },
    NewsLetter: {
      title: 'Newsletter',
      desc: 'Stay informed with our monthly newsletter.',
    },
    DonationReciepts: {
      title: 'Donation Receipts',
      desc: 'Automatically receive receipts for your donations.',
    },
    DonationReminder: {
      title: 'Donation Reminders',
      desc: 'Get reminders about recurring or missed donations.',
    },
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <div className='space-y-2'>
          {(
            Object.entries(settingEntries) as [
              keyof z.infer<typeof NotificationSchema>,
              { title: string; desc: string }
            ][]
          ).map(([key, setting]) => (
            <FormField
              key={key}
              control={form.control}
              name={key}
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between p-3'>
                  <div className='space-y-0'>
                    <FormLabel className='text-md'>{setting.title}</FormLabel>
                    <FormDescription className='text-sm'>
                      {setting.desc}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className='scale-130'
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button type='submit'>
          <Save className='mr-2 h-4 w-4' /> Save
        </Button>
      </form>
    </Form>
  )
}
