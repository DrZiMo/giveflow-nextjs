'use client'

import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='text-primary font-lexend font-semibold text-2xl'>
      <Link href={'/'}>
        Give<span className='text-foreground'>Flow</span>
      </Link>
    </div>
  )
}

export default Logo
