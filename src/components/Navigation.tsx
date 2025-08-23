'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Causes', href: '/causes' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <NavigationMenu className='flex-1'>
      <NavigationMenuList className='flex justify-around'>
        {tabs.map((tab) => {
          const isActive =
            tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href)

          return (
            <Link href={tab.href} key={tab.name}>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    isActive
                      ? 'text-primary'
                      : 'text-foreground cursor-pointer hover:text-primary transition'
                  }
                >
                  {tab.name}
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </Link>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
