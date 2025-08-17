'use client'

import Hero from './Hero'

const TopPart = () => {
  return (
    <div className='bg-gradient-to-t from-second to-background'>
      <div className='pb-20 w-[90%] mx-auto'>
        <Hero />
        {/* <FeaturedCauses />
        <TrendingNow /> */}
      </div>
    </div>
  )
}

export default TopPart
