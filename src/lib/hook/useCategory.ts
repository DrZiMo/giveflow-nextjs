import { useMutation, useQuery } from '@tanstack/react-query'
import { addNewCategory, getAllCategories } from '../api/category'

export const useGetAllCategory = () => {
  return useQuery({
    queryKey: ['all-category'],
    queryFn: getAllCategories,
  })
}

export const useAddNewCategory = () => {
  return useMutation({
    mutationFn: ({ name }: { name: string }) => addNewCategory({ name }),
  })
}
