import { Card, CardContent } from './ui/card'
import { DashboardUser, ROLE } from '@/app/types/users.types'
import { Ban, Eye, Pencil, Trash, User } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Badge } from './ui/badge'
import Loading from '@/app/loading'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

dayjs.extend(relativeTime)

const AllUsersTab = ({
  users,
  isLoading,
}: {
  users: DashboardUser[]
  isLoading: boolean
}) => {
  if (isLoading) return <Loading />

  const buttonSize = 17

  return (
    <Card>
      <CardContent>
        <Table className='rounded-md'>
          <TableHeader>
            <TableRow className='uppercase text-sm!'>
              <TableHead className='w-[100px]'>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='p-3'>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
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
                          <h3 className='font-medium text-card-foreground'>
                            {user.first_name} {user.last_name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className='font-medium'>
                  <Badge
                    variant={user.role === ROLE.ADMIN ? 'success' : 'outline'}
                  >
                    {user.role}
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
                  <Eye
                    size={buttonSize}
                    className='hover:text-primary transition cursor-pointer'
                  />
                  <Pencil
                    size={buttonSize}
                    className='hover:text-primary transition cursor-pointer'
                  />
                  <Ban
                    size={buttonSize}
                    className='hover:text-primary transition cursor-pointer'
                  />
                  <Trash
                    size={buttonSize}
                    className='hover:text-primary transition cursor-pointer text-destructive'
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default AllUsersTab
