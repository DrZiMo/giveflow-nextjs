import { Lightbulb } from 'lucide-react'
import Link from 'next/link'

const OurApproach = () => {
  return (
    <div className='w-full flex flex-col items-center gap-6 mt-20'>
      <div
        className='bg-card p-4 rounded-full text-primary h-fit'
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        }}
      >
        <Lightbulb size={30} />
      </div>
      <h1 className='text-2xl font-semibold'>Our Approuch</h1>
      <p className='w-[60%] text-center text-lg text-muted-foreground'>
        We believe that technology, when thoughtfully applied, can remove
        barriers to giving and amplify the impact of each donation. By combining
        cutting-edge tools with deep humanitarian insights, we&apos;re creating
        a platform that makes it easier than ever to support causes you care
        about.
      </p>
      <Link href={'/Causes'}>
        <button className='border border-primary py-2 px-4 text-primary rounded-full cursor-pointer hover:bg-second/60 transition'>
          Explore all Causes
        </button>
      </Link>
    </div>
  )
}

export default OurApproach
