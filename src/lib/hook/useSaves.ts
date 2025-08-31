import { useQuery } from '@tanstack/react-query'
import { getUserSaves } from '../api/saves'

export const useGetUserSaves = () => {
  return useQuery({
    queryKey: ['user-saves'],
    queryFn: getUserSaves,
  })
}
