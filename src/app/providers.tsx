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
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  const dispatch = useDispatch()

  useEffect(() => {
    if (data?.user) {
      dispatch(setUser(data.user as UserProps))
    }
  }, [data?.user, dispatch])

  useEffect(() => {
    if (!pathname.startsWith('/profile')) {
      dispatch(clearUser())
    }
  }, [dispatch, pathname])

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
