import causes from '@/app/data/causes'
import CauseGroup from './CausesGroup'
import Title from './Title'
import { Button } from './ui/button'

const FeaturedCauses = () => {
  const featuredCauses = causes.filter((cause) => cause.featured === true)
  return (
    <div className='mt-20 '>
      <Title
        title='Featured Causes'
        subTitle='Discover the causes making real impact around the world. Your donations directly support these initiatives.'
      />
      <CauseGroup causes={featuredCauses} />
      <div className='flex justify-center'>
        <Button className='mt-5'>View All Causes</Button>
      </div>
    </div>
  )
}

export default FeaturedCauses
