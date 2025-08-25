'use client'

import { NotificationInfoContent } from '@/components/NotificationInfoContent'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const NotificationsPage = () => {
  return (
    <Card className='px-2! w-full'>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <NotificationInfoContent />
      </CardContent>
    </Card>
  )
}

export default NotificationsPage
