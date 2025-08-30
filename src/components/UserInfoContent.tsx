'use client'

import { ArrowRight, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { EditUserSchema } from '@/app/schemas'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect } from 'react'

const UserInfoContent = () => {
  const user = useSelector((state: RootState) => state.selectedUser.user)

  const form = useForm<z.infer<typeof EditUserSchema>>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    mode: 'onTouched',
  })

  useEffect(() => {
    if (user) {
      form.reset({
        firstName: user.first_name || '',
        lastName: user.last_name || '',
      })
    }
  }, [user, form])

  const onSubmit = (value: z.infer<typeof EditUserSchema>) => {
    console.log(value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
        <div className='flex flex-col gap-6 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3'>
            {/* First name Input */}
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='grid w-full max-w-sm items-center gap-3'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <User
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                        size={18}
                      />
                      <Input
                        {...field}
                        type='text'
                        placeholder='Hebel'
                        className='pl-10'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* First name Input */}
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='grid w-full max-w-sm items-center gap-3'>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <User
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                        size={18}
                      />
                      <Input
                        {...field}
                        type='text'
                        placeholder='Hebel'
                        className='pl-10'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit button */}
          <Button
            type='submit'
            className='w-fit mt-4 ml-auto'
            disabled={
              !form.formState.isValid ||
              Object.values(form.getValues()).some((v) => !v)
            }
          >
            Save Changes <ArrowRight />
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default UserInfoContent
