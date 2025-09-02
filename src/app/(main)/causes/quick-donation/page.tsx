import BadgeCustome from '@/components/BadgeCustome'
import ChooseImpact from '@/components/ChooseImpact'
import Title from '@/components/Title'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { AlertCircleIcon, Zap } from 'lucide-react'
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

      <div className='w-full flex justify-center mt-8'>
        <Alert variant={'warning'} className='w-fit'>
          <AlertCircleIcon />
          <AlertTitle>This is not working yet!</AlertTitle>
        </Alert>
      </div>

      {/* Choose Impact */}
      <ChooseImpact />
    </div>
  )
}

export default QuickDonation
