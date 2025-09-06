'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Loading from '@/app/loading'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useAdminTopSupportedCauses } from '@/lib/hook/useDonation'

const COLORS = [
  '#6366F1', // indigo
  '#F59E0B', // amber
  '#10B981', // emerald
  '#EF4444', // red
  '#3B82F6', // blue
  '#A855F7', // purple
]

const TopSupportedCausesDashboard = () => {
  const { data, isLoading } = useAdminTopSupportedCauses()

  if (isLoading) return <Loading />

  const supportedCauses = data?.causes ?? []
  const total = supportedCauses.reduce((acc, cause) => acc + cause.amount, 0)

  const chartData = supportedCauses.map((cause, index) => ({
    name: cause.cause,
    value: cause.amount,
    fill: COLORS[index % COLORS.length],
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Supported Causes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={chartData}
                dataKey='value'
                nameKey='name'
                innerRadius={70}
                outerRadius={120}
                paddingAngle={4}
                animationDuration={800}
                animationEasing='ease-out'
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.fill}
                    className='transition-transform duration-300 hover:scale-105'
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
                formatter={(value: number) =>
                  `$${value.toLocaleString()} (${(
                    (value / total) *
                    100
                  ).toFixed(1)}%)`
                }
              />
              <Legend
                verticalAlign='bottom'
                align='center'
                iconType='circle'
                wrapperStyle={{ marginTop: '20px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default TopSupportedCausesDashboard
