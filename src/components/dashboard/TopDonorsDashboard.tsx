'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useGetTopDonorsAdmin } from '@/lib/hook/useUser'
import Loading from '@/app/loading'
import DashboardDonor from './DashboardDonor'

const TopDonorsDashboard = () => {
  const { data: topDonors, isLoading } = useGetTopDonorsAdmin()

  if (isLoading) return <Loading />
  return (
    <Card>
      <CardHeader>
        <CardTitle>TopDonors</CardTitle>
      </CardHeader>
      <CardContent>
        {topDonors ? (
          topDonors.donors.map((donor, index) => (
            <DashboardDonor donor={donor} number={index} key={index} />
          ))
        ) : (
          <p className='text-muted-foreground'>No users donated</p>
        )}
      </CardContent>
    </Card>
  )
}

export default TopDonorsDashboard
