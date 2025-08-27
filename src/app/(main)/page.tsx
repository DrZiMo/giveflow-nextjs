import HomeAbout from '@/components/About/HomeAbout'
import TopPart from '@/components/TopPart'
import React from 'react'

const Home = () => {
  return (
    <div>
      <TopPart />
      <div className='mb-16'>
        <HomeAbout />
      </div>
    </div>
  )
}

export default Home
