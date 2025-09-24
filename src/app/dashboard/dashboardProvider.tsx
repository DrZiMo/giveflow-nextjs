'use client'

import { RootState } from '@/store'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { ROLE } from '../types/users.types'

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  if (!isLoggedIn) router.replace('/auth/login')

  if (user?.role === ROLE.USER) router.replace('/')

  return <>{children}</>
}

export default DashboardProvider
