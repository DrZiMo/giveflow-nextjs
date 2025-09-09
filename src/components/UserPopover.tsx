'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Ban, Eye, Mail, Pencil, Phone, RotateCcw, User } from 'lucide-react'
import Loading from '@/app/loading'
import {
  useRestoreUser,
  useSingleUser,
  useSuspendUser,
} from '@/lib/hook/useUser'
import { Badge } from './ui/badge'
import { ROLE } from '@/app/types/users.types'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useQueryClient } from '@tanstack/react-query'
import { DashboardEditUser } from './Dashboard/DashboardEditUser'

dayjs.extend(relativeTime)

const UserPopover = ({
  userId,
  buttonSize,
}: {
  userId: number
  buttonSize: number
}) => {
  const { data, isLoading, refetch } = useSingleUser(userId)
  const user = data?.user
  const id = userId
  const queryClient = useQueryClient()

  const { mutate: suspendUser } = useSuspendUser()
  const { mutate: restoreUser } = useRestoreUser()
  const handleSuspend = () => {
    suspendUser(
      { id },
      {
        onSuccess: () => {
          toast.success('User suspended successfully', { id: toastId })
          refetch()
          queryClient.invalidateQueries({ queryKey: ['all-users'] })
        },
        onError: () => {
          toast.error('Failed to suspend user', { id: toastId })
        },
      }
    )
  }

  const handleRestore = () => {
    restoreUser(
      { id },
      {
        onSuccess: () => {
          toast.success('User restored successfully', { id: toastId })
          refetch()
          queryClient.invalidateQueries({ queryKey: ['all-users'] })
        },
        onError: () => {
          toast.error('Failed to restore user', { id: toastId })
        },
      }
    )
  }

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
          <div>
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

            <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
              <div>
                <h3 className='text-muted-foreground font-medium'>
                  Contact Information
                </h3>
                <div className='flex gap-2 items-center text-sm my-2'>
                  <Mail className='text-muted-foreground w-4 h-4' />
                  <p>{user?.email}</p>
                </div>
                <div className='flex gap-2 items-center text-sm'>
                  <Phone className='text-muted-foreground w-4 h-4' />
                  <p>
                    {user?.phone_number ? user.phone_number : 'No phone number'}
                  </p>
                </div>
              </div>
              <div>
                <h3 className='text-muted-foreground font-medium'>
                  Account Details
                </h3>
                <div className='flex gap-1 items-center my-2'>
                  <p className='text-muted-foreground'>User Role:</p>
                  <p>{user?.role}</p>
                </div>
                <div className='flex gap-1 items-center'>
                  <p className='text-muted-foreground'>Joined:</p>
                  <p>{dayjs(user?.created_at).fromNow()}</p>
                </div>
              </div>
            </div>

            <div className='flex justify-end gap-2 mt-6 items-center'>
              <DialogClose asChild>
                <Button variant={'outline'}>Cancel</Button>
              </DialogClose>
              {user?.role === ROLE.ADMIN ? null : (
                <DashboardEditUser isButton={true} user={user!} />
              )}
              {user?.is_deleted ? (
                <Button variant={'success'} onClick={handleRestore}>
                  <RotateCcw /> Restore
                </Button>
              ) : user?.role === ROLE.ADMIN ? null : (
                <Button variant={'destructive'} onClick={handleSuspend}>
                  <Ban /> Suspend
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default UserPopover
