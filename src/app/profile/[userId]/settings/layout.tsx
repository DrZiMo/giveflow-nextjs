'use client'

import ProfileTitle from '@/components/ProfileTitle'
import { RootState } from '@/store'
import { Bell, Eye, Lock, Shield } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const authUser = useSelector((state: RootState) => state.auth.user)
  const user = useSelector((state: RootState) => state.selectedUser.user)
  const isUser = useSelector((state: RootState) => state.selectedUser.isUser)
  const pathname = usePathname()
  const router = useRouter()

  const userId = user?.id

  useEffect(() => {
    if (!authUser || !user || !userId || !isUser) {
      return
    }
    if (authUser.id !== user.id) {
      router.replace(`/profile/${user.id}`)
    }
  }, [authUser, user, authUser?.id, user.id, router, isUser, userId])

  const subSideBar = useMemo(
    () => [
      {
        icon: Shield,
        value: 'Personal Info',
        href: `/profile/${userId}/settings`,
      },
      {
        icon: Bell,
        value: 'Notifications',
        href: `/profile/${userId}/settings/notifications`,
      },
      {
        icon: Lock,
        value: 'Security',
        href: `/profile/${userId}/settings/security`,
      },
      {
        icon: Eye,
        value: 'Privacy',
        href: `/profile/${userId}/settings/privacy`,
      },
    ],
    [userId]
  )

  if (!authUser || !user || !userId || !isUser) {
    return null
  }

  return (
    <div>
      <ProfileTitle
        title='Settings & Security'
        subtitle='Manage your account preferences and security settings'
      />
      <div className='flex flex-col md:flex-row mt-10 gap-10 md:gap-7'>
        <ul className='space-y-3'>
          {subSideBar.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.value}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors text-sm ${
                    isActive
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <item.icon className='w-4 h-4' />
                  <span className='font-medium'>{item.value}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  )
}

export default SettingsLayout
