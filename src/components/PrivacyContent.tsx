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
import { PrivacySchema } from '@/app/schemas'
import { useParams } from 'next/navigation'
import { Save } from 'lucide-react'
import { Users } from '@/app/data/user'

export function PrivacyContent() {
  const { userId } = useParams<{ userId: string }>()
  const user = Users.find((user) => user.id === +userId)
  const form = useForm<z.infer<typeof PrivacySchema>>({
    resolver: zodResolver(PrivacySchema),
    defaultValues: {
      isAnonymous: user?.is_anonymous || false,
      isPublic: user?.is_public || false,
      isHistoryVisible: user?.is_history_visible || false,
    },
  })

  function onSubmit(data: z.infer<typeof PrivacySchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <div>
          <div className='space-y-2'>
            <FormField
              control={form.control}
              name='isAnonymous'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between p-3'>
                  <div className='space-y-0'>
                    <FormLabel className='text-md'>
                      Donate Anonymously
                    </FormLabel>
                    <FormDescription className='text-sm'>
                      Hide your name from donation lists and public pages.
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
            <FormField
              control={form.control}
              name='isPublic'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between p-3'>
                  <div className='space-y-0'>
                    <FormLabel className='text-md'>
                      Show Profile Publicly
                    </FormLabel>
                    <FormDescription className='text-sm'>
                      Allow others to view your public donor profile
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
            <FormField
              control={form.control}
              name='isHistoryVisible'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between p-3'>
                  <div className='space-y-0'>
                    <FormLabel className='text-md'>
                      Show Donation History
                    </FormLabel>
                    <FormDescription className='text-sm'>
                      Display your donation activity on your public profile
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
          </div>
        </div>
        <Button type='submit'>
          <Save /> Save
        </Button>
      </form>
    </Form>
  )
}
