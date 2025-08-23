'use client'

import React, { useState } from 'react'
import { Card } from './ui/card'
import { DollarSign } from 'lucide-react'
import { Input } from './ui/input'

const SelectAmount = ({ onSelect }: { onSelect: (amount: number) => void }) => {
  const amounts = [10, 25, 50, 100]
  const [selectedAmount, setSelectedAmount] = useState<number | ''>('')

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount)
    onSelect(amount)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSelectedAmount(value === '' ? '' : Number(value))
    onSelect(value === '' ? '' : Number(value))
  }

  return (
    <div className='space-y-5'>
      {/* Preset amounts */}
      <div className='grid grid-cols-4 gap-3'>
        {amounts.map((amount) => (
          <Card
            key={amount}
            className={`${
              selectedAmount === amount
                ? 'border-primary bg-primary/5 text-primary font-semibold'
                : 'bg-muted py-3 hover:bg-primary/5 hover:text-primary hover:font-semibold hover:border-primary transition cursor-pointer'
            } border p-2 rounded-xl text-center`}
            onClick={() => handleSelectAmount(amount)}
          >
            ${amount}
          </Card>
        ))}
      </div>

      {/* Custom Input */}
      <div className='relative'>
        <DollarSign
          className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
          size={18}
        />
        <Input
          type='number'
          value={selectedAmount}
          onChange={handleInputChange}
          placeholder='Custom amount'
          className='pl-10 w-full'
          min={1}
        />
      </div>
    </div>
  )
}

export default SelectAmount
