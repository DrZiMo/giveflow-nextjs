'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Ban, Eye, Mail, Pencil, Phone, User } from 'lucide-react'
import Loading from '@/app/loading'
import { useSingleUser } from '@/lib/hook/useUser'
import { Badge } from './ui/badge'
import { ROLE } from '@/app/types/users.types'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { Button } from './ui/button'

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
              <Button variant={'outline'}>Cancel</Button>
              <Button variant={'default'}>
                <Pencil /> Edit
              </Button>
              <Button variant={'destructive'}>
                <Ban /> Suspend
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default UserPopover
