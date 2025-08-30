import { useQuery } from '@tanstack/react-query'
import { getSingleUser } from '../api/auth'

export const useSingleUser = (userId: number) => {
  return useQuery({
    queryKey: ['single-user'],
    queryFn: () => getSingleUser(userId),
  })
}
