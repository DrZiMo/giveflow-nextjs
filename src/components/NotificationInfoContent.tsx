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
import { useUpdateSettings } from '@/lib/hook/useSettings'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useQueryClient } from '@tanstack/react-query'

export function NotificationInfoContent() {
  const user = useSelector((state: RootState) => state.selectedUser.user)
  const queryClient = useQueryClient()

  // react-hook-form
  const form = useForm<z.infer<typeof NotificationSchema>>({
    resolver: zodResolver(NotificationSchema),
    defaultValues: {
      email_notifications: false,
      sms_notifications: false,
      push_notifications: false,
      newsletter: false,
      donation_receipts: false,
      donation_reminders: false,
    },
  })

  useEffect(() => {
    if (user?.user_settings?.[0]) {
      form.reset({
        email_notifications: user.user_settings[0].email_notifications ?? false,
        sms_notifications: user.user_settings[0].sms_notifications ?? false,
        push_notifications: user.user_settings[0].push_notifications ?? false,
        newsletter: user.user_settings[0].news_letter ?? false,
        donation_receipts: user.user_settings[0].donation_receipts ?? false,
        donation_reminders: user.user_settings[0].donation_reminds ?? false,
      })
    }
  }, [user, form])

  const { mutate: updateSettings, isPending } = useUpdateSettings()
  function onSubmit(data: z.infer<typeof NotificationSchema>) {
    updateSettings(data, {
      onSuccess: () => {
        toast.success('Notification settings updated successfully', {
          id: toastId,
        })
        queryClient.invalidateQueries({ queryKey: ['single-user'] })

        form.reset({
          email_notifications: data.email_notifications,
          sms_notifications: data.sms_notifications,
          push_notifications: data.push_notifications,
          newsletter: data.newsletter,
          donation_receipts: data.donation_receipts,
          donation_reminders: data.donation_reminders,
        })
      },
    })
  }

  const settingEntries: Record<
    keyof z.infer<typeof NotificationSchema>,
    { title: string; desc: string }
  > = {
    email_notifications: {
      title: 'Email Notifications',
      desc: 'Receive updates and alerts via email.',
    },
    sms_notifications: {
      title: 'SMS Notifications',
      desc: 'Get important messages via text message.',
    },
    push_notifications: {
      title: 'Push Notifications',
      desc: 'Allow push notifications on your device.',
    },
    newsletter: {
      title: 'Newsletter',
      desc: 'Stay informed with our monthly newsletter.',
    },
    donation_receipts: {
      title: 'Donation Receipts',
      desc: 'Automatically receive receipts for your donations.',
    },
    donation_reminders: {
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
          {isPending ? (
            'Saving...'
          ) : (
            <>
              <Save className='mr-2 h-4 w-4' /> Save Changes
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
