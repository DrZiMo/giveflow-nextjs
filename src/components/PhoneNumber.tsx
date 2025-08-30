import React, { useEffect } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Input } from './ui/input'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { PhoneNumberSchema } from '@/app/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Button } from './ui/button'
import FormError from './FormError'

const PhoneNumber = () => {
  const user = useSelector((state: RootState) => state.selectedUser.user)

  const form = useForm<z.infer<typeof PhoneNumberSchema>>({
    resolver: zodResolver(PhoneNumberSchema),
    defaultValues: {
      email: '',
      phoneNumber: '',
    },
    mode: 'onTouched',
  })

  useEffect(() => {
    if (user) {
      form.reset({
        email: user.email || '',
        phoneNumber: user.phone_number || '',
      })
    }
  }, [user, form])

  const onSubmit = (value: z.infer<typeof PhoneNumberSchema>) => {
    console.log(value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 items-center mt-10'>
          {/* Email Input */}
          <FormField
            control={form.control}
            name='email'
            disabled
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
            disabled={!!user.phone_number}
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

        {/* Submit button */}
        <Button
          type='submit'
          className='w-fit mt-4 ml-auto'
          disabled={
            !form.formState.isValid ||
            Object.values(form.getValues()).some((v) => !v)
          }
        >
          Save Phone number <ArrowRight />
        </Button>

        <FormError message='' />
      </form>
    </Form>
  )
}

export default PhoneNumber
