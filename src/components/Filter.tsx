'use client'

import React, { Suspense } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { FilterIcon } from 'lucide-react'
// import FilterDropDown from './FilterDropDown'
import Loading from '@/app/loading'

const FilterDropDown = React.lazy(() => import('./FilterDropDown'))

const Filter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='default'
          className='h-full m-0 bg-second py-3 shadow-sm text-almost-black hover:text-background'
        >
          <FilterIcon /> Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='w-80'
        side='bottom'
        align='end'
        avoidCollisions={false}
      >
        <Suspense fallback={<Loading />}>
          <FilterDropDown />
        </Suspense>
      </PopoverContent>
    </Popover>
  )
}

export default Filter
