'use client'

import React from 'react'
import { Heart } from 'lucide-react'

interface SaveLaterButtonProps {
  size?: number
}

const SaveLaterButton = ({ size = 30 }: SaveLaterButtonProps) => {
  return (
    <div className='w-fit text-primary hover:[&_svg]:fill-current'>
      <Heart
        size={size}
        className='fill-transparent transition cursor-pointer'
      />
    </div>
  )
}

export default SaveLaterButton
