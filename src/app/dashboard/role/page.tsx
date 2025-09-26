'use client'

import { DashboardUser, ROLE } from '@/app/types/users.types'
import RoleUsers from '@/components/Dashboard/RoleUsers'
import ProfileTitle from '@/components/ProfileTitle'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useGetAllUsers } from '@/lib/hook/useUser'
import { useState } from 'react'

const RolePage = () => {
  const [role, setRole] = useState<ROLE>(ROLE.USER)
  const [page, setPage] = useState(1)
  const limit = 10

  const { data: users, isLoading } = useGetAllUsers(
    page,
    limit,
    undefined,
    role
  )
  const totalPages = users?.pagination.totalPages || 1

  return (
    <div>
      <ProfileTitle title='Role management' subtitle='Manage user roles' />

      <Card className='my-8 py-0! px-0! bg-transparent border-0'>
        <CardContent className='px-0!'>
          <div className='flex w-full flex-col gap-6'>
            <Tabs
              defaultValue={ROLE.USER}
              onValueChange={(value) => {
                setRole(value as ROLE)
                setPage(1)
              }}
            >
              <TabsList>
                {Object.values(ROLE).map((role, index) => (
                  <TabsTrigger value={role} key={index}>
                    {role}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.values(ROLE).map((role, index) => (
                <TabsContent value={role} key={index}>
                  <RoleUsers
                    pagination={{ page, totalPages }}
                    onPageChange={setPage}
                    users={users?.users as DashboardUser[]}
                    isLoading={isLoading}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RolePage
