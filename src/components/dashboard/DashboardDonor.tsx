import { DonorProp } from '@/app/types/users.types'
import { User } from 'lucide-react'
import Link from 'next/link'

const DashboardDonor = ({
  donor,
  number,
}: {
  donor: DonorProp
  number: number
}) => {
  return (
    <div className='flex flex-col gap-5 not-last:mb-6'>
      <div className='grid grid-cols-[30px_1fr] items-center gap-y-4'>
        <h3 className='text-muted-foreground'>{number + 1}.</h3>
        <div className='flex items-center justify-between'>
          <Link href={`/profile/${donor.id}`}>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full'>
                {donor.profile_pic ? (
                  <img
                    src={donor.profile_pic}
                    alt={donor.first_name}
                    className='w-full h-full object-cover rounded-full'
                  />
                ) : (
                  <div className='w-full h-full bg-primary rounded-full flex justify-center items-center'>
                    <User className='w-5 h-5' />
                  </div>
                )}
              </div>
              <div>
                <h3 className='font-medium text-card-foreground'>
                  {donor.first_name} {donor.last_name}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {donor.supportedCauses} causes supported
                </p>
              </div>
            </div>
          </Link>
          <h3 className='font-semibold text-muted-foreground'>
            ${donor.totalDonated.toLocaleString()}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardDonor
