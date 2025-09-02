import { ProfileSidebar } from '@/components/ProfileSideBar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import UserProvider from './userProvider'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className='min-h-screen flex w-full'>
        <ProfileSidebar />
        <main className='flex-1'>
          <div className='block md:hidden'>
            <SidebarTrigger />
          </div>
          <div className='w-[90%] mx-auto mt-10'>
            <UserProvider>{children}</UserProvider>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
