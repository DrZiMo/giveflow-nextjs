'use client'

import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../api/auth'

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => loginUser(data),
  })
}
