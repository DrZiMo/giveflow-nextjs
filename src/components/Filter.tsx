'use client'

import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import causes from '@/app/data/causes'

const Filter = () => {
  return (
    <Select defaultValue='All'>
      <SelectTrigger>
        <SelectValue placeholder='Filter' />
      </SelectTrigger>
      <SelectContent side='bottom'>
        <SelectItem value='All'>All</SelectItem>
        {causes.map((cause) => (
          <SelectItem value={cause.category} key={cause.category}>
            {cause.category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default Filter
