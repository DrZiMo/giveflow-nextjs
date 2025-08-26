import { Smartphone } from 'lucide-react'
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const TwoStepVerification = () => {
  const twoFAEnabled = true
  return (
    <div className=' mt-10 bg-primary/5 p-3 rounded-md'>
      <div className='flex gap-3 items-center'>
        <div className='text-primary'>
          <Smartphone />
        </div>
        <div className='flex-1'>
          <h1 className='font-semibold'>Two-Factor Authentication</h1>
          <p className='text-muted-foreground'>
            Add an extra layer of security to your account
          </p>
        </div>
        <div>
          <Badge variant={twoFAEnabled ? 'success' : 'destructive'}>
            {twoFAEnabled ? 'Enabled' : 'Disabled'}
          </Badge>
        </div>
      </div>
      <Button className='mt-3'>{twoFAEnabled ? 'Disable' : 'Enable'}</Button>
    </div>
  )
}

export default TwoStepVerification
