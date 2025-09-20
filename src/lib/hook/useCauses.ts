'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import {
  createNewCause,
  deleteCause,
  getCauses,
  getFeaturedCauses,
  getNumberOfDonors,
  getSingleCause,
  toggleActivity,
  toggleFeatured,
  toggleLikeCause,
  updateCause,
} from '../api/causes'
import { IUpdateCaue } from '@/app/types/causes.types'

export const useCauses = (
  cause_search?: string,
  category?: string,
  sort?: string
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

export const useCreateCause = () => {
  return useMutation({
    mutationFn: (data: FormData) => createNewCause(data),
  })
}

export const useToggleActive = () => {
  return useMutation({
    mutationFn: (id: string) => toggleActivity(id),
  })
}

export const useDeleteCause = () => {
  return useMutation({
    mutationFn: (id: string) => deleteCause(id),
  })
}

export const useToggleFeatured = () => {
  return useMutation({
    mutationFn: (id: string) => toggleFeatured(id),
  })
}

export const useUpdateCause = () => {
  return useMutation({
    mutationFn: (data: IUpdateCaue) => updateCause(data),
  })
}
