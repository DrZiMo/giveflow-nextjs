'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Loading from '@/app/loading'
import { useMonthlyDonations } from '@/lib/hook/useDonation'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const MonthlyDonation = () => {
  const { data: monthlyDonations, isLoading } = useMonthlyDonations()

  if (isLoading) return <Loading />

  const monthlyTotals = monthlyDonations?.monthlyTotals ?? []

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Donations</CardTitle>
      </CardHeader>
      <CardContent>
        {monthlyTotals.length === 0 ? (
          <p className='text-center text-muted-foreground'>No donations yet.</p>
        ) : (
          <ResponsiveContainer width='100%' height={300}>
            <LineChart
              data={monthlyTotals}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip
                formatter={(value: number) => `$${value.toLocaleString()}`}
                contentStyle={{
                  borderRadius: 8,
                  background: 'var(--secondary)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              />
              <Line
                type='monotone'
                dataKey='amount'
                stroke='#3b82f6'
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 7 }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}

export default MonthlyDonation
