import { useEffect } from 'react'
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
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Button } from './ui/button'
import FormError from './FormError'
import Link from 'next/link'
import { PhoneInput } from './PhoneNumberInput'

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
    console.log(value.phoneNumber)
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
                      {...field} // spreads onChange, onBlur, value, ref
                      value={field.value || ''} // ensure value is string
                      onChange={(value) => field.onChange(value || '')} // update react-hook-form
                      defaultCountry='SO'
                      placeholder='Enter your phone number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit button */}
            <Button
              type='submit'
              className='w-fit mt-4'
              disabled={
                !form.formState.isValid ||
                Object.values(form.getValues()).some((v) => !v)
              }
            >
              Add phone number
            </Button>
          </div>
        </div>
        <FormError message='' />
      </form>
    </Form>
  )
}

export default PhoneNumber
