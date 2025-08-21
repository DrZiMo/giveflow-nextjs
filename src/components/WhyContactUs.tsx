'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { CircleCheckBig } from 'lucide-react'
import { Label } from './ui/label'

const WhyContactUs = () => {
  const whyContactUs = {
    donors: [
      'For Donors',
      'Questions about donations, tax receipts, or finding the right causes to support.',
    ],
    organizations: [
      'For Organizations',
      'Interested in joining our platform or need help managing your campaigns.',
    ],
    partners: [
      'For Partners',
      'Exploring partnership opportunities or integration possibilities.',
    ],
    support: [
      'For General Support',
      'Technical issues, feedback, or any other questions about GiveFlow.',
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-[650] flex gap-5 items-center'>
          <CircleCheckBig className='text-primary' /> Why Contact Us?
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        {Object.values(whyContactUs).map(([title, desc], index) => (
          <div key={index} className='flex flex-col'>
            <Label className='font-semibold text-lg'>{title}</Label>
            <p className='text-muted-foreground text-sm'>{desc}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default WhyContactUs
