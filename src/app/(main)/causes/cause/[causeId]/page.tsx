'use client'

import causes from '@/app/data/causes'
import Loading from '@/app/loading'
import CauseInfo from '@/components/CauseInfo'
import DonationInfo from '@/components/DonationInfo'
import { useSingleCause } from '@/lib/hook/useCauses'
import { Metadata } from 'next'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

export const getMetadata = ({
  params,
}: {
  params: { causeId: string }
}): Metadata => {
  const cause = causes.find((c) => c.id === +params.causeId)

  return {
    title: cause ? `${cause.title} - GiveFlow` : 'Cause not found - GiveFlow',
    description: cause
      ? cause.description
      : 'View details about this cause on GiveFlow.',
  }
}

const Cause = () => {
  const { causeId } = useParams()
  const { data, isLoading } = useSingleCause(causeId as string)
  const selectedCause = data?.cause

  return isLoading ? (
    <Loading />
  ) : !selectedCause ? (
    'cause not found' // TODO: make it professional
  ) : (
    <div className='w-[90%] mx-auto mt-10 grid grid-cols-2 gap-10'>
      <Suspense fallback={<Loading />}>
        <CauseInfo selectedCause={selectedCause} />
      </Suspense>
      <div className='sticky top-10 h-fit'>
        <Suspense fallback={<Loading />}>
          <DonationInfo selectedCause={selectedCause} />
        </Suspense>
      </div>
    </div>
  )
}

export default Cause
