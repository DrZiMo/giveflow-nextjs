'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { loginUser, whoami } from '../api/auth'

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => loginUser(data),
  })
}

export const useWhoAmI = () => {
  return useQuery({
    queryKey: ['whoami'],
    queryFn: whoami,
    retry: false,
    staleTime: Infinity,
  })
}
