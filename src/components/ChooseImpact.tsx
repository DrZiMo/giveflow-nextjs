'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import SelectAmount from './SelectAmount'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'

const ChooseImpact = () => {
  const impactOptions = [25, 50, 100, 250, 500, 1000]
  const [selectedAmount, setSelectedAmount] = useState<number | ''>()

  return (
    <Card className='w-full md:w-[50%] mx-auto my-8'>
      <CardHeader className='w-full text-center'>
        <CardTitle className='text-2xl font-bold'>Choose Your Impact</CardTitle>
        <CardDescription className='text-md'>
          Every donation makes a difference. Select an amount to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-3 gap-4'>
          {impactOptions.map((amount) => (
            <Card
              key={amount}
              className='p-6 border border-muted-foreground bg-muted/50 rounded-lg text-center hover:border-primary hover:text-primary hover:shadow-lg transition cursor-pointer'
            >
              <p className='text-xl font-semibold'>${amount}</p>
            </Card>
          ))}
        </div>

        <div className='divider w-full bg-muted-foreground/40 h-[1px] my-7'></div>

        {/* Select amount */}
        <div className='w-full text-center text-xl mb-4 font-semibold'>
          Custom Amount
        </div>
        <SelectAmount onSelect={setSelectedAmount} />

        <Button className='w-full text-lg py-6 mt-6' disabled={!selectedAmount}>
          <Heart size={24} /> Donate
        </Button>
      </CardContent>
    </Card>
  )
}

export default ChooseImpact
