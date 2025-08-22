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
    <div className='w-full flex flex-col items-center gap-6 mt-10'>
      <AuthTitle
        title='Welcome Back'
        subtitle='Sign in to continue your giving journey'
      />
      <Card className='w-full max-w-md p-6'>
        <CardHeader className='w-full text-center'>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription className='text-muted-foreground text-md'>
            Please enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-8'>
          <LoginContent />
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
