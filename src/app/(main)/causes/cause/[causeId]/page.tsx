'use client'

import Loading from '@/app/loading'
import CauseInfo from '@/components/CauseInfo'
import DonationInfo from '@/components/DonationInfo'
import { useSingleCause } from '@/lib/hook/useCauses'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import toast from 'react-hot-toast'

const Cause = () => {
  const { causeId } = useParams()
  const { data, isLoading } = useSingleCause(causeId as string)
  const selectedCause = data?.cause
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const cancel = searchParams.get('canceled')
  const router = useRouter()

  useEffect(() => {
    if (success) {
      toast.success('Donated successfully')
      router.replace(window.location.pathname)
    } else if (cancel) {
      toast.error('Donation canceled')
      router.replace(window.location.pathname)
    }
  }, [success, cancel, router])

  return isLoading ? (
    <Loading />
  ) : !selectedCause ? (
    'cause not found' // TODO: make it professional
  ) : (
    <div className='w-[90%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
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
