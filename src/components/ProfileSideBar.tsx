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
import { usePathname } from 'next/navigation'

const items = [
  {
    title: 'Profile',
    url: '/profile',
    icon: User,
  },
  {
    title: 'Summary',
    url: '/profile/summary',
    icon: Newspaper,
  },
  {
    title: 'History',
    url: '/profile/history',
    icon: Clock,
  },
  {
    title: 'Saved Causes',
    url: '/profile/saved-causes',
    icon: Bookmark,
  },
  {
    title: 'Recurring',
    url: '/profile/recurring',
    icon: Calendar,
  },
  {
    title: 'Settings',
    url: '/profile/settings',
    icon: Settings,
  },
]

export function ProfileSidebar() {
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
                const isActive =
                  pathname === item.url ||
                  (item.url !== '/profile' && pathname?.startsWith(item.url)) ||
                  (pathname === '/profile' && item.url === '/profile')

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-primary/10 text-primary shadow-sm'
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
