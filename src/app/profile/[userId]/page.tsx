'use client'

import Loading from '@/app/loading'
import ProfileTitle from '@/components/ProfileTitle'
import { Card } from '@/components/ui/card'
import UserInfoPart from '@/components/UserInfoPart'
import { User } from 'lucide-react'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ProfileImageUploader from '@/components/ProfileImageUploader'
import CameraImageUploader from '@/components/CameraImageUploader'

const ProfilePage = () => {
  const { user, isUser } = useSelector((state: RootState) => state.selectedUser)

  return (
    <div className='my-10'>
      <ProfileTitle
        title='Donor Profile'
        subtitle='Manage your personal information and donation preferences'
      />

      <Suspense fallback={<Loading />}>
        <Card className='mt-7 px-2 py-6 md:px-6'>
          <div className='flex flex-col items-center md:grid md:grid-cols-5 gap-7'>
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
                {!isUser ? null : <CameraImageUploader />}
              </div>
              {!isUser ? null : <ProfileImageUploader />}
            </div>
            <div className='col-span-4'>
              <UserInfoPart />
            </div>
          </div>
        </Card>
      </Suspense>
    </div>
  )
}

export default ProfilePage
