import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { Alert } from './ui/alert'

const FormError = ({ message }: { message: string | null }) => {
  if (!message) return null
  return (
    <Alert variant={'destructive'} className='bg-destructive/15 mt-5'>
      <TriangleAlert />
      {message}
    </Alert>
  )
}

export default FormError
