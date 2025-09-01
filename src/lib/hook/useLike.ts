import { useQuery } from '@tanstack/react-query'
import { getUserLike } from '../api/like'

export const useGetUserLike = () => {
  return useQuery({
    queryKey: ['user-like'],
    queryFn: getUserLike,
  })
}
