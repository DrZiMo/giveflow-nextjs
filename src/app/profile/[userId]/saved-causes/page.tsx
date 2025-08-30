'use client'

import Loading from '@/app/loading'
import Cause from '@/components/Cause'
import ProfileTitle from '@/components/ProfileTitle'
import { RootState } from '@/store'
import Link from 'next/link'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'

const SavedCauses = () => {
  const selectedUser = useSelector(
    (state: RootState) => state.selectedUser.user
  )
  const causeSaved = selectedUser.saveForLater

  return (
    <div>
      <ProfileTitle
        title='Saved Causes'
        subtitle="Causes you've saved to support later"
      />
      <Suspense fallback={<Loading />}>
        {causeSaved && causeSaved.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10'>
            {causeSaved.map((cause, index) => (
              <Cause
                key={index}
                id={cause.id}
                name={cause.name}
                short_description={cause.short_description}
                amount_needed={cause.amount_needed}
                current_amount={cause.current_amount}
                category={cause.category}
                is_trending={cause.is_trending!}
                cause_pic={cause.cause_pic}
                long_description={cause.long_description}
              />
            ))}
          </div>
        ) : (
          <p className='text-muted-foreground mt-10'>
            No saved causes found.{' '}
            <Link
              href={'/causes'}
              className='text-primary hover:underline transition'
            >
              Explore causes
            </Link>
          </p>
        )}
      </Suspense>
    </div>
  )
}

export default SavedCauses
