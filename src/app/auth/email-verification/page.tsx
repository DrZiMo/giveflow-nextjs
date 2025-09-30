'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import {
  useSendCodeEmail,
  useVerifyEmail,
  useVerifyTwoFactorAuthentication,
} from '@/lib/hook/useAuth'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useRouter, useSearchParams } from 'next/navigation'
import FormError from '@/components/FormError'
import { useAppDispatch } from '@/store/redux/hooks'
import { loginSuccess } from '@/store/authSlice'
import { UserProps } from '@/app/types/users.types'

const EmailVerification = () => {
  const searchParams = useSearchParams()
  const twoFactor = searchParams.get('f') === 'true'
  const [otp, setOtp] = useState('')
  const [timer, setTimer] = useState(40)
  const [canResend, setCanResend] = useState(false)

  const { mutate: sendCode } = useSendCodeEmail()
  const verifyEmail = useVerifyEmail()
  const verify2FA = useVerifyTwoFactorAuthentication()

  const didSendCode = useRef(false)
  const router = useRouter()
  const dispatch = useAppDispatch()

  // Countdown timer
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true)
      return
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
    return () => clearInterval(interval)
  }, [timer])

  useEffect(() => {
    if (!didSendCode.current) {
      sendCode()
      didSendCode.current = true
    }
  }, [sendCode])

  const resendCode = () => {
    sendCode()
    setTimer(40)
    setCanResend(false)
  }

  const handleVerify = () => {
    verifyEmail.mutate(
      { code: otp },
      {
        onSuccess: (res) => {
          toast.success('Email verified successfully', { id: toastId })
          dispatch(loginSuccess(res.user as UserProps))
          router.replace('/causes')
        },
        onError: () => toast.error('Email verification failed'),
      }
    )
  }

  const handleLogin = () => {
    verify2FA.mutate(
      { code: otp },
      {
        onSuccess: (res) => {
          toast.success('Verified successfully', { id: toastId })
          dispatch(loginSuccess(res.user as UserProps))
          router.replace('/causes')
        },
        onError: () => toast.error('Verification failed'),
      }
    )
  }

  const isPending = twoFactor ? verify2FA.isPending : verifyEmail.isPending

  return (
    <div className='w-[90vw] h-[80vh] flex justify-center items-center'>
      <Card className='!py-3 !px-3 w-[400px]'>
        <CardHeader>
          <CardTitle>Verify Your Email{twoFactor ? ' (2FA)' : null}</CardTitle>
          <CardDescription>
            We&apos;ve sent a 6-digit verification code to your email. Please
            enter it below to continue.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className='my-6'>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <FormError
            message={
              twoFactor
                ? (verify2FA.error as Error)?.message ?? null
                : (verifyEmail.error as Error)?.message ?? null
            }
          />
        </CardContent>

        <CardFooter className='!px-0 flex justify-between items-center'>
          <Button variant='link' disabled={!canResend} onClick={resendCode}>
            Resend{canResend ? '' : ` (${timer}s)`}
          </Button>
          <Button
            onClick={twoFactor ? handleLogin : handleVerify}
            disabled={isPending}
          >
            {isPending ? 'Verifying...' : 'Verify'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default EmailVerification
