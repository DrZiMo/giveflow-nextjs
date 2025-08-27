import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'

const MonthlyDonation = () => {
  const monthlyDonations = [
    {
      month: 'Jan',
      amount: 850,
    },
    {
      month: 'Feb',
      amount: 920,
    },
    {
      month: 'Mar',
      amount: 1100,
    },
    {
      month: 'Apr',
      amount: 1350,
    },
    {
      month: 'May',
      amount: 1200,
    },
    {
      month: 'Jun',
      amount: 1450,
    },
    {
      month: 'Jul',
      amount: 1650,
    },
    {
      month: 'Aug',
      amount: 1400,
    },
    {
      month: 'Sep',
      amount: 1550,
    },
    {
      month: 'Oct',
      amount: 1800,
    },
    {
      month: 'Nov',
      amount: 1650,
    },
    {
      month: 'Dec',
      amount: 1900,
    },
  ]

  const maxAmount = Math.max(...monthlyDonations.map((d) => d.amount))
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Donations</CardTitle>
      </CardHeader>
      <CardContent className='space-y-5'>
        {monthlyDonations.map((d) => {
          const percentage = (d.amount / maxAmount) * 100

          return (
            <div
              className='grid grid-cols-[50px_3fr_50px] items-center gap-3 text-sm'
              key={d.month}
            >
              <h3 className='text-muted-foreground font-medium'>{d.month}</h3>
              <Progress value={percentage} className='h-6' />
              <h3 className='font-medium'>${d.amount}</h3>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default MonthlyDonation
