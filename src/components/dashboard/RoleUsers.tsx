import { DashboardUser, ROLE } from '@/app/types/users.types'
import { Card, CardContent } from '../ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import Loading from '@/app/loading'
import { Check, User } from 'lucide-react'
import dayjs from 'dayjs'
import { Badge } from '../ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import { useQueryClient } from '@tanstack/react-query'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Button } from '../ui/button'
import { useState } from 'react'
import { useChangeRole } from '@/lib/hook/useUser'
import toast from 'react-hot-toast'
import { toastId } from '@/app/_constants/backendBaseUrl'

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

const RoleUsers = ({
  users,
  isLoading,
  pagination,
  onPageChange,
}: AllUsersTabProps) => {
  const [selectedRole, setSelectedRole] = useState<ROLE>()
  const queryClient = useQueryClient()

  const changeRole = useChangeRole()

  const handleChangeRole = (id: number) => {
    if (!selectedRole) return
    changeRole.mutate(
      { id, role: selectedRole },
      {
        onSuccess: (res) => {
          toast.success(res.message, { id: toastId })
          queryClient.invalidateQueries({ queryKey: ['all-users'] })
        },
        onError: () => {
          toast.error('Failed to change user role', { id: toastId })
        },
      }
    )
  }

  if (isLoading) return <Loading />

  const { page, totalPages } = pagination

  return !users ? (
    <p className='text-muted-forground'>No users found</p>
  ) : (
    <Card>
      <CardContent>
        <Table className='rounded-md'>
          <TableHeader>
            <TableRow className='uppercase text-sm!'>
              <TableHead className='w-[100px]'>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className='text-right'>Action</TableHead>
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
                <TableCell className='flex justify-end gap-3'>
                  <Select
                    defaultValue={user.role}
                    onValueChange={(value: ROLE) => setSelectedRole(value)}
                  >
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select Role' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Role</SelectLabel>
                        {Object.values(ROLE).map((role, index) => (
                          <SelectItem value={role} key={index}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button
                    variant={'success'}
                    disabled={changeRole.isPending}
                    onClick={() => handleChangeRole(user.id)}
                  >
                    <Check />
                  </Button>
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

export default RoleUsers
