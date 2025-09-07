import { useMutation, useQuery } from '@tanstack/react-query'
import {
  addPhoneNumber,
  changeProfilePic,
  deleteUserTemp,
  getAllUsers,
  getDonationHistory,
  getSingleUser,
  getTopDonorsAdmin,
  toggleTwoFactorAuthentication,
  updatePrivacySettings,
  updateUser,
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
    mutationFn: () => deleteUserTemp(),
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
