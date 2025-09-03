'use client'

import { toastId } from '@/app/_constants/backendBaseUrl'
import { newPasswordSchema } from '@/app/schemas'
import FormError from '@/components/FormError'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { logoutUser } from '@/lib/api/auth'
import { useResetPassword } from '@/lib/hook/useAuth'
import { AppDispatch, RootState } from '@/store'
import { logout } from '@/store/authSlice'
import { clearUser } from '@/store/userSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import * as z from 'zod'

const ForgetPassword = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const queryClient = useQueryClient()
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.auth.isLoggedIn)

  const { mutate: resetPassword, isPending, error } = useResetPassword()

  const handleLogout = async () => {
    if (user) {
      try {
        await logoutUser()
        queryClient.removeQueries({ queryKey: ['whoami'], exact: true })
        dispatch(logout())
        dispatch(clearUser())
        router.replace('/auth/login')
      } catch (error) {
        console.error('Error logging out:', error)
      }
    } else {
      router.replace('/auth/login')
    }
  }

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
  })

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    resetPassword(values, {
      onSuccess: () => {
        toast.success('Password resetted successfully', { id: toastId })
        handleLogout()
      },
      onError: () => {
        toast.error('Failed to reset the password', { id: toastId })
      },
    })
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <Card className='w-[90%] md:w-[400px]'>
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>
            Enter a new password and confirm it to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
              <div className='flex flex-col gap-6'>
                {/* Password Input */}
                <FormField
                  control={form.control}
                  name='newPassword'
                  render={({ field }) => (
                    <FormItem className='grid w-full max-w-sm items-center gap-3'>
                      <FormLabel>New Password *</FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <Lock
                            className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                            size={18}
                          />
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Create strong password'
                            className='pl-10 pr-10'
                          />
                          <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gray-600'
                          >
                            {showPassword ? (
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

                {/*Confirm Password Input */}
                <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => (
                    <FormItem className='grid w-full max-w-sm items-center gap-3'>
                      <FormLabel>Confirm Password *</FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <Lock
                            className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                            size={18}
                          />
                          <Input
                            {...field}
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirm your password'
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

              <Button
                type='submit'
                className='ml-auto mt-4'
                disabled={
                  !form.formState.isValid ||
                  Object.values(form.getValues()).some((v) => !v) ||
                  isPending
                }
              >
                Reset
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ForgetPassword
