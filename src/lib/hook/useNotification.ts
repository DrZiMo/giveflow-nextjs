import { useMutation, useQuery } from '@tanstack/react-query'
import {
  createNotification,
  deleteNotification,
  getAllNotifications,
} from '../api/notifications'

export const useGetAllNotification = () => {
  return useQuery({
    queryKey: ['all-notifications'],
    queryFn: getAllNotifications,
  })
}

export const useDeleteNotification = () => {
  return useMutation({
    mutationFn: (id: string) => deleteNotification(id),
  })
}

export const useCreateNotification = () => {
  return useMutation({
    mutationFn: ({ title, message }: { title: string; message: string }) =>
      createNotification(title, message),
  })
}
