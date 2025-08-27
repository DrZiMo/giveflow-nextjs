'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function MobileSidebar() {
  const pathname = usePathname()

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Causes', href: '/causes' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='px-5 my-14'>
          <div className='flex-1'>
            <div className='flex flex-col gap-2'>
              {tabs.map((tab) => {
                const isActive =
                  tab.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(tab.href)

                return (
                  <Link href={tab.href} key={tab.name}>
                    <div>
                      <div
                        className={`px-4 py-2 rounded-md ${
                          isActive
                            ? 'text-primary bg-primary/5'
                            : 'text-foreground cursor-pointer hover:text-primary transition'
                        }`}
                      >
                        {tab.name}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='buttons flex gap-3 mt-10'>
            <Link href={'/auth/login'}>
              <Button variant={'outline'}>Login</Button>
            </Link>
            <Link href={'/auth/signup'}>
              <Button>Signup</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
