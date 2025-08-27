import AuthTitle from '@/components/Auth/AuthTitle'
import SignupContent from '@/components/Auth/SignupContent'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup to your GiveFlow account',
}

const SignupPage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-6 mt-10'>
      <AuthTitle
        title='Join GiveFlow'
        subtitle='Start making a difference today'
      />
      <Card className='w-full max-w-md p-6'>
        <CardHeader className='w-full text-center'>
          <CardTitle className='text-2xl'>Create Account</CardTitle>
          <CardDescription className='text-muted-foreground text-md'>
            Join thousands of donors making a difference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupContent />
        </CardContent>
      </Card>
      <p className='text-sm text-muted-foreground mb-5'>
        &copy; 2025 GiveFlow. All rights reserved.
      </p>
    </div>
  )
}

export default SignupPage
