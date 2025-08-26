'use client'

import SecurityContent from '@/components/SecurityContent'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SecurityPage = () => {
  return (
    <Card className='px-2! w-full'>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <SecurityContent />
      </CardContent>
    </Card>
  )
}

export default SecurityPage
