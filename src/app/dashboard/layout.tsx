import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import DashboardHeader from '@/components/Dashboard/DashboardHeader'
import { DashboardSidebar } from '@/components/Dashboard/DashoardSidebar'
import DashboardProvider from './dashboardProvider'

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
          <div className='w-[90%] mx-auto my-10'>
            <DashboardProvider>
              <DashboardHeader />
              {children}
            </DashboardProvider>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
