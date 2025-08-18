import { TrendingUp } from 'lucide-react'
import causes from '../data/causes'
// import SortOptions from '../components/sortOptions'
// import { useEffect, useRef } from 'react'
// import { useAppDispatch, useAppSelector } from '../redux/hooks'
// import { changeFilter } from '../redux/slices/filterSlice'
// import FilterDropDown from '../components/filterDropDown'
// import FilterButton from '../components/filter'
import Title from '@/components/Title'
import SearchBar from '@/components/SearchBar'
import CauseGroup from '@/components/CausesGroup'
import Filter from '@/components/Filter'
import { Suspense } from 'react'
import Loading from '../loading'

const Cause = () => {
  const trendingCauses = causes.filter((cause) => cause.trending == true)
  //   const containerRef = useRef<HTMLDivElement>(null)
  //   const isClosed = useAppSelector((state) => state.filter.isClosed)
  //   const dispatch = useAppDispatch()

  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent) => {
  //       if (
  //         containerRef.current &&
  //         !containerRef.current.contains(event.target as Node)
  //       ) {
  //         dispatch(changeFilter(true))
  //       }
  //     }

  //     if (!isClosed) {
  //       document.addEventListener('mousedown', handleClickOutside)
  //     }

  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside)
  //     }
  //   }, [isClosed, dispatch])

  return (
    <div className='w-[90%] 2xl:w-[1300px] mx-auto mt-10'>
      <Title
        title='Browse All Causes'
        subTitle='Explore our vetted causes and find the ones that align with your values and interests.'
      />
      <div className='flex items-center gap-3 mt-8 relative'>
        <SearchBar />
        <Filter />
        {/* <SortOptions /> */}
      </div>
      <div className='mt-10'>
        <h1 className='flex items-center gap-2 text-2xl font-semibold'>
          <TrendingUp size={27} className='text-primary' />
          Trending Causes
        </h1>
        <Suspense fallback={<Loading />}>
          <CauseGroup causes={trendingCauses} number={trendingCauses.length} />
        </Suspense>
      </div>
      <div className='mt-20'>
        <h1 className='text-2xl font-semibold'>All Causes</h1>
        <Suspense fallback={<Loading />}>
          <CauseGroup causes={causes} number={causes.length} />
        </Suspense>
      </div>
    </div>
  )
}

export default Cause
