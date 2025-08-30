'use client'

import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { ChangePasswordSchema } from '@/app/schemas'
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
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useChangePassword } from '@/lib/hook/useAuth'

const SecurityContent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
  })

  const { mutate: changePassword, isPending, error } = useChangePassword()

  const onSubmit = (value: z.infer<typeof ChangePasswordSchema>) => {
    changePassword(value, {
      onSuccess: () => {
        toast.success('Password changed successfully', { id: toastId })
      },
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((value) => onSubmit(value))}
        className=''
      >
        <div className='flex flex-col gap-6 ml-2 w-full'>
          {/* Current Password Input */}
          <FormField
            control={form.control}
            name='currentPassword'
            render={({ field }) => (
              <FormItem className='grid w-full max-w-sm items-center gap-3'>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Lock
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                      size={18}
                    />
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Enter your current password'
                      className='pl-10 pr-10'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gray-600'
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
                <Link href='/auth/forgot-password' className='w-fit'>
                  <Button variant={'link'} className='text-sm m-0 px-0 !py-0'>
                    Forgot password?
                  </Button>
                </Link>
              </FormItem>
            )}
          />

          {/* New Password Input */}
          <FormField
            control={form.control}
            name='newPassword'
            render={({ field }) => (
              <FormItem className='grid w-full max-w-sm items-center gap-3'>
                <FormLabel>New Password</FormLabel>
                <FormControl className='w-full'>
                  <div className='relative'>
                    <Lock
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                      size={18}
                    />
                    <Input
                      {...field}
                      type={showNewPassword ? 'text' : 'password'}
                      placeholder='Enter new password'
                      className='pl-10 pr-10'
                    />
                    <button
                      type='button'
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gray-600'
                    >
                      {showNewPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Input */}
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem className='grid w-full max-w-sm items-center gap-3'>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl className='w-full'>
                  <div className='relative'>
                    <Lock
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                      size={18}
                    />
                    <Input
                      {...field}
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder='Enter new password'
                      className='pl-10 pr-10'
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gray-600'
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormError message={error?.message || null} />

        {/* Submit button */}
        <Button
          type='submit'
          className='w-fit mt-4'
          disabled={
            !form.formState.isValid ||
            Object.values(form.getValues()).some((v) => !v) ||
            isPending
          }
        >
          {isPending ? 'Changing ...' : 'Change password'}
        </Button>
      </form>
    </Form>
  )
}

export default SecurityContent
