'use client'

import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import Link from 'next/link'
import { MobileSidebar } from './MobileSidebar'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import UserProfilePicture from './UserProfilePicture'

const UserPart = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center gap-2'>
        <ModeToggle />
        <div className='md:hidden block'>
          <MobileSidebar />
        </div>
      </div>

      {isLoggedIn ? (
        <UserProfilePicture user={user!} />
      ) : (
        <>
          {/* if there is no logged in user */}
          <div className='buttons md:flex gap-3 hidden'>
            <Link href={'/auth/login'}>
              <Button variant={'outline'}>Login</Button>
            </Link>
            <Link href={'/auth/signup'}>
              <Button>Signup</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default UserPart
