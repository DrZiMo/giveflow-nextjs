'use client'

import {
  useCreateNotification,
  useDeleteNotification,
  useGetAllNotification,
} from '@/lib/hook/useNotification'
import { Button } from '../ui/button'
import { Plus, Trash } from 'lucide-react'
import Loading from '@/app/loading'
import { Card, CardContent } from '../ui/card'
import dayjs from 'dayjs'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { useQueryClient } from '@tanstack/react-query'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useState } from 'react'
import { Textarea } from '../ui/textarea'

const AnnouncementsPage = () => {
  const iconSize = 18
  const { data, isLoading } = useGetAllNotification()
  const deleteNotification = useDeleteNotification()
  const createNotification = useCreateNotification()

  const queryClient = useQueryClient()

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  const handleDeleteAnnouncemnet = (id: string) => {
    deleteNotification.mutate(id, {
      onSuccess: (res) => {
        toast.success(res.message, { id: toastId })
        queryClient.invalidateQueries({ queryKey: ['all-notifications'] })
      },
      onError: () => {
        toast.error('failed to delete notification', { id: toastId })
      },
    })
  }

  const handleCreateAnnouncement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createNotification.mutate(
      { title, message },
      {
        onSuccess: (res) => {
          toast.success(res.message, { id: toastId })
          queryClient.invalidateQueries({ queryKey: ['all-notifications'] })
          setTitle('')
          setMessage('')
          setOpen(false)
        },
        onError: () => {
          toast.error('failed to create new announcement')
        },
      }
    )
  }

  return (
    <div className='mt-10'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div>
          <h2 className='font-medium'>Platform Announcements</h2>
          <p className='text-muted-foreground text-sm'>
            Manage system-wide announcements for users
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus /> New Announcement
            </Button>
          </DialogTrigger>

          <DialogContent className='sm:max-w-[425px]'>
            <form onSubmit={handleCreateAnnouncement} className='space-y-5'>
              <DialogHeader>
                <DialogTitle>Create Announcement</DialogTitle>
                <DialogDescription>
                  Create announcement that will be sent to all users that
                  enabled email notifications.
                </DialogDescription>
              </DialogHeader>

              <div className='grid gap-4'>
                <div className='grid gap-3'>
                  <Label htmlFor='title'>Title</Label>
                  <Input
                    id='title'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className='grid gap-3'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    value={message}
                    className='h-40'
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button
                  type='submit'
                  disabled={
                    !title.trim() ||
                    !message.trim() ||
                    createNotification.isPending
                  }
                >
                  Create
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className='space-y-4 mt-6'>
        {isLoading ? (
          <Loading />
        ) : data?.notifications ? (
          data?.notifications.map((notification, index) => (
            <Card key={index}>
              <CardContent>
                <div className='flex justify-between'>
                  <h1 className='font-medium text-xl'>{notification.name}</h1>
                  <div className='flex gap-2'>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Trash
                          size={iconSize}
                          className='text-destructive cursor-pointer'
                        />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <Button
                              variant={'destructive'}
                              onClick={() =>
                                handleDeleteAnnouncemnet(notification.id)
                              }
                            >
                              Delete
                            </Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
                <p className='text-muted-foreground'>{notification.message}</p>
                <p className='text-muted-foreground text-sm mt-2'>
                  Created by:{' '}
                  {`${notification.user.first_name} ${notification.user.last_name}`}
                </p>
                <div className='flex gap-6'>
                  <p className='text-muted-foreground text-sm'>
                    Sended to {notification.number_of_users} users
                  </p>
                  <p className='text-muted-foreground text-sm'>
                    Created:{' '}
                    {dayjs(notification.created_at).format('DD/MM/YYYY')}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className='text-muted-foreground'>No Notifications found</p>
        )}
      </div>
    </div>
  )
}

export default AnnouncementsPage
