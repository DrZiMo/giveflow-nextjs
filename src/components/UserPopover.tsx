'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Eye, User } from 'lucide-react'
import Loading from '@/app/loading'
import { useSingleUser } from '@/lib/hook/useUser'
import { Badge } from './ui/badge'
import { ROLE } from '@/app/types/users.types'

const UserPopover = ({
  userId,
  buttonSize,
}: {
  userId: number
  buttonSize: number
}) => {
  const { data, isLoading, refetch } = useSingleUser(userId)
  const user = data?.user

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) refetch()
      }}
    >
      <DialogTrigger asChild>
        <Eye
          size={buttonSize}
          className='hover:text-primary transition cursor-pointer'
        />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>User details</DialogTitle>
        </DialogHeader>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='flex items-center gap-5'>
            <div className='w-20 h-20 rounded-full flex-shrink-0'>
              {user?.profile_pic ? (
                <img
                  src={user.profile_pic}
                  alt={user.first_name}
                  className='w-full h-full object-cover rounded-full'
                />
              ) : (
                <div className='w-full h-full bg-primary rounded-full flex justify-center items-center'>
                  <User className='w-5 h-5' />
                </div>
              )}
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <h1 className='font-medium text-card-foreground'>
                  {user?.first_name} {user?.last_name}
                </h1>
                {user?.role === ROLE.ADMIN ? (
                  <Badge variant={'success'}>{ROLE.ADMIN}</Badge>
                ) : null}
              </div>
              <p className='text-muted-foreground text-sm'>{user?.email}</p>
              <Badge variant={user?.is_deleted ? 'destructive' : 'success'}>
                {user?.is_deleted ? 'Suspended' : 'Active'}
              </Badge>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default UserPopover
