'use client'

import { Heart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { useToggleSaveCause } from '@/lib/hook/useSaves'
import { startTransition, useOptimistic } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { setUser } from '@/store/authSlice'
import { useRouter } from 'next/navigation'

interface SaveLaterButtonProps {
  size?: number
  causeId: string
}

const SaveLaterButton = ({ size = 20, causeId }: SaveLaterButtonProps) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const savedCauses = user?.saveForLater

  const isSaved = savedCauses?.some((c) => c.id === causeId)
  const [optimisticSaved, toggleOptimistic] = useOptimistic(isSaved)
  const router = useRouter()

  const { mutate: toggleSave } = useToggleSaveCause()
  const dispatch = useDispatch<AppDispatch>()
  const queryClient = useQueryClient()

  const handleToggleSave = () => {
    if (!user) {
      router.replace('/auth/login')
      return
    }
    const action = optimisticSaved ? 'removed' : 'saved'

    startTransition(() => {
      toggleOptimistic(!optimisticSaved)
    })

    toggleSave(causeId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['whoami'] })
        dispatch(setUser(user))
        toast.success(`Cause ${action} successfully`, { id: toastId })
      },
      onError: () => {
        startTransition(() => {
          toggleOptimistic(isSaved)
        })
        toast.error(`Error while ${action} cause`, { id: toastId })
      },
    })
  }

  return (
    <div
      className={`w-fit ${
        optimisticSaved
          ? '[&_svg]:fill-current text-primary'
          : 'hover:text-primary text-muted-foreground'
      } p-2 cursor-pointer`}
      onClick={handleToggleSave}
    >
      <Heart size={size} />
    </div>
  )
}

export default SaveLaterButton
