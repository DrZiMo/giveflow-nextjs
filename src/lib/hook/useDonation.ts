import { useMutation } from '@tanstack/react-query'
import { newDonation } from '../api/donation'

export const useCreateDonation = () => {
  return useMutation({
    mutationFn: (data: { cause_id: string; amount: number }) =>
      newDonation(data),
  })
}
