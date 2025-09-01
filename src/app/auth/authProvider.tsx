'use client'

import { useAppSelector } from '@/store/redux/hooks'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/causes')
    }
  }, [isLoggedIn, router])
  return <>{children}</>
}
