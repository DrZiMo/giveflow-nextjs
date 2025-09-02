import { useToggleLikeCause } from '@/lib/hook/useCauses'
import { AppDispatch, RootState } from '@/store'
import { setLikedCauses } from '@/store/likeSlice'
import { useQueryClient } from '@tanstack/react-query'
import { ThumbsUp } from 'lucide-react'
import React, { startTransition, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface ILikeButtonProps {
  likes: number
  buttonSize: number
  causeId: string
}

const LikeButton = ({ likes, buttonSize, causeId }: ILikeButtonProps) => {
  const likedCauses = useSelector(
    (state: RootState) => state.likedCauses.likedCauses.causes
  )
  const isLiked = likedCauses.some((c) => c.id === causeId)

  const [optimisticLike, toggleOptimistic] = useState(isLiked)
  const [likeCount, setLikeCount] = useState(likes)

  useEffect(() => {
    toggleOptimistic(isLiked)
  }, [isLiked])

  const { mutate: likeCause } = useToggleLikeCause()
  const queryClient = useQueryClient()
  const dispatch = useDispatch<AppDispatch>()

  const handleLike = () => {
    startTransition(() => {
      toggleOptimistic(!optimisticLike)
      setLikeCount((prev) => prev + (optimisticLike ? -1 : 1))
    })

    likeCause(causeId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user-like'] })
        queryClient.invalidateQueries({ queryKey: ['whoami'] })
        dispatch(setLikedCauses(likedCauses))
      },
      onError: () => {
        startTransition(() => {
          toggleOptimistic(optimisticLike)
          setLikeCount((prev) => prev + (optimisticLike ? 1 : -1))
        })
      },
    })
  }

  return (
    <div
      className={`text-sm flex items-center gap-2 transition cursor-pointer ${
        optimisticLike
          ? '[&_svg]:fill-current text-primary'
          : 'text-muted-foreground hover:text-primary'
      }`}
      onClick={handleLike}
    >
      <ThumbsUp size={buttonSize} /> {likeCount}
    </div>
  )
}

export default LikeButton
