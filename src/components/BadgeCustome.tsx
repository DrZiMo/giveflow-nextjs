import React from 'react'
import { Badge } from './ui/badge'

interface BadgeProb {
  text?: string
  children?: React.ReactNode
}

const BadgeCustome = ({ text, children }: BadgeProb) => {
  if (children) {
    return (
      <Badge className='text-xs md:text-sm rounded-full py-0 px-1 md:py-1 md:px-3 bg-primary/10 text-primary'>
        {children}
      </Badge>
    )
  }
  return (
    <Badge className='text-xs md:text-sm rounded-full py-0 px-1 md:py-1 md:px-3 bg-primary/10 text-primary'>
      {text}
    </Badge>
  )
}

export default BadgeCustome
