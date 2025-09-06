import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import { DashboardSidebar } from '@/components/dashboard/DashoardSidebar'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className='min-h-screen flex w-full'>
        <DashboardSidebar />
        <main className='flex-1'>
          <div className='block md:hidden'>
            <SidebarTrigger />
          </div>
          <div className='w-[90%] mx-auto mt-10'>
            <DashboardHeader />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
