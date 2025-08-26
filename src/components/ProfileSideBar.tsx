'use client'

import {
  Calendar,
  Home,
  Settings,
  LogOut,
  User,
  Newspaper,
  Clock,
  Bookmark,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Logo from './Logo'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

const items = [
  {
    title: 'Profile',
    url: '/profile',
    icon: User,
  },
  {
    title: 'Summary',
    url: '/summary',
    icon: Newspaper,
  },
  {
    title: 'History',
    url: '/history',
    icon: Clock,
  },
  {
    title: 'Saved Causes',
    url: '/saved-causes',
    icon: Bookmark,
  },
  {
    title: 'Recurring',
    url: '/recurring',
    icon: Calendar,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
]

export function ProfileSidebar() {
  const { userId } = useParams()
  const pathname = usePathname()

  return (
    <Sidebar className='border-r bg-white shadow-sm'>
      {/* Sidebar Content */}
      <SidebarContent className='ml-4 mt-6'>
        <SidebarGroup>
          <Logo />
          <SidebarGroupContent className='mt-6'>
            <SidebarMenu className='space-y-1'>
              {items.map((item) => {
                const href = `/profile/${userId}${
                  item.url === '/profile' ? '' : item.url
                }`
                let isActive = false

                if (item.url === '/profile') {
                  isActive = pathname === href
                } else {
                  isActive = pathname.startsWith(href)
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                          isActive
                            ? 'bg-primary/10 text-primary shadow-sm hover:bg-primary/10! hover:text-primary!'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <item.icon className='h-5 w-5' />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className='border-t border-muted px-4 py-4'>
        <div className='flex flex-col space-y-2'>
          {/* Home Button */}
          <Link
            href='/'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition'
          >
            <Home className='h-5 w-5' />
            <span>Home</span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={() => console.log('Logout clicked')}
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition'
          >
            <LogOut className='h-5 w-5' />
            <span>Logout</span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
