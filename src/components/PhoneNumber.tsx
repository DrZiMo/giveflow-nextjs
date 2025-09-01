'use client'

import { useEffect, useState } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Mail } from 'lucide-react'
import { Input } from './ui/input'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { PhoneNumberSchema } from '@/app/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { Button } from './ui/button'
import FormError from './FormError'
import Link from 'next/link'
import { PhoneInput } from './PhoneNumberInput'
import { useAddPhoneNumber } from '@/lib/hook/useUser'
import { useQueryClient } from '@tanstack/react-query'
import { setUser } from '@/store/authSlice'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'

const PhoneNumber = () => {
  const user = useSelector((state: RootState) => state.selectedUser.user)
  const [disable, setDisable] = useState(false)
  const { mutate: addPhoneNumber, isPending, error } = useAddPhoneNumber()
  const queryClient = useQueryClient()
  const dispatch = useDispatch<AppDispatch>()
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

  const onSubmit = ({ phoneNumber }: z.infer<typeof PhoneNumberSchema>) => {
    addPhoneNumber(
      { phone_number: phoneNumber },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['whoami'] })
          dispatch(setUser(user))
          toast.success('Phone number added successfully', { id: toastId })
          setDisable(true)
        },
        onError: () => {
          toast.error('Adding phone number failed')
          setDisable(false)
        },
      }
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
        <div className='flex flex-col gap-5 items-center mt-10'>
          <div className='flex gap-2 items-end w-full'>
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
            {user.is_email_verified ? null : (
              <Link href='/auth/email-verification'>
                <Button>Verify Email</Button>
              </Link>
            )}
          </div>

          <div className='flex gap-2 items-end w-full'>
            {/* Phone number Input */}
            <FormField
              control={form.control}
              name='phoneNumber'
              disabled={!!user.phone_number}
              render={({ field }) => (
                <FormItem className='grid w-full max-w-sm items-center gap-3 flex-1'>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      value={field.value || ''}
                      onChange={(value) => field.onChange(value || '')}
                      defaultCountry='SO'
                      placeholder='Enter your phone number'
                      disabled={disable || !!user.phone_number}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit button */}
            {disable || !!user.phone_number ? null : (
              <Button
                type='submit'
                className='w-fit mt-4'
                disabled={
                  !form.formState.isValid ||
                  Object.values(form.getValues()).some((v) => !v) ||
                  isPending
                }
              >
                {isPending ? 'adding phone number ...' : 'Add phone number'}
              </Button>
            )}
          </div>
        </div>
        <FormError message={error?.message || null} />
      </form>
    </Form>
  )
}

export default PhoneNumber
