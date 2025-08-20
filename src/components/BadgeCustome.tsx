import React from 'react'
import { Badge } from './ui/badge'

const BadgeCustome = ({ text }: { text: string }) => {
  return (
    <Badge className='text-sm rounded-full py-1 px-3 bg-second text-primary dark:text-[#E0E7FF]'>
      {text}
    </Badge>
  )
}

export default BadgeCustome
