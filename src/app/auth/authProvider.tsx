'use client'

import { useAppSelector } from '@/store/redux/hooks'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      if (pathname == '/auth/email-verification' && !user?.is_email_verified) {
        return
      }

      router.push('/causes')
    }
  }, [isLoggedIn, router, pathname, user])
  return <>{children}</>
}
