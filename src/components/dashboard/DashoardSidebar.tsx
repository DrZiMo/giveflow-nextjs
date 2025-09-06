'use client'

import {
  Home,
  ChartColumnIncreasing,
  Users,
  Target,
  MessageSquare,
  Crown,
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
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useMemo } from 'react'
import Logo from '../Logo'
import { ROLE } from '@/app/types/users.types'

interface SidebarItem {
  title: string
  url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function DashboardSidebar() {
  const user = useSelector((state: RootState) => state.auth.user)
  const pathname = usePathname()

  const items: SidebarItem[] = useMemo(() => {
    if (user?.role !== ROLE.ADMIN) {
      return [
        { title: 'Analytics', url: '/dashboard', icon: ChartColumnIncreasing },
        { title: 'Causes', url: '/dashboard/causes', icon: Target },
      ]
    }
    return [
      { title: 'Analytics', url: '/dashboard', icon: ChartColumnIncreasing },
      { title: 'Users', url: '/dashboard/users', icon: Users },
      { title: 'Causes', url: '/dashboard/causes', icon: Target },
      {
        title: 'Communications',
        url: '/dashboard/communications',
        icon: MessageSquare,
      },
      { title: 'Role Management', url: '/dashboard/role', icon: Crown },
    ]
  }, [user])

  return (
    <Sidebar className='border-r bg-white shadow-sm'>
      {/* Sidebar Content */}
      <SidebarContent className='ml-4 mt-6'>
        <SidebarGroup>
          <div>
            <Logo />
            <p className='text-muted-foreground text-sm'>Admin Dashboard</p>
          </div>
          <SidebarGroupContent className='mt-6'>
            <SidebarMenu className='space-y-1'>
              {items.map((item) => {
                const isActive =
                  item.url === '/dashboard'
                    ? pathname === '/dashboard'
                    : pathname.startsWith(item.url)

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
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
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
