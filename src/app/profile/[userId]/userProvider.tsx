'use client'

import { useSingleUser } from '@/lib/hook/useUser'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../loading'
import { AppDispatch, RootState } from '@/store'
import { setIsUser, setSelectedUser } from '@/store/userSlice'

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useParams<{ userId: string }>()
  const { data, isLoading } = useSingleUser(Number(userId))
  const user = data?.user
  const dispatch = useDispatch<AppDispatch>()
  const loggedInUser = useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
    if (!user) return

    // Set the selected user
    dispatch(setSelectedUser(user))

    // Set isUser only if logged-in user matches selected user
    dispatch(setIsUser(loggedInUser?.id === user.id))
  }, [user, loggedInUser, dispatch])

  // Show loading while fetching user data or if userId is invalid
  if (isLoading || !user) return <Loading />

  return <>{children}</>
}

export default UserProvider
