'use client'

import Link from 'next/link'
import BadgeCustome from './BadgeCustome'
import Divider from './Divider'
import { Button } from './ui/button'

const Leftside = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <BadgeCustome text='Effortless Giving for Maximum Impact' />
        <h1 className='text-neutral text-6xl font-bold mt-3'>
          Make a difference with every donation
        </h1>
        <Divider />
      </div>
      <p className='text-slate-500 w-[80%] text-xl'>
        Support causes you care about with our streamlined donation platform
        that ensures your contributions create real impact.
      </p>
      <div className='buttons flex gap-3 mt-2'>
        <Link href='/quick-donation'>
          <Button className='px-6 py-2 text-[1rem]'>Quick donation</Button>
        </Link>
        <Link href={'/causes'}>
          <Button
            variant={'secondary'}
            className='px-6 py-2 text-[1rem] hover:bg-primary-content/50 hover:text-primary/90 border-none'
          >
            Explore causes
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Leftside
