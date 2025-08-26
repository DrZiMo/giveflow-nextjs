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
import { settings } from '@/app/data/settings'
import { useParams } from 'next/navigation'
import { SettingsProbs } from '@/app/types/settings.types'
import { Save } from 'lucide-react'

export function NotificationInfoContent() {
  const { userId } = useParams<{ userId: string }>()
  const userSettings = settings.find((setting) => setting.userId === +userId)
  const form = useForm<z.infer<typeof NotificationSchema>>({
    resolver: zodResolver(NotificationSchema),
    defaultValues: {
      EmailNotifications: userSettings?.EmailNotifications.value || false,
      SMSNotifications: userSettings?.SMSNotifications.value || false,
      PushNotifications: userSettings?.PushNotifications.value || false,
      NewsLetter: userSettings?.NewsLetter.value || false,
      DonationReciepts: userSettings?.DonationReciepts.value || false,
      DonationReminder: userSettings?.DonationReminder.value || false,
    },
  })

  const settingEntries = Object.entries(userSettings as SettingsProbs).filter(
    ([key]) => key !== 'userId'
  ) as [
    keyof typeof userSettings,
    { value: boolean; desc: string; title: string }
  ][]

  function onSubmit(data: z.infer<typeof NotificationSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <div>
          <div className='space-y-2'>
            {settingEntries?.map(([key, setting]) => (
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
        </div>
        <Button type='submit'>
          <Save /> Save
        </Button>
      </form>
    </Form>
  )
}
