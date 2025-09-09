import { DashboardUser, ROLE } from '@/app/types/users.types'
import { Card, CardContent } from './ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import Loading from '@/app/loading'
import { Ban, RotateCcw, Trash, User } from 'lucide-react'
import dayjs from 'dayjs'
import { Badge } from './ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'
import relativeTime from 'dayjs/plugin/relativeTime'
import UserPopover from './UserPopover'
import Link from 'next/link'
import {
  useDeleteUserByAdmin,
  useRestoreUser,
  useSuspendUser,
} from '@/lib/hook/useUser'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'
import { toastId } from '@/app/_constants/backendBaseUrl'
import { DashboardEditUser } from './Dashboard/DashboardEditUser'
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
} from './ui/alert-dialog'
import { Button } from './ui/button'

dayjs.extend(relativeTime)

type AllUsersTabProps = {
  users: DashboardUser[]
  isLoading: boolean
  pagination: {
    page: number
    totalPages: number
  }
  onPageChange: (page: number) => void
}

const AllUsersTab = ({
  users,
  isLoading,
  pagination,
  onPageChange,
}: AllUsersTabProps) => {
  const { mutate: suspendUser } = useSuspendUser()
  const { mutate: restoreUser } = useRestoreUser()
  const queryClient = useQueryClient()

  const { mutate: deleteUser } = useDeleteUserByAdmin()

  const handleDeleteAccount = (id: number) => {
    deleteUser(id, {
      onSuccess: () => {
        toast.success('Account deleted successfully')
        queryClient.invalidateQueries({ queryKey: ['all-users'] })
      },
      onError: () => {
        toast.error('Error deleting account')
      },
    })
  }

  const handleSuspend = (id: number) => {
    suspendUser(
      { id },
      {
        onSuccess: () => {
          toast.success('User suspended successfully', { id: toastId })
          queryClient.invalidateQueries({ queryKey: ['all-users'] })
        },
        onError: () => {
          toast.error('Failed to suspend user', { id: toastId })
        },
      }
    )
  }

  const handleRestore = (id: number) => {
    restoreUser(
      { id },
      {
        onSuccess: () => {
          toast.success('User restored successfully', { id: toastId })
          queryClient.invalidateQueries({ queryKey: ['all-users'] })
        },
        onError: () => {
          toast.error('Failed to restore user', { id: toastId })
        },
      }
    )
  }

  if (isLoading) return <Loading />

  const buttonSize = 15
  const { page, totalPages } = pagination

  return (
    <Card>
      <CardContent>
        <Table className='rounded-md'>
          <TableHeader>
            <TableRow className='uppercase text-sm!'>
              <TableHead className='w-[100px]'>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='p-3'>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Link href={`/profile/${user.id}`}>
                    <div className='flex items-center gap-4'>
                      <div>
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 rounded-full'>
                            {user.profile_pic ? (
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
                            <h3 className='font-medium text-card-foreground hover:text-primary transition'>
                              {user.first_name} {user.last_name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell className='font-medium'>
                  <Badge
                    variant={user.role === ROLE.ADMIN ? 'success' : 'outline'}
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.is_deleted ? 'destructive' : 'success'}>
                    {user.is_deleted ? 'Suspended' : 'Active'}
                  </Badge>
                </TableCell>
                <TableCell className='text-muted-foreground'>
                  <div className='flex flex-col'>
                    <p>${user.totalDonated.toLocaleString()} donated</p>
                    <p>{user.causesSupported} causes</p>
                  </div>
                </TableCell>
                <TableCell>{dayjs(user.created_at).fromNow()}</TableCell>
                <TableCell className='flex gap-2 justify-end items-center'>
                  <UserPopover buttonSize={buttonSize} userId={user.id} />
                  {user.role === ROLE.ADMIN ? null : (
                    <DashboardEditUser isButton={false} user={user} />
                  )}
                  {user.is_deleted ? (
                    <RotateCcw
                      size={buttonSize}
                      className='hover:text-primary transition cursor-pointer'
                      onClick={() => handleRestore(user.id)}
                    />
                  ) : user.role === ROLE.ADMIN ? null : (
                    <Ban
                      size={buttonSize}
                      className='hover:text-primary transition cursor-pointer'
                      onClick={() => handleSuspend(user.id)}
                    />
                  )}
                  {user.role === ROLE.ADMIN ? null : (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Trash
                          size={buttonSize}
                          className='hover:text-red-700 transition cursor-pointer text-destructive'
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
                              onClick={() => handleDeleteAccount(user.id)}
                            >
                              Delete
                            </Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className='mt-6 flex justify-center'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => onPageChange(page - 1)}
                  className={page === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={page === i + 1}
                    onClick={() => onPageChange(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => onPageChange(page + 1)}
                  className={
                    page === totalPages ? 'pointer-events-none opacity-50' : ''
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}

export default AllUsersTab
