'use client'

import React, { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider, useDispatch } from 'react-redux'
import { store } from '@/store'
import { useWhoAmI } from '@/lib/hook/useAuth'
import { setUser } from '@/store/authSlice'
import { UserProps } from './types/users.types'
import Loading from './loading'
import { clearUser } from '@/store/userSlice'
import { usePathname, useRouter } from 'next/navigation'
import { useGetUserLike } from '@/lib/hook/useLike'
import { clearLikeCauses, setLikedCauses } from '@/store/likeSlice'

// React Query wrapper
export const ReactQueryProviders = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
const WhoAmIFetcher = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useWhoAmI()
  const { data: liked } = useGetUserLike()
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearLikeCauses())
  }, [dispatch])

  useEffect(() => {
    if (!pathname.startsWith('/auth')) {
      if (data?.user) {
        if (data.user.is_two_factor_authentication && !data.user.is_logged_in) {
          router.replace('/auth/login')
          return
        }

        dispatch(setUser(data.user as UserProps))
      }
    }
  }, [data?.user, dispatch, pathname, router])

  useEffect(() => {
    if (!pathname.startsWith('/profile')) {
      dispatch(clearUser())
    }
  }, [dispatch, pathname])

  useEffect(() => {
    if (liked?.causes) {
      dispatch(setLikedCauses(liked.causes))
    }
  }, [liked, dispatch])

  if (isLoading) return <Loading />
  return <>{children}</>
}

// Main StoreProvider
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <WhoAmIFetcher>{children}</WhoAmIFetcher>
    </Provider>
  )
}
