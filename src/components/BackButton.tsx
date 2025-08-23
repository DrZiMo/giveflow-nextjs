'use client'

import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const route = useRouter()

  return (
    <Button onClick={() => route.back()} variant={'link'}>
      <ChevronLeft /> Back
    </Button>
  )
}

export default BackButton
