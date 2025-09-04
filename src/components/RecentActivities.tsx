'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { useGetUserActivity } from '@/lib/hook/useActivity'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import Loading from '@/app/loading'

dayjs.extend(relativeTime)

const RecentActivities = () => {
  const { data, isLoading } = useGetUserActivity()

  if (isLoading) return <Loading />

  const recentActivities = data?.activities

  return (
    <Card className='my-8'>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        {recentActivities?.map((activity, index) => (
          <div
            key={index}
            className='flex justify-between items-center space-y-6'
          >
            <div>
              <Link
                href={`/causes/cause/${activity.cause_id}`}
                className='hover:text-primary hover:underline transition'
              >
                <h4 className='font-medium'>{activity.name}</h4>
              </Link>
              <p className='text-sm text-muted-foreground'>
                {dayjs(activity.created_at).fromNow()}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='font-medium'>
                {activity.amount === '-'
                  ? activity.amount
                  : `$${activity.amount}`}
              </p>
              <Badge
                variant={
                  activity.status === 'Completed'
                    ? 'success'
                    : activity.status === 'Save' || activity.status === 'Unsave'
                    ? 'secondary'
                    : 'default'
                }
              >
                {activity.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default RecentActivities
