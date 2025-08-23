import { Mail } from 'lucide-react'
import { Button } from '../ui/button'

const FooterUpdated = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-white font-semibold'>STAY UPDATED</h2>
      <p>Subscribe to our newsletter for impact stories and updates.</p>
      <div className='bg-faded flex justify-between items-center pl-4 rounded-l-sm'>
        <input
          type='text'
          placeholder='Your Email Address'
          className='outline-0'
        />
        {/* TODO: Make this functional */}
        <Button className='rounded-l-none rounded-r-sm w-fit text-white'>
          <Mail size={20} />
        </Button>
      </div>
    </div>
  )
}

export default FooterUpdated
