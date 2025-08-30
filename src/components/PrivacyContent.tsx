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
import { Save } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect } from 'react'
import { useUpdatePrivacySettings } from '@/lib/hook/useUser'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'

export function PrivacyContent() {
  const user = useSelector((state: RootState) => state.selectedUser.user)
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof PrivacySchema>>({
    resolver: zodResolver(PrivacySchema),
    defaultValues: {
      is_anonymous: false,
      is_public: false,
      is_history_visible: false,
    },
  })

  useEffect(() => {
    if (user) {
      form.reset({
        is_anonymous: user.is_anonymous || false,
        is_public: user.is_public || false,
        is_history_visible: user.is_history_visible || false,
      })
    }
  }, [user, form])

  const { mutate: updatePrivacySettings, isPending } =
    useUpdatePrivacySettings()

  function onSubmit(data: z.infer<typeof PrivacySchema>) {
    updatePrivacySettings(data, {
      onSuccess: () => {
        toast.success('Privacy settings updated successfully')
        queryClient.invalidateQueries({ queryKey: ['single-user'] })
      },
      onError: () => {
        toast.error('Failed to update privacy settings')
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <div>
          <div className='space-y-2'>
            <FormField
              control={form.control}
              name='is_anonymous'
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
              name='is_public'
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
              name='is_history_visible'
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
          {isPending ? (
            'Saving...'
          ) : (
            <>
              <Save /> Save
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
