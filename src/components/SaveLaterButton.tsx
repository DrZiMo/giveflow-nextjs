'use client'

import React from 'react'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'

interface SaveLaterButtonProps {
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
  size?: number
}

const SaveLaterButton = ({
  variant = 'link',
  size = 30,
}: SaveLaterButtonProps) => {
  return (
    <Button variant={variant} className='w-fit'>
      <Heart
        size={size}
        className='fill-transparent transition cursor-pointer'
      />
    </Button>
  )
}

export default SaveLaterButton
