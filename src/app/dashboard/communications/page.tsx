import AnnouncementsPage from '@/components/Dashboard/AnnouncementsPage'
import ProfileTitle from '@/components/ProfileTitle'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users } from 'lucide-react'
import React from 'react'

const CommunicationsPage = () => {
  return (
    <div>
      <ProfileTitle
        title='Communications'
        subtitle='Manage emails, notifications, and platform communications'
      />

      <Card className='my-8 py-0! px-0! bg-transparent border-0'>
        <CardContent className='px-0!'>
          <div className='flex w-full flex-col gap-6'>
            <Tabs defaultValue='announcement'>
              <TabsList>
                <TabsTrigger value='announcement'>
                  <div className='flex gap-2'>
                    <Users /> Announcement
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value='announcement'>
                <AnnouncementsPage />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CommunicationsPage
