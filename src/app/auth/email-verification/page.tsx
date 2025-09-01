'use client'

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
import { useSendCodeEmail } from '@/lib/hook/useAuth'
import React, { useEffect, useRef, useState } from 'react'

const EmailVerification = () => {
  const [timer, setTimer] = useState(40)
  const [canResend, setCanResend] = useState(false)
  const { mutate: sendCode } = useSendCodeEmail()

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true)
      return
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  const didSendCode = useRef(false)

  useEffect(() => {
    sendCode()
    didSendCode.current = true
  }, [])

  const resendCode = () => {
    sendCode()
    setTimer(40)
    setCanResend(false)
  }
  return (
    <div className='w-[90vw] h-[80vh] flex justify-center items-center'>
      <Card className='py-3! px-3 w-[400px]'>
        <CardHeader>
          <CardTitle>Verify Your Email</CardTitle>
          <CardDescription>
            We&apos;ve sent a 6-digit verification code to your email. Please
            enter it below to continue.
          </CardDescription>
          <CardContent>
            <div className='my-6'>
              <InputOTP maxLength={6}>
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
          </CardContent>
          <CardFooter className='px-0! flex justify-between items-center'>
            <Button variant={'link'} disabled={!canResend} onClick={resendCode}>
              Resend{canResend ? '' : ` (${timer}s)`}
            </Button>
            <Button>Verify</Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  )
}

export default EmailVerification
