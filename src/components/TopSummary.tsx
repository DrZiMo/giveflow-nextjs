import React from 'react'
import { Card } from './ui/card'
import { Award, DollarSign, Heart, TrendingUp } from 'lucide-react'

const TopSummary = () => {
  const summaries = [
    {
      icon: DollarSign,
      amount: '$12,450',
      desc: 'Total Donated',
      iconStyle:
        'bg-green-100 text-green-500 w-fit p-2 rounded-md flex items-center justify-center',
    },
    {
      icon: Heart,
      amount: '23',
      desc: 'Causes Supported',
      iconStyle:
        'bg-blue-100 text-blue-500 w-fit p-2 rounded-md flex items-center justify-center',
    },
    {
      icon: TrendingUp,
      amount: '$185',
      desc: 'Average Donation',
      iconStyle:
        'bg-purple-100 text-purple-500 w-fit p-2 rounded-md flex items-center justify-center',
    },
    {
      icon: Award,
      amount: '$2,500',
      desc: 'Highest Single Donation',
      iconStyle:
        'bg-orange-100 text-orange-500 w-fit p-2 rounded-md flex items-center justify-center',
    },
  ]

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-8'>
      {summaries.map((summary, index) => (
        <Card key={index} className='py-3! px-3'>
          <div className={`flex flex-col gap-3 p-4 rounded-md`}>
            <div className={summary.iconStyle}>
              <summary.icon className='w-6 h-6' />
            </div>
            <div>
              <p className='text-2xl font-semibold'>{summary.amount}</p>
              <p className='text-sm text-muted-foreground'>{summary.desc}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default TopSummary
