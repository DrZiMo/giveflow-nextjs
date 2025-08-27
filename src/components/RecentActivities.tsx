import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const RecentActivities = () => {
  const recentActivities = [
    {
      activity: 'Donated to Hurricane Relief Fund',
      date: '2 hours ago',
      amount: 500,
      status: 'Completed',
    },
    {
      activity: "Donated to Children's Education Program",
      date: '3 days ago',
      amount: 250,
      status: 'Completed',
    },
    {
      activity: 'Saved Clean Water Initiative for later',
      date: '5 days ago',
      amount: null,
      status: 'saved',
    },
  ]

  return (
    <Card className='my-8'>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className='flex justify-between items-center space-y-6'
          >
            <div>
              <h4 className='font-medium'>{activity.activity}</h4>
              <p className='text-sm text-muted-foreground'>{activity.date}</p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='font-medium'>
                {activity.amount !== null ? `$${activity.amount}` : '-'}
              </p>
              <Badge
                variant={
                  activity.status === 'Completed'
                    ? 'success'
                    : activity.status === 'saved'
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
