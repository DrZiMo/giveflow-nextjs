'use client'

import { DashboardUser } from '@/app/types/users.types'
import AllUsersTab from '@/components/AllUsersTab'
import ProfileTitle from '@/components/ProfileTitle'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { useGetAllUsers } from '@/lib/hook/useUser'
import { useState } from 'react'

const UsersPage = () => {
  const [page, setPage] = useState(1)
  const limit = 10

  const { data: users, isLoading } = useGetAllUsers(page, limit)

  const totalPages = users?.pagination.totalPages || 1

  return (
    <div>
      <ProfileTitle
        title='User Management'
        subtitle='Manage donors, recipients, and user approvals'
      />
      <Card className='my-8 py-0! px-0! bg-transparent border-0'>
        <CardContent className='px-0!'>
          <div className='flex w-full flex-col gap-6'>
            <Tabs defaultValue='all'>
              <TabsList>
                <TabsTrigger value='all'>
                  All Users ({users?.number || '...'})
                </TabsTrigger>
                <TabsTrigger value='password'>Password</TabsTrigger>
              </TabsList>

              <TabsContent value='all'>
                <AllUsersTab
                  pagination={{
                    page,
                    totalPages,
                  }}
                  onPageChange={setPage}
                  users={users?.users as DashboardUser[]}
                  isLoading={isLoading}
                />
              </TabsContent>

              <TabsContent value='password'>
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you&apos;ll be
                      logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-6'>
                    <div className='grid gap-3'>
                      <Label htmlFor='tabs-demo-current'>
                        Current password
                      </Label>
                      <Input id='tabs-demo-current' type='password' />
                    </div>
                    <div className='grid gap-3'>
                      <Label htmlFor='tabs-demo-new'>New password</Label>
                      <Input id='tabs-demo-new' type='password' />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UsersPage
