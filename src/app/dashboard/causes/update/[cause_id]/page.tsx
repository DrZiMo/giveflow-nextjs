'use client'

import Loading from '@/app/loading'
import EditCauseForm from '@/components/dashboard/EditCauseForm'
import ProfileTitle from '@/components/ProfileTitle'
import { useSingleCause } from '@/lib/hook/useCauses'
import { useParams } from 'next/navigation'

const EditCausePage = () => {
  const { cause_id } = useParams()
  const { data, isLoading } = useSingleCause(cause_id as string)

  const cause = data?.cause

  if (isLoading) return <Loading />
  return (
    <div>
      <ProfileTitle
        title='Update Cause'
        subtitle='Fill the inputs and update the cause.'
      />

      <div>{cause ? <EditCauseForm cause={cause} /> : '...'}</div>
    </div>
  )
}

export default EditCausePage
