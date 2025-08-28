'use client'

import { TrendingUp } from 'lucide-react'
import Title from '@/components/Title'
import SearchBar from '@/components/SearchBar'
import CauseGroup from '@/components/CausesGroup'
import Filter from '@/components/Filter'
import Sort from '@/components/Sort'
import Loading from '@/app/loading'
import { useCauses } from '@/lib/hook/useCauses'
import { ICause } from '@/app/types/causes.types'

const CausePage = () => {
  const { data, isLoading, error } = useCauses()

  if (isLoading) return <Loading />
  if (error) return <p>Error loading causes</p>

  const causes = data?.causes || []
  const trendingCauses = causes.filter((c: ICause) => c.is_trending)

  return (
    <div className='w-[90%] 2xl:w-[1300px] mx-auto mt-10'>
      <Title
        title='Browse All Causes'
        subTitle='Explore our vetted causes and find the ones that align with your values and interests.'
      />

      <div className='flex items-center gap-1 md:gap-3 mt-8 relative'>
        <SearchBar />
        <Filter />
        <Sort />
      </div>

      {trendingCauses.length > 0 && (
        <div className='mt-20'>
          <div className='flex items-center gap-3'>
            <TrendingUp size={30} className='text-primary' />
            <h1 className='text-2xl font-semibold'>Trending Causes</h1>
          </div>
          <CauseGroup causes={trendingCauses} number={4} />
        </div>
      )}

      <div className='mt-20'>
        <h1 className='text-2xl font-semibold'>All Causes</h1>
        {causes.length > 0 ? (
          <CauseGroup causes={causes} number={12} />
        ) : (
          'No causes found'
        )}
      </div>
    </div>
  )
}

export default CausePage
