import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Clock } from 'lucide-react'

const QuickResponse = () => {
  return (
    <Card className='flex flex-col gap-5'>
      <CardHeader>
        <CardTitle>Quick Response Guarantee</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>
          We understand that your time is valuable. That&apos;s why we commit to
          responding to all inquiries within 24 hours during business days.
        </p>
      </CardContent>
      <CardFooter>
        <h1 className='text-primary flex items-center gap-2'>
          <Clock size={18} /> Response within 24 hours
        </h1>
      </CardFooter>
    </Card>
  )
}

export default QuickResponse
