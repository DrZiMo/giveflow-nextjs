import causes from '@/app/data/causes'
import CauseGroup from './CausesGroup'
import Title from './Title'
import { Button } from './ui/button'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import Link from 'next/link'

const FeaturedCauses = async () => {
  const featuredCauses = causes.filter((cause) => cause.featured === true)
  return (
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

export default FeaturedCauses
