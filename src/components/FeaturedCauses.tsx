'use client'

import CauseGroup from './CausesGroup'
import Title from './Title'
import { Button } from './ui/button'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import Link from 'next/link'
import { useCauses, useFeaturedCauses } from '@/lib/hook/useCauses'

const FeaturedCauses = () => {
  const { data, isLoading } = useFeaturedCauses()
  const featuredCauses = data?.causes

  if (isLoading) return <Loading />

  return !featuredCauses ? (
    <SimpleCauses />
  ) : (
    <div className='mt-20 '>
      <Title
        title='Featured Causes'
        subTitle='Discover the causes making real impact around the world. Your donations directly support these initiatives.'
      />
      <Suspense fallback={<Loading />}>
        <CauseGroup causes={featuredCauses} />
      </Suspense>
      <div className='flex justify-center'>
        <Link href={'/causes'}>
          <Button className='mt-5'>View All Causes</Button>
        </Link>
      </div>
    </div>
  )
}

const SimpleCauses = () => {
  const { data } = useCauses()
  const causes = data?.causes
  return !causes ? (
    'Cause not found'
  ) : (
    <div className='mt-20 '>
      <Title
        title='Causes'
        subTitle='Discover the causes making real impact around the world. Your donations directly support these initiatives.'
      />
      <Suspense fallback={<Loading />}>
        <CauseGroup causes={causes!} />
      </Suspense>
      <div className='flex justify-center'>
        <Link href={'/causes'}>
          <Button className='mt-5'>View All Causes</Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCauses
