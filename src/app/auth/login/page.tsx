import AuthTitle from '@/components/Auth/AuthTitle'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Metadata } from 'next'
import '@/app/globals.css'
import LoginContent from '@/components/Auth/LoginContent'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your GiveFlow account',
}

const LoginPage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-6 pt-10 md:pt-0 mt-10'>
      <AuthTitle
        title='Welcome Back'
        subtitle='Sign in to continue your giving journey'
      />
      <Card className='w-full max-w-md px-3 py-6 md:px-6'>
        <CardHeader className='w-full text-center'>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription className='text-muted-foreground text-md'>
            Please enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginContent />
        </CardContent>
      </Card>
      <p className='text-sm text-muted-foreground mb-5'>
        &copy; 2025 GiveFlow. All rights reserved.
      </p>
    </div>
  )
}

export default LoginPage
