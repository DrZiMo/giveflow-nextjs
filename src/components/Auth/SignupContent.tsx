'use client'

import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { SignupSchema } from '@/app/schemas'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '../ui/form'
import FormError from '../FormError'
import { useSignUp } from '@/lib/hook/useAuth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const SignupContent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    mode: 'onTouched',
  })

  const { mutate: singUp, error, isPending } = useSignUp()

  const onSubmit = (value: z.infer<typeof SignupSchema>) => {
    singUp(value, {
      onSuccess: () => {
        router.replace('/auth/email-verification')
      },
      onError: (err) => {
        toast.error(err.message)
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
        <div className='flex flex-col gap-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-6'>
            {/* First name Input */}
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem className='grid w-full max-w-sm items-center gap-3'>
                  <FormLabel>First Name *</FormLabel>
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
                </FormItem>
              )}
            />
            {/* First name Input */}
            <FormField
              control={form.control}
              name='last_name'
              render={({ field }) => (
                <FormItem className='grid w-full max-w-sm items-center gap-3'>
                  <FormLabel>Last Name *</FormLabel>
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
                </FormItem>
              )}
            />
          </div>

          {/* Email Input */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='grid w-full max-w-sm items-center gap-3'>
                <FormLabel>Email *</FormLabel>
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

          {/* Password Input */}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='grid w-full max-w-sm items-center gap-3'>
                <FormLabel>Password *</FormLabel>
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
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
            name='confirm_password'
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

        {/* Submit button */}
        <Button
          type='submit'
          className='w-full mt-4'
          disabled={
            !form.formState.isValid ||
            Object.values(form.getValues()).some((v) => !v) ||
            isPending
          }
        >
          {isPending ? (
            'Creating ...'
          ) : (
            <>
              Create account <ArrowRight />
            </>
          )}
        </Button>

        {/* sign up */}
        <div className='text-muted-foreground text-center mt-6'>
          <p>
            Already have an account?{' '}
            <Link
              href='/auth/login'
              className='text-primary font-semibold hover:underline'
            >
              Log in here
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}

export default SignupContent
