'use client'

import Loading from '@/app/loading'
import Cause from '@/components/Cause'
import ProfileTitle from '@/components/ProfileTitle'
import { RootState } from '@/store'
import Link from 'next/link'
import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useGetUserSaves } from '@/lib/hook/useSaves'

const SavedCauses = () => {
  const router = useRouter()
  const authUser = useSelector((state: RootState) => state.auth.user)
  const selectedUser = useSelector(
    (state: RootState) => state.selectedUser.user
  )
  const isUser = useSelector((state: RootState) => state.selectedUser.isUser)
  const { data: savedCauses, isLoading } = useGetUserSaves()

  useEffect(() => {
    if (!authUser || !selectedUser || !selectedUser.id || !isUser) {
      return
    }
    if (authUser.id !== selectedUser.id) {
      router.replace(`/profile/${selectedUser.id}`)
    }
  }, [authUser, selectedUser, authUser?.id, selectedUser.id, router, isUser])

  if (!authUser || !selectedUser || !selectedUser.id || !isUser) {
    return null
  }

  if (isLoading) return <Loading />

  const causeSaved = savedCauses?.savedCauses
  console.log(causeSaved)

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
                id={cause.cause.id}
                name={cause.cause.name}
                short_description={cause.cause.short_description}
                amount_needed={cause.cause.amount_needed}
                current_amount={cause.cause.current_amount}
                category={cause.cause.category}
                is_trending={cause.cause.is_trending!}
                cause_pic={cause.cause.cause_pic}
                long_description={cause.cause.long_description}
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
