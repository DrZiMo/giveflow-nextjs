'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getCauses,
  getFeaturedCauses,
  getNumberOfDonors,
  getSingleCause,
  toggleLikeCause,
} from '../api/causes'

export const useCauses = (
  cause_search: string,
  category: string,
  sort: string
) => {
  return useQuery({
    queryKey: ['causes', cause_search, category, sort],
    queryFn: () => getCauses(cause_search, category, sort),
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

export const useToggleLikeCause = () => {
  return useMutation({
    mutationFn: (causeId: string) => toggleLikeCause(causeId),
  })
}
