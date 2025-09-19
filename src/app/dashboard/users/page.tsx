'use client'

import { DashboardUser } from '@/app/types/users.types'
import AllUsersTab from '@/components/AllUsersTab'
import ProfileTitle from '@/components/ProfileTitle'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useGetAllUsers } from '@/lib/hook/useUser'
import { useState } from 'react'

const UsersPage = () => {
  const [page, setPage] = useState(1)
  const limit = 10
  const [status, setStatus] = useState<'all' | 'active' | 'suspend'>('all')

  const { data: users, isLoading } = useGetAllUsers(page, limit, status)

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
            <Tabs
              defaultValue='all'
              onValueChange={(value) => {
                setStatus(value as 'all' | 'active' | 'suspend')
                setPage(1) // reset page when switching tab
              }}
            >
              <TabsList>
                <TabsTrigger value='all'>
                  All Users ({users?.number ?? '...'})
                </TabsTrigger>
                <TabsTrigger value='active'>
                  Active Users ({users?.activeCount ?? '...'})
                </TabsTrigger>
                <TabsTrigger value='suspend'>
                  Suspended Users ({users?.suspendCount ?? '...'})
                </TabsTrigger>
              </TabsList>

              <TabsContent value='all'>
                <AllUsersTab
                  pagination={{ page, totalPages }}
                  onPageChange={setPage}
                  users={users?.users as DashboardUser[]}
                  isLoading={isLoading}
                />
              </TabsContent>

              <TabsContent value='active'>
                <AllUsersTab
                  pagination={{ page, totalPages }}
                  onPageChange={setPage}
                  users={users?.users as DashboardUser[]}
                  isLoading={isLoading}
                />
              </TabsContent>

              <TabsContent value='suspend'>
                <AllUsersTab
                  pagination={{ page, totalPages }}
                  onPageChange={setPage}
                  users={users?.users as DashboardUser[]}
                  isLoading={isLoading}
                />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UsersPage
