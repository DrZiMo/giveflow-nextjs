'use client'

import { Users } from '@/app/data/user'
import Loading from '@/app/loading'
import { UsersProps } from '@/app/types/users.types'
import ProfileTitle from '@/components/ProfileTitle'
import { Card } from '@/components/ui/card'
import UserInfoPart from '@/components/UserInfoPart'
import { Camera, User } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { Suspense } from 'react'

const ProfilePage = () => {
  const { userId } = useParams<{ userId: string }>()
  const user = Users.find((user) => user.id === parseInt(userId))

  return (
    <div className='my-10'>
      <ProfileTitle
        title='Donor Profile'
        subtitle='Manage your personal information and donation preferences'
      />

      <Suspense fallback={<Loading />}>
        <Card className='mt-7 p-6'>
          <div className='grid grid-cols-5 gap-7'>
            <div className='flex flex-col items-center'>
              <div className='w-34 h-34 relative'>
                {user?.profile_pic ? (
                  <img
                    src={user.profile_pic}
                    className='w-full h-full object-cover rounded-full'
                    alt={user.first_name}
                  />
                ) : (
                  <div className='w-full h-full bg-primary text-white flex justify-center items-center rounded-full '>
                    <User size={70} />
                  </div>
                )}
                <div className='absolute w-10 h-10 bg-card rounded-full bottom-0 right-0 flex justify-center items-center border border-muted-foreground/60 text-muted-foreground cursor-pointer hover:text-muted-foreground transition'>
                  <Camera />
                </div>
              </div>
              <button className='mt-3 text-primary hover:underline transition font-semibold'>
                Change Photo
              </button>
            </div>
            <div className='col-span-4'>
              <UserInfoPart user={user as UsersProps} />
            </div>
          </div>
        </Card>
      </Suspense>
    </div>
  )
}

export default ProfilePage
