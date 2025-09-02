import { Smartphone } from 'lucide-react'
import React, { useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useToggleTwoFactorAuthentication } from '@/lib/hook/useUser'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useQueryClient } from '@tanstack/react-query'

const TwoStepVerification = () => {
  const twoFAEnabled = useSelector(
    (state: RootState) => state.auth.user?.is_two_factor_authentication ?? false
  )
  const { mutate: toggle2FA } = useToggleTwoFactorAuthentication()
  const [isEnabled, setIsEnabled] = useState<boolean>(twoFAEnabled)
  const queryClient = useQueryClient()

  const handleToggle = () => {
    const action = isEnabled ? 'disabled' : 'enabled'
    toggle2FA(undefined, {
      onSuccess: () => {
        toast.success(`two factor authentication is ${action} successfully`, {
          id: toastId,
        })
        setIsEnabled((prev) => !prev)
        queryClient.invalidateQueries({ queryKey: ['whoami'] })
      },
      onError: () => {
        toast.error('Failed to toggle two factor authentication', {
          id: toastId,
        })
      },
    })
  }

  return (
    <div className=' mt-10 bg-primary/5 p-6 text-center md:text-left md:p-3 rounded-md'>
      <div className='flex flex-col md:flex-row justify-start gap-3 items-center'>
        <div className='text-primary'>
          <Smartphone />
        </div>
        <div className='flex-1'>
          <h1 className='font-semibold'>Two-Factor Authentication</h1>
          <p className='text-muted-foreground'>
            Add an extra layer of security to your account
          </p>
        </div>
        <div className='mb-5 md:mb-0'>
          <Badge variant={isEnabled ? 'success' : 'destructive'}>
            {isEnabled ? 'Enabled' : 'Disabled'}
          </Badge>
        </div>
      </div>
      <Button className='mt-3' onClick={handleToggle}>
        {isEnabled ? 'Disable' : 'Enable'}
      </Button>
    </div>
  )
}

export default TwoStepVerification
