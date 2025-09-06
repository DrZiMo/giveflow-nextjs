import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getAdminDonationsSummary,
  getAdminMonthlyDonations,
  getAdminTopSupportedCauses,
  getDonationsSummary,
  getMonthlyDonations,
  getTopDonors,
  getTopSupportedCauses,
  newDonation,
} from '../api/donation'

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

export const useAdminDonationsSummary = () => {
  return useQuery({
    queryKey: ['donotions-summary-admin'],
    queryFn: getAdminDonationsSummary,
  })
}

export const useAdminMonthlyDonations = () => {
  return useQuery({
    queryKey: ['donotions-monthly-admin'],
    queryFn: getAdminMonthlyDonations,
  })
}

export const useAdminTopSupportedCauses = () => {
  return useQuery({
    queryKey: ['top-supported-causes-admin'],
    queryFn: getAdminTopSupportedCauses,
  })
}

export const useDonationsSummary = () => {
  return useQuery({
    queryKey: ['donotions-summary'],
    queryFn: getDonationsSummary,
  })
}

export const useMonthlyDonations = () => {
  return useQuery({
    queryKey: ['donotions-monthly'],
    queryFn: getMonthlyDonations,
  })
}

export const useTopSupportedCauses = () => {
  return useQuery({
    queryKey: ['top-supported-causes'],
    queryFn: getTopSupportedCauses,
  })
}
