import causes from '@/app/data/causes'
import CauseInfo from '@/components/CauseInfo'
import DonationInfo from '@/components/DonationInfo'
import { Metadata } from 'next'

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
  return (
    <div className='w-[90%] mx-auto mt-10 grid grid-cols-2 gap-10'>
      <CauseInfo />
      <DonationInfo />
    </div>
  )
}

export default Cause
