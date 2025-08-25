'use client'

import { NotificationInfoContent } from '@/components/NotificationInfoContent'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SecurityPage = () => {
  return (
    <Card className='px-2! w-full'>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <NotificationInfoContent />
      </CardContent>
    </Card>
  )
}

export default SecurityPage
