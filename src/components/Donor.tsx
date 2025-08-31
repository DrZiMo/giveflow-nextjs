import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface donorProp {
  id: number
  first_name: string
  last_name: string
  is_anonymous: boolean
  totalAmount: number
  profile_pic: string
}

const Donor = ({ donor, number }: { donor: donorProp; number: number }) => {
  return (
    <div className='flex justify-between items-center'>
      {donor.is_anonymous ? (
        <div className='flex items-center gap-4'>
          <h3 className='font-medium text-card'>{number}.</h3>
          <div>
            <div className='w-7 h-7 rounded-full'>
              <div className='w-full h-full bg-primary rounded-full flex justify-center items-center'>
                <User className='w-5 h-5' />
              </div>
            </div>
          </div>
          <h3 className='font-medium text-muted-foreground'>Anonymous Donor</h3>
        </div>
      ) : (
        <Link href={`/profile/${donor.id}`}>
          <div className='flex items-center gap-4'>
            <h3 className='font-medium text-card'>{number}.</h3>
            <div>
              <div className='w-7 h-7 rounded-full'>
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
            </div>
            <h3 className='font-medium text-muted-foreground'>
              {donor.first_name} {donor.last_name}
            </h3>
          </div>
        </Link>
      )}
      <h3 className='font-semibold text-muted-foreground'>
        ${donor.totalAmount.toLocaleString()}
      </h3>
    </div>
  )
}

export default Donor
