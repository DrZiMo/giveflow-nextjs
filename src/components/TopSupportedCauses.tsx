import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Activity,
  Ambulance,
  Bird,
  BookOpenText,
  LeafyGreen,
} from 'lucide-react'

const TopSupportedCauses = () => {
  const supportedCauses = [
    {
      icon: Ambulance,
      cause: 'Emergency Relief',
      amount: 3200,
    },
    {
      icon: BookOpenText,
      cause: 'Education',
      amount: 2800,
    },
    {
      icon: LeafyGreen,
      cause: 'Environment',
      amount: 1950,
    },
    {
      icon: Activity,
      cause: 'Health Care',
      amount: 1650,
    },
    {
      icon: Bird,
      cause: 'Animal Welfare',
      amount: 1200,
    },
  ]

  const total = supportedCauses.reduce((acc, cause) => acc + cause.amount, 0)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Supported Causes</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {supportedCauses.map((cause, index) => {
          const percentage = (cause.amount / total) * 100

          return (
            <div className='flex justify-between items-center' key={index}>
              <div className='flex items-center'>
                <cause.icon className='mr-3 text-muted-foreground' size={18} />
                <h3 className='font-medium'>{cause.cause}</h3>
              </div>
              <div className='text-right'>
                <h3 className='font-medium'>
                  ${cause.amount.toLocaleString()}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {percentage.toFixed(0)}% of total
                </p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default TopSupportedCauses
