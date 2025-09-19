'use client'

import { Search, TrendingUp } from 'lucide-react'
import Title from '@/components/Title'
import CauseGroup from '@/components/CausesGroup'
import Loading from '@/app/loading'
import { useCauses } from '@/lib/hook/useCauses'
import { CausesStatus, ICause } from '@/app/types/causes.types'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const CausePage = () => {
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
  const [causeSearch, setCauseSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Newest Causes')

  const { data, isLoading } = useCauses(causeSearch, category, sort)

  const causes =
    data?.causes.filter((c: ICause) => c.status === CausesStatus.ACTIVE) || []
  const trendingCauses = causes.filter((c: ICause) => c.is_trending)

  return (
    <div className='w-[90%] 2xl:w-[1300px] mx-auto mt-10'>
      {/* Header & Controls always show */}
      <Title
        title='Browse All Causes'
        subTitle='Explore our vetted causes and find the ones that align with your values and interests.'
      />
      <div className='flex items-center gap-1 md:gap-3 mt-8 relative'>
        <div className='relative w-full'>
          <Search
            className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
            size={18}
          />
          <Input
            type='text'
            placeholder='Search causes ...'
            className='pl-10'
            value={causeSearch}
            onChange={(e) => setCauseSearch(e.target.value)}
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder='Filter' />
          </SelectTrigger>
          <SelectContent side='bottom'>
            <SelectItem value='All'>All</SelectItem>
            {causes.map((cause) => (
              <SelectItem value={cause.category.name} key={cause.category.id}>
                {cause.category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder='Sort' />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((sort, index) => (
              <SelectItem key={index} value={sort}>
                {sort}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Trending Causes */}
      <div className='mt-20'>
        {trendingCauses.length > 0 ? (
          <>
            <div className='flex items-center gap-3'>
              <TrendingUp size={30} className='text-primary' />
              <h1 className='text-2xl font-semibold'>Trending Causes</h1>
            </div>
            <CauseGroup causes={trendingCauses} number={4} />
          </>
        ) : null}
      </div>

      {/* All Causes */}
      <div className='mt-20'>
        <h1 className='text-2xl font-semibold'>All Causes</h1>
        {isLoading ? (
          <Loading />
        ) : causes.length > 0 ? (
          <CauseGroup causes={causes} number={12} />
        ) : (
          'No causes found'
        )}
      </div>
    </div>
  )
}

export default CausePage
