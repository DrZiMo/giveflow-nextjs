'use client'

import causes from '@/app/data/causes'
import { savedCauses } from '@/app/data/savedCauses'
import Loading from '@/app/loading'
import Cause from '@/components/Cause'
import ProfileTitle from '@/components/ProfileTitle'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

const SavedCauses = () => {
  const { userId } = useParams<{ userId: string }>()
  const userSavedCauses = savedCauses.filter(
    (cause) => cause.userid === Number(userId)
  )
  const causeSaved = causes.filter((cause) =>
    userSavedCauses.some((saved) => saved.causeId === cause.id)
  )

  return (
    <div>
      <ProfileTitle
        title='Saved Causes'
        subtitle="Causes you've saved to support later"
      />
      <Suspense fallback={<Loading />}>
        <div className='grid grid-cols-3 gap-6 mt-10'>
          {causeSaved.map((cause, index) => (
            <Cause
              key={index}
              id={cause.id}
              title={cause.title}
              description={cause.description}
              amountNeeded={cause.amountNeeded}
              currentAmount={cause.currentAmount}
              category={cause.category}
              trending={cause.trending!}
              imageUrl={cause.imageUrl}
              donors={cause.donors}
              likes={cause.likes}
              longDescription={cause.longDescription}
            />
          ))}
        </div>
      </Suspense>
    </div>
  )
}

export default SavedCauses
