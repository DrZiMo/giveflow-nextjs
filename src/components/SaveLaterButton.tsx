'use client'

import { Heart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { useGetUserSaves, useToggleSaveCause } from '@/lib/hook/useSaves'
import { setSavedCauses } from '@/store/causeSlice'
import { startTransition, useOptimistic } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'

interface SaveLaterButtonProps {
  size?: number
  causeId: string
}

const SaveLaterButton = ({ size = 20, causeId }: SaveLaterButtonProps) => {
  const savedCauses = useSelector(
    (state: RootState) => state.savedCauses.savedCauses
  )
  const isSaved = savedCauses.some((c) => c.cause_id === causeId)
  const [optimisticSaved, toggleOptimistic] = useOptimistic(isSaved)

  const { data: userSavedCauses } = useGetUserSaves()
  const { mutate: toggleSave } = useToggleSaveCause()
  const dispatch = useDispatch<AppDispatch>()
  const queryClient = useQueryClient()

  const handleToggleSave = () => {
    const action = optimisticSaved ? 'removed' : 'saved'

    startTransition(() => {
      toggleOptimistic(!optimisticSaved)

      if (optimisticSaved) {
        dispatch(
          setSavedCauses(savedCauses.filter((c) => c.cause_id !== causeId))
        )
      } else {
        const newSaved = userSavedCauses?.savedCauses.find(
          (c) => c.cause_id === causeId
        )
        if (newSaved) {
          dispatch(setSavedCauses([...savedCauses, newSaved]))
        }
      }
    })

    toggleSave(causeId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user-saves'] })
        toast.success(`Cause ${action} successfully`, { id: toastId })
      },
      onError: () => {
        startTransition(() => {
          dispatch(setSavedCauses(savedCauses))
          toggleOptimistic(isSaved)
        })
        toast.error(`Error while ${action} cause`, { id: toastId })
      },
    })
  }

  return (
    <div
      className={`w-fit text-primary ${
        optimisticSaved ? '[&_svg]:fill-current' : 'hover:[&_svg]:fill-current'
      } p-2 cursor-pointer`}
      onClick={handleToggleSave}
    >
      <Heart
        size={size}
        className={optimisticSaved ? 'fill-current' : 'fill-transparent'}
      />
    </div>
  )
}

export default SaveLaterButton
