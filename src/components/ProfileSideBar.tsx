'use client'

import {
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
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useMemo } from 'react'

interface SidebarItem {
  title: string
  url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function ProfileSidebar() {
  const user = useSelector((state: RootState) => state.selectedUser.user)
  const isUser = useSelector((state: RootState) => state.selectedUser.isUser)
  const userId = user?.id
  const pathname = usePathname()

  const items: SidebarItem[] = useMemo(() => {
    if (!isUser) {
      return [
        { title: 'Profile', url: '/profile', icon: User },
        { title: 'Summary', url: '/summary', icon: Newspaper },
        { title: 'History', url: '/history', icon: Clock },
      ]
    }
    return [
      { title: 'Profile', url: '/profile', icon: User },
      { title: 'Summary', url: '/summary', icon: Newspaper },
      { title: 'History', url: '/history', icon: Clock },
      { title: 'Saved Causes', url: '/saved-causes', icon: Bookmark },
      { title: 'Settings', url: '/settings', icon: Settings },
    ]
  }, [isUser])

  if (!userId) return null

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

                const isActive =
                  item.url === '/profile'
                    ? pathname === href
                    : pathname.startsWith(href)

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
          {isUser && (
            <button
              onClick={() => console.log('Logout clicked')}
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-destructive/5 transition'
            >
              <LogOut className='h-5 w-5' />
              <span>Logout</span>
            </button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
