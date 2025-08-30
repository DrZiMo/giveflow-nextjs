import { IUpdateSettings } from '@/app/types/settings.types'
import { useMutation } from '@tanstack/react-query'
import { updateSettings } from '../api/settings'

export const useUpdateSettings = () => {
  return useMutation({
    mutationFn: (data: IUpdateSettings) => updateSettings(data),
  })
}
