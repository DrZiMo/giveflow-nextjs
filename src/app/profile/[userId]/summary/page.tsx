import MonthlyDonation from '@/components/MonthlyDonation'
import ProfileTitle from '@/components/ProfileTitle'
import TopSummary from '@/components/TopSummary'
import TopSupportedCauses from '@/components/TopSupportedCauses'
import React from 'react'

const SummaryPage = () => {
  return (
    <div>
      <ProfileTitle
        title='Donation Summary'
        subtitle='Overview of your donation activity and impact'
      />

      <TopSummary />
      <div className='grid grid-cols-2 gap-4 mt-8'>
        <MonthlyDonation />
        <TopSupportedCauses />
      </div>
    </div>
  )
}

export default SummaryPage
