'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import {
  loginUser,
  logoutUser,
  sendCodeEmail,
  singUpUser,
  whoami,
} from '../api/auth'
import { changePassword } from '../api/user'
import { ISignUpDataProp } from '@/app/types/users.types'

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => loginUser(data),
  })
}

export const useSignUp = () => {
  return useMutation({
    mutationFn: (data: ISignUpDataProp) => singUpUser(data),
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

export const useLogout = () => {
  return useQuery({
    queryKey: ['logout'],
    queryFn: logoutUser,
  })
}

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: {
      currentPassword: string
      newPassword: string
      confirmPassword: string
    }) => changePassword(data),
  })
}

export const useSendCodeEmail = () => {
  return useMutation({
    mutationFn: sendCodeEmail,
  })
}
