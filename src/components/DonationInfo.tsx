'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useParams } from 'next/dist/client/components/navigation'
import causes from '@/app/data/causes'
import SaveLaterButton from './SaveLaterButton'
import { Progress } from './ui/progress'
import { Users } from 'lucide-react'

const DonationInfo = () => {
  const { causeId } = useParams()
  const selectedCause = causes.find((cause) => cause.id === +causeId!)

  if (!selectedCause) return null

  const percentage =
    (selectedCause.currentAmount / selectedCause.amountNeeded) * 100

  return (
    <div className=''>
      <Card>
        <CardHeader className='flex justify-between'>
          <CardTitle className='text-xl font-semibold'>
            Donate to {selectedCause.title}
          </CardTitle>
          <SaveLaterButton size={50} />
        </CardHeader>
        <CardContent>
          {/* Progress Section */}
          <div className='flex justify-between items-center text-sm'>
            <span className='text-md font-semibold'>
              ${selectedCause.currentAmount.toLocaleString()}
            </span>
            <span className='text-muted-foreground'>
              Goal: ${selectedCause.amountNeeded.toLocaleString()}
            </span>
          </div>
          <Progress value={percentage} className='mt-2' />
          <div className='flex justify-between items-center text-sm text-muted-foreground mt-1'>
            <span>{percentage.toFixed(0)}% completed</span>
            <span className='flex items-center gap-1'>
              <Users size={15} /> {selectedCause.donors} donors
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DonationInfo
