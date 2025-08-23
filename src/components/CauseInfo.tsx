'use client'

import React, { Suspense } from 'react'
import BackButton from './BackButton'
import causes from '@/app/data/causes'
import { useParams } from 'next/navigation'
import BadgeCustome from './BadgeCustome'
import { HeartHandshake } from 'lucide-react'
import CauseHeader from './CauseHeader'
import Loading from '@/app/loading'

const CauseInfo = () => {
  const { causeId } = useParams()
  const selectedCause = causes.find((cause) => cause.id === +causeId!)

  if (!selectedCause) return <div>Cause not found</div>

  return (
    <div>
      <BackButton />
      <div className='mt-8 space-y-4'>
        <BadgeCustome>
          <HeartHandshake size={20} /> Make Donation
        </BadgeCustome>
        <Suspense fallback={<Loading />}>
          <CauseHeader cause={selectedCause} />
        </Suspense>
      </div>
    </div>
  )
}

export default CauseInfo
