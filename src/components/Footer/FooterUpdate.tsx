'use client'

import { Mail } from 'lucide-react'

const FooterUpdated = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-base-100 font-semibold'>STAY UPDATED</h2>
      <p>Subscribe to our newsletter for impact stories and updates.</p>
      <div className='bg-base-100/20 flex justify-between items-center pl-4 rounded-l-sm'>
        <input
          type='text'
          placeholder='Your Email Address'
          className='outline-0'
        />
        {/* TODO: Make this functional */}
        <button className='btn btn-primary shadow-none rounded-l-none'>
          <Mail size={20} />
        </button>
      </div>
    </div>
  )
}

export default FooterUpdated
