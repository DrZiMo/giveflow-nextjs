'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Home, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NotFound = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Card className='w-[40%] mx-auto mt-10 flex flex-col items-center px-8'>
      <h1 className='scroll-m-20 text-8xl font-extrabold tracking-tight text-primary'>
        404
      </h1>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Page Not Found
      </h3>
      <p>
        Sorry, we couldn&apos;t find the page you&apos;re looking for. The page
        might have been moved, deleted, or you entered the wrong URL.
      </p>
      <code className='bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
        {pathname}
      </code>
      <div className='flex justify-between w-full'>
        <Link href={'/'}>
          <Button>
            <Home /> Go to Homepage
          </Button>
        </Link>
        <Link href={'/causes'}>
          <Button variant={'outline'}>
            <Search /> Browse Causes
          </Button>
        </Link>
        <Button variant={'ghost'} onClick={() => router.back()}>
          <ArrowLeft /> Go Back
        </Button>
      </div>
      <div className='divider w-full h-[1px] bg-faded2 mt-5'></div>
      <p className='text-muted-foreground'>
        Need help? Visit our{' '}
        <Link href={'/contact'} className='text-primary underline'>
          Contact Page
        </Link>{' '}
        or return to the{' '}
        <Link href={'/'} className='text-primary underline'>
          Home Page
        </Link>
        .
      </p>
    </Card>
  )
}

export default NotFound
