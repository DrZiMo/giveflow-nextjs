import { useMutation, useQuery } from '@tanstack/react-query'
import {
  deleteUserTemp,
  getSingleUser,
  updatePrivacySettings,
  updateUser,
} from '../api/user'

export const useSingleUser = (userId: number) => {
  return useQuery({
    queryKey: ['single-user'],
    queryFn: () => getSingleUser(userId),
  })
}

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (data: { first_name: string; last_name: string }) =>
      updateUser(data),
  })
}

export const useUpdatePrivacySettings = () => {
  return useMutation({
    mutationFn: (data: {
      is_public: boolean
      is_history_visible: boolean
      is_anonymous: boolean
    }) => updatePrivacySettings(data),
  })
}

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: () => deleteUserTemp(),
  })
}
