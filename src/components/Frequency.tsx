'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'

const Frequency = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('one-time')

  return (
    <div className='grid grid-cols-2 gap-4'>
      <Card
        className={`border transition text-center p-3 cursor-pointer ${
          selectedFrequency === 'one-time'
            ? 'bg-primary/5 text-primary border-primary font-semibold'
            : 'bg-muted text-muted-foreground hover:bg-primary/5 hover:text-primary hover:border-primary hover:font-semibold'
        }`}
        onClick={() => setSelectedFrequency('one-time')}
      >
        One-time
      </Card>
      <Card
        className={`border transition text-center p-3 cursor-pointer ${
          selectedFrequency === 'monthly'
            ? 'bg-primary/5 text-primary border-primary font-semibold'
            : 'bg-muted text-muted-foreground hover:bg-primary/5 hover:text-primary hover:border-primary hover:font-semibold'
        }`}
        onClick={() => setSelectedFrequency('monthly')}
      >
        Monthly
      </Card>
    </div>
  )
}

export default Frequency
