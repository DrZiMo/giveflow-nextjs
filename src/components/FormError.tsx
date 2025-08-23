import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { Alert } from './ui/alert'

const FormError = ({ message }: { message: string }) => {
  if (!message) return null
  return (
    <Alert variant={'destructive'} className='bg-destructive/15'>
      <TriangleAlert />
      {message}
    </Alert>
  )
}

export default FormError
