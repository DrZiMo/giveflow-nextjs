'use client'

import ProfileTitle from '@/components/ProfileTitle'
import { Bell, Eye, Lock, Shield } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useParams<{ userId: string }>()
  const pathname = usePathname()
  const subSideBar = [
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
  ]
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
