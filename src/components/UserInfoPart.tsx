import { UsersProps } from '@/app/types/users.types'
import { Edit, HatGlasses, Mail, Phone, User } from 'lucide-react'
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const UserInfoPart = ({ user }: { user: UsersProps }) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    is_anonymous,
    is_email_verified,
    is_phone_number_verified,
    role,
  } = user

  const userInfo = [
    {
      icon: User,
      value: (
        <div className='flex items-center gap-2'>
          {first_name} {last_name}
          {role === 'admin' && <Badge variant={'success'}>Admin</Badge>}
        </div>
      ),
    },
    {
      icon: Mail,
      value: (
        <div className='flex items-center gap-2'>
          {email}
          {is_email_verified && <Badge variant={'secondary'}>Verified</Badge>}
        </div>
      ),
    },
    {
      icon: Phone,
      value: (
        <div className='flex items-center gap-2'>
          {phone_number ? phone_number : 'No Phone Number'}
          {phone_number && is_phone_number_verified && (
            <Badge variant={'outline'}>Verified</Badge>
          )}
        </div>
      ),
    },
    {
      icon: HatGlasses,
      value: is_anonymous ? 'Anonymous User' : 'Not Anonymous',
    },
  ]

  return (
    <div className='bg-card rounded-2xl space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold text-foreground pb-2'>
          User Information
        </h2>
        <Button>
          <Edit />
          Edit
        </Button>
      </div>
      <div className='space-y-3'>
        {userInfo.map((info, key) => (
          <div key={key} className='flex items-center gap-3 p-3'>
            <info.icon className='text-muted-foreground h-5 w-5' />
            <span className='text-muted-foreground text-sm flex items-center'>
              {info.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserInfoPart
