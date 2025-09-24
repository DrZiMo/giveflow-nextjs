'use client'

import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BackButton = ({ link = 'back' }: { link?: string }) => {
  const route = useRouter()

  return (
    <Button
      onClick={() => (link === 'back' ? route.back() : route.push(link))}
      variant={'link'}
    >
      <ChevronLeft /> Back
    </Button>
  )
}

export default BackButton
