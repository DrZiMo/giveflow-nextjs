import React, { Suspense } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { ListFilter } from 'lucide-react'
import Loading from '@/app/loading'
import SortDropDown from './SortDropDown'

const Sort = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='default'
          className='h-full m-0 bg-second py-3 shadow-sm text-almost-black hover:text-background'
        >
          <ListFilter /> Sort
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='w-80'
        side='bottom'
        align='end'
        avoidCollisions={false}
      >
        <Suspense fallback={<Loading />}>
          <SortDropDown />
        </Suspense>
      </PopoverContent>
    </Popover>
  )
}

export default Sort
