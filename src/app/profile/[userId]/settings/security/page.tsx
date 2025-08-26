'use client'

import SecurityContent from '@/components/SecurityContent'
import TwoStepVerification from '@/components/TwoStepVerification'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SecurityPage = () => {
  return (
    <Card className='px-2! w-full'>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <SecurityContent />
        <TwoStepVerification />
      </CardContent>
    </Card>
  )
}

export default SecurityPage
