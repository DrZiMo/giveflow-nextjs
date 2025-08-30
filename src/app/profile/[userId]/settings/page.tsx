'use client'

import PhoneNumber from '@/components/PhoneNumber'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import UserInfoContent from '@/components/UserInfoContent'

const SettingsPage = () => {
  return (
    <Card className='px-2! w-full'>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <UserInfoContent />
        <Separator />
        <PhoneNumber />
      </CardContent>
    </Card>
  )
}

export default SettingsPage
