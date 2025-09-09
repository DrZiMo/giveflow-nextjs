import { useMutation, useQuery } from '@tanstack/react-query'
import {
  addPhoneNumber,
  changeProfilePic,
  deleteUser,
  deleteUserByAdmin,
  getAllUsers,
  getDonationHistory,
  getSingleUser,
  getTopDonorsAdmin,
  restoreUser,
  suspenseUser,
  toggleTwoFactorAuthentication,
  updatePrivacySettings,
  updateUser,
  updateUserAdmin,
} from '../api/user'

export const useSingleUser = (userId: number) => {
  return useQuery({
    queryKey: ['single-user'],
    queryFn: () => getSingleUser(userId),
  })
}

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (data: { first_name: string; last_name: string }) =>
      updateUser(data),
  })
}

export const useUpdateUserAdmin = () => {
  return useMutation({
    mutationFn: (data: { id: number; first_name: string; last_name: string }) =>
      updateUserAdmin(data),
  })
}

export const useUpdatePrivacySettings = () => {
  return useMutation({
    mutationFn: (data: {
      is_public: boolean
      is_history_visible: boolean
      is_anonymous: boolean
    }) => updatePrivacySettings(data),
  })
}

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: () => deleteUser(),
  })
}

export const useDeleteUserByAdmin = () => {
  return useMutation({
    mutationFn: (id: number) => deleteUserByAdmin(id),
  })
}

export const useGetDonationsHistory = (search?: string, time?: string) => {
  return useQuery({
    queryKey: ['donation-history', search, time],
    queryFn: () => getDonationHistory(search, time),
  })
}

export const useChangeProfilePicture = () => {
  return useMutation({
    mutationFn: (formData: FormData) => changeProfilePic(formData),
  })
}

export const useAddPhoneNumber = () => {
  return useMutation({
    mutationFn: (data: { phone_number: string }) => addPhoneNumber(data),
  })
}

export const useToggleTwoFactorAuthentication = () => {
  return useMutation({
    mutationFn: toggleTwoFactorAuthentication,
  })
}

export const useGetTopDonorsAdmin = () => {
  return useQuery({
    queryKey: ['top-donors'],
    queryFn: getTopDonorsAdmin,
  })
}

export const useGetAllUsers = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['all-users'],
    queryFn: () => getAllUsers(page, limit),
  })
}

export const useSuspendUser = () => {
  return useMutation({
    mutationFn: ({ id }: { id: number }) => suspenseUser({ id }),
  })
}

export const useRestoreUser = () => {
  return useMutation({
    mutationFn: ({ id }: { id: number }) => restoreUser({ id }),
  })
}
