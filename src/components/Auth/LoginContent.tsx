'use client'

import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Button } from '../ui/button'

const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      {/* Email Input */}
      <div className='grid w-full max-w-sm items-center gap-3'>
        <Label htmlFor='email'>Email</Label>
        <div className='relative'>
          <Mail
            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
            size={18}
          />
          <Input
            type='email'
            id='email'
            placeholder='Enter your email'
            className='pl-10'
          />
        </div>
      </div>

      {/* Password Input */}
      <div className='grid w-full max-w-sm items-center gap-3'>
        <Label htmlFor='password'>Password</Label>
        <div className='relative'>
          <Lock
            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
            size={18}
          />
          <Input
            type={showPassword ? 'text' : 'password'}
            id='password'
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
        <Link href='/auth/forgot-password'>
          <Button variant={'link'} className='text-md m-0 px-0 !py-0'>
            Forgot password?
          </Button>
        </Link>
      </div>
    </>
  )
}

export default LoginContent
