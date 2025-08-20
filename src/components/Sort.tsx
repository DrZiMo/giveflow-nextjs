'use client'

import React, { Suspense } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { ListFilter } from 'lucide-react'
import Loading from '@/app/loading'
import SortDropDown from './SortDropDown'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const Sort = () => {
  const sortOptions = [
    'Newest Causes',
    'Oldest Causes',
    'Most Liked',
    'Highest Amount Needed',
    'Nearly Funded',
    'Most Funded',
    'Least Funded',
    'Urgency Level',
  ]

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Sort' />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((sort, index) => (
          <SelectItem
            key={index}
            value={sort}
            // onClick={() => handleSelectedSort(sort)}
          >
            {sort}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default Sort
