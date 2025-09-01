import { useMutation, useQuery } from '@tanstack/react-query'
import { getUserSaves, toggleSaveCause } from '../api/saves'

export const useGetUserSaves = () => {
  return useQuery({
    queryKey: ['user-saves'],
    queryFn: getUserSaves,
  })
}

export const useToggleSaveCause = () => {
  return useMutation({
    mutationFn: (cause_id: string) => toggleSaveCause(cause_id),
  })
}
