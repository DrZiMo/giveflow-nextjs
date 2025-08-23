'use client'

import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import Link from 'next/link'

const UserPart = () => {
  return (
    <div className='flex gap-8'>
      <ModeToggle />

      {/* if there is no logged in user */}
      <div className='buttons flex gap-3'>
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
