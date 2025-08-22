'use client'

import React, { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { LoginSchema } from '@/app/schemas'
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
import SocialLogin from './SocialLogin'

const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const onSubmit = (value: z.infer<typeof LoginSchema>) => {
    console.log(value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((value) => onSubmit(value))}>
        <div className='flex flex-col gap-6'>
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
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Lock
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                      size={18}
                    />
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Enter your password'
                      className='pl-10 pr-10'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
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
        </div>

        {/* Submit button */}
        <Button type='submit' className='w-full mt-4'>
          Login <ArrowRight />
        </Button>

        {/* Divider */}
        <div className='flex items-center gap-4 text-sm text-muted-foreground mt-6'>
          <div className='flex-grow h-px bg-muted-foreground' />
          <p className='uppercase px-1 text-xs tracking-wider'>
            Or Continue with
          </p>
          <div className='flex-grow h-px bg-muted-foreground' />
        </div>

        {/* Social login */}
        <SocialLogin />

        {/* sign up */}
        <div className='text-muted-foreground text-center mt-6'>
          <p>
            Don&apos;t have an account?{' '}
            <Link
              href='/auth/register'
              className='text-primary font-semibold hover:underline'
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}

export default LoginContent
