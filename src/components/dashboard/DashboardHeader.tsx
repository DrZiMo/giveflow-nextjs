'use client'

import { RootState } from '@/store'
import { User } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from '../ui/badge'
import Link from 'next/link'

const DashboardHeader = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className='w-full flex justify-end'>
      <Link href={`/profile/${user?.id}`}>
        <div className='flex gap-2 items-center'>
          <div className='w-9 h-9 rounded-full cursor-pointer'>
            {user?.profile_pic ? (
              <img
                src={user.profile_pic}
                alt={user.first_name}
                className='w-full h-full object-cover rounded-full'
              />
            ) : (
              <div className='bg-primary w-full h-full flex items-center justify-center rounded-full'>
                <User />
              </div>
            )}
          </div>
          <div className='hidden md:flex md:flex-col'>
            <div className='flex gap-2'>
              <h2 className='font-medium'>{user?.first_name}</h2>
              <Badge variant={'success'}>{user?.role}</Badge>
            </div>
            <p className='text-muted-foreground text-sm'>{user?.email}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DashboardHeader
