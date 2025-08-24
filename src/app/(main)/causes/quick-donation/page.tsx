import BadgeCustome from '@/components/BadgeCustome'
import ChooseImpact from '@/components/ChooseImpact'
import Title from '@/components/Title'
import { Zap } from 'lucide-react'
import React from 'react'

const QuickDonation = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <div className='w-fit mx-auto mt-4'>
        <BadgeCustome>
          <Zap size={20} /> Quick & Secure Donation
        </BadgeCustome>
      </div>

      <Title
        title='Make an Impact
Right Now'
        subTitle='Your donation creates real change. Choose an amount and support causes that matter most.'
      />

      {/* Choose Impact */}
      <ChooseImpact />
    </div>
  )
}

export default QuickDonation
