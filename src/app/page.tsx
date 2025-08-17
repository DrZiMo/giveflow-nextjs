import HomeAbout from '@/components/About/HomeAbout'
import TopPart from '@/components/TopPart'
import React from 'react'

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div>
      <TopPart />
      <HomeAbout />
    </div>
  )
}

export default Home
