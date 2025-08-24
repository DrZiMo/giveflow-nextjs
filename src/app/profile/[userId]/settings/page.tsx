'use client'

import { Users } from '@/app/data/user'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import UserInfoContent from '@/components/UserInfoContent'
import { useParams } from 'next/navigation'

const SettingsPage = () => {
  const { userId } = useParams<{ userId: string }>()
  const user = Users.find((user) => user.id === parseInt(userId))

  return (
    <Card className='px-2! w-full'>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <UserInfoContent />
      </CardContent>
    </Card>
  )
}

export default SettingsPage
