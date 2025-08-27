'use client'

import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import Link from 'next/link'
import { MobileSidebar } from './MobileSidebar'

const UserPart = () => {
  return (
    <div className='flex gap-8'>
      <div className='flex gap-2'>
        <ModeToggle />
        <div className='md:hidden block'>
          <MobileSidebar />
        </div>
      </div>

      {/* if there is no logged in user */}
      <div className='buttons md:flex gap-3 hidden'>
        <Link href={'/auth/login'}>
          <Button variant={'outline'}>Login</Button>
        </Link>
        <Link href={'/auth/signup'}>
          <Button>Signup</Button>
        </Link>
      </div>
    </div>
  )
}

export default UserPart
