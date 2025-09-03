'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useTopSupportedCauses } from '@/lib/hook/useDonation'
import Loading from '@/app/loading'

const TopSupportedCauses = () => {
  const { data, isLoading } = useTopSupportedCauses()

  if (isLoading) return <Loading />

  const supportedCauses = data?.causes ?? []
  const total = supportedCauses.reduce((acc, cause) => acc + cause.amount, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Supported Causes</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {supportedCauses.map((cause, index) => {
          const percentage = total ? (cause.amount / total) * 100 : 0

          return (
            <div className='flex justify-between items-center' key={index}>
              <div className='flex items-center'>
                <div className='w-2 h-2 bg-muted-foreground rounded-full mr-3' />
                <h3 className='font-medium'>{cause.cause}</h3>
              </div>
              <div className='text-right'>
                <h3 className='font-medium'>
                  ${cause.amount.toLocaleString()}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {percentage.toFixed(0)}% of total
                </p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default TopSupportedCauses
