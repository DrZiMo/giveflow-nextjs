import MonthlyDonationDashboard from '@/components/Dashboard/MonthlyDonationDashboard'
import RecentActivitiesDashboard from '@/components/Dashboard/RecentActivitiesDashboard'
import TopDonorsDashboard from '@/components/Dashboard/TopDonorsDashboard'
import TopSummaryDashboard from '@/components/Dashboard/TopSummaryDashboard'
import TopSupportedCausesDashboard from '@/components/Dashboard/TopSupportedCausesDashboard'
import ProfileTitle from '@/components/ProfileTitle'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <ProfileTitle
        title='Analytics & Overview'
        subtitle="Monitor your donation platform's performance and key metrics"
      />

      <TopSummaryDashboard />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
        <MonthlyDonationDashboard />
        <TopSupportedCausesDashboard />
        <TopDonorsDashboard />
        <RecentActivitiesDashboard />
      </div>
    </div>
  )
}

export default DashboardPage
