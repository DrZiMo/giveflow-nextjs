import BackButton from './BackButton'
import BadgeCustome from './BadgeCustome'
import { HeartHandshake } from 'lucide-react'
import CauseHeader from './CauseHeader'
import { ICause } from '@/app/types/causes.types'

const CauseInfo = ({ selectedCause }: { selectedCause: ICause }) => {
  return (
    <div>
      <BackButton link={'/causes'} />
      <div className='mt-8 space-y-4'>
        <BadgeCustome>
          <HeartHandshake size={20} /> Make Donation
        </BadgeCustome>

        <CauseHeader cause={selectedCause} />
      </div>
    </div>
  )
}

export default CauseInfo
