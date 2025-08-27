import FeaturedCauses from './FeaturedCauses'
import Hero from './Hero'

const TopPart = () => {
  return (
    <div className='bg-gradient-to-t from-primary/10 to-background'>
      <div className='pb-20 w-[90%] mx-auto'>
        <Hero />
        <FeaturedCauses />
        {/* <TrendingNow /> */}
      </div>
    </div>
  )
}

export default TopPart
