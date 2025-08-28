'use client'

import { useQuery } from '@tanstack/react-query'
import { getCauses } from '../api/causes'

export const useCauses = () => {
  return useQuery({
    queryKey: ['causes'],
    queryFn: getCauses,
  })
}
