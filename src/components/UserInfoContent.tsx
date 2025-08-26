'use client'

import { ArrowRight, Mail, Phone, User } from 'lucide-react'
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
import FormError from './FormError'
import { useParams } from 'next/navigation'
import { Users } from '@/app/data/user'

const UserInfoContent = () => {
  const { userId } = useParams<{ userId: string }>()
  const user = Users.find((user) => user.id === parseInt(userId))

  const form = useForm<z.infer<typeof EditUserSchema>>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      firstName: user?.first_name || '',
      lastName: user?.last_name || '',
      email: user?.email || '',
      phoneNumber: user?.phone_number || '',
    },
    mode: 'onBlur',
  })

  const onSubmit = (value: z.infer<typeof EditUserSchema>) => {
    console.log(value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
        <div className='flex flex-col gap-6'>
          <div className='grid grid-cols-2 gap-3'>
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

          <div className='grid grid-cols-2 gap-3 items-center'>
            {/* Email Input */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='grid w-full max-w-sm items-center gap-3'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Mail
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                        size={18}
                      />
                      <Input
                        {...field}
                        type='email'
                        placeholder='Enter your email'
                        className='pl-10'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone number Input */}
            <FormField
              control={form.control}
              name='phoneNumber'
              render={({ field }) => (
                <FormItem className='grid w-full max-w-sm items-center gap-3'>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Phone
                        className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                        size={18}
                      />
                      <Input
                        {...field}
                        type='text'
                        placeholder='Enter your phone number '
                        className='pl-10 pr-10'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormError message='' />

        {/* Submit button */}
        <Button
          type='submit'
          className='w-fit mt-4'
          disabled={
            !form.formState.isValid ||
            Object.values(form.getValues()).some((v) => !v)
          }
        >
          Save Changes <ArrowRight />
        </Button>
      </form>
    </Form>
  )
}

export default UserInfoContent
