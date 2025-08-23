'use client'

import Image from 'next/image'
import Leftside from './LeftSide'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <div className='relative'>
      <div className='flex justify-between items-center py-10'>
        <div className='w-1/2 py-10'>
          <Leftside />
        </div>
        <div className='w-1/2'>
          <div className='h-full'>
            <Image
              src='/hero image.svg'
              alt='Donate'
              width={0}
              height={0}
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
      <div className='mx-auto'>
        <div className='bg-white w-fit mx-auto px-2 py-2 rounded-full shadow-md text-primary animate-bounce'>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Hero
