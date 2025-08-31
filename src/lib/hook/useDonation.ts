import { useMutation, useQuery } from '@tanstack/react-query'
import { getTopDonors, newDonation } from '../api/donation'

export const useCreateDonation = () => {
  return useMutation({
    mutationFn: (data: { cause_id: string; amount: number }) =>
      newDonation(data),
  })
}

export const useGetTopDonors = (causeId: string) => {
  return useQuery({
    queryKey: ['top-donors', causeId],
    queryFn: () => getTopDonors(causeId),
  })
}
