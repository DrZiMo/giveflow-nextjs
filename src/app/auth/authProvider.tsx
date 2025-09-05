'use client'

import { useAppSelector } from '@/store/redux/hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth)
  const pathname = usePathname()
  const router = useRouter()
  const tempToken = useSearchParams().get('t')

  useEffect(() => {
    if (isLoggedIn) {
      if (pathname == '/auth/email-verification' && !user?.is_email_verified) {
        return
      }

      if (
        pathname.startsWith('/auth/forget-password') ||
        pathname.startsWith('/auth/verify-reset-code') ||
        pathname.startsWith('/auth/new-password')
      ) {
        const sessionToken = sessionStorage.getItem('forgetPasswordToken')
        if (!tempToken || tempToken !== sessionToken) {
          router.back()
        }

        return
      }

      if (!user?.is_logged_in && user?.is_two_factor_authentication) return

      router.push('/causes')
    }
  }, [isLoggedIn, router, pathname, user, tempToken])
  return <>{children}</>
}
