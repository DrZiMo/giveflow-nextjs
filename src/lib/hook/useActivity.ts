import { useQuery } from '@tanstack/react-query'
import { getUserActivities } from '../api/activity'

export const useGetUserActivity = () => {
  return useQuery({
    queryKey: ['user-activities'],
    queryFn: getUserActivities,
  })
}
