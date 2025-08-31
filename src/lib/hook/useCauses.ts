'use client'

import { useQuery } from '@tanstack/react-query'
import {
  getCauses,
  getFeaturedCauses,
  getNumberOfDonors,
  getSingleCause,
} from '../api/causes'

export const useCauses = () => {
  return useQuery({
    queryKey: ['causes'],
    queryFn: getCauses,
  })
}

export const useSingleCause = (id: string) => {
  return useQuery({
    queryKey: ['single cause'],
    queryFn: () => getSingleCause(id),
  })
}

export const useFeaturedCauses = () => {
  return useQuery({
    queryKey: ['featured causes'],
    queryFn: getFeaturedCauses,
  })
}

export const useGetNumberOfDonors = (causeId: string) => {
  return useQuery({
    queryKey: ['donors', causeId],
    queryFn: () => getNumberOfDonors(causeId),
  })
}
