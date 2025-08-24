'use client'

import { Users } from '@/app/data/user'
import ProfileTitle from '@/components/ProfileTitle'
import { Card } from '@/components/ui/card'
import { Camera, User } from 'lucide-react'
import { useParams } from 'next/navigation'
import React from 'react'

const ProfilePage = () => {
  const { userId } = useParams<{ userId: string }>()
  const user = Users.find((user) => user.id === parseInt(userId))

  return (
    <div className='my-10'>
      <ProfileTitle
        title='Donor Profile'
        subtitle='Manage your personal information and donation preferences'
      />

      <Card className='mt-7 p-6'>
        <div className='grid grid-cols-5 gap-7'>
          <div className='flex flex-col items-center'>
            <div className='w-34 h-34 rounded-full bg-primary text-white flex justify-center items-center relative'>
              <User size={70} />
              <div className='absolute w-10 h-10 bg-card rounded-full bottom-0 right-0 flex justify-center items-center border border-muted-foreground/60 text-muted-foreground cursor-pointer hover:bg-primary/10 transition'>
                <Camera />
              </div>
            </div>
            <button className='mt-3 text-primary hover:underline transition font-semibold'>
              Change Photo
            </button>
          </div>
          <div className='border border-blue-500 col-span-4'>
            {user?.first_name}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProfilePage
