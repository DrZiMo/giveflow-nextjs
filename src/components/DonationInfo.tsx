'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useParams } from 'next/dist/client/components/navigation'
import causes from '@/app/data/causes'
import SaveLaterButton from './SaveLaterButton'
import { Progress } from './ui/progress'
import { ArrowRight, ThumbsUp, Users } from 'lucide-react'
import SmallTitle from './SmallTitle'
import SelectAmount from './SelectAmount'
import Frequency from './Frequency'
import { Button } from './ui/button'

const DonationInfo = () => {
  const buttonSize = 17
  const { causeId } = useParams()
  const selectedCause = causes.find((cause) => cause.id === +causeId!)

  if (!selectedCause) return null

  const percentage =
    (selectedCause.currentAmount / selectedCause.amountNeeded) * 100

  return (
    <div>
      <Card>
        <CardHeader className='flex justify-between'>
          <CardTitle className='text-xl font-semibold'>
            Donate to {selectedCause.title}
          </CardTitle>
          <div className='flex gap-4 items-center'>
            <SaveLaterButton size={buttonSize} />
            <div className='text-muted-foreground text-sm flex items-center gap-2 hover:text-primary transition cursor-pointer'>
              <ThumbsUp size={buttonSize} /> {selectedCause.likes}
            </div>
          </div>
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

          {/* Select amount section */}
          <div className='mt-6'>
            <SmallTitle text='Select Amount' />
            <SelectAmount />
          </div>

          {/* Frequency */}
          <div className='mt-6'>
            <SmallTitle text='Frequency' />
            <Frequency />
          </div>

          {/* Donate now Button */}
          <Button className='mt-6 w-full rounded-lg py-5'>
            Donate now <ArrowRight />
          </Button>

          <div className='w-full my-5 bg-muted-foreground/70 h-[1px]'></div>

          <p className='text-center text-sm text-muted-foreground/90'>
            Secured by GiveFlow • 100% secure payment
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default DonationInfo
