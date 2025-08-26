'use client'

import DeleteAccount from '@/components/DeleteAccount'
import { PrivacyContent } from '@/components/PrivacyContent'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const PrivacyPage = () => {
  return (
    <Card className='px-2! w-full'>
      <CardHeader>
        <CardTitle>Privacy Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <PrivacyContent />
        <DeleteAccount />
      </CardContent>
    </Card>
  )
}

export default PrivacyPage
