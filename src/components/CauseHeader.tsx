import { CauseProps } from '@/app/types/causes.types'
import React, { Suspense } from 'react'
import { Card } from './ui/card'
import CauseLongDescription from './CauseLongDescription'
import Loading from '@/app/loading'

const CauseHeader = ({ cause }: { cause: CauseProps }) => {
  return (
    <div className='space-y-2'>
      <h1 className='text-3xl font-bold'>{cause.name}</h1>
      <p className='text-muted-foreground'>{cause.short_description}</p>
      <Card className='p-3'>
        <img
          src={cause.cause_pic ? cause.cause_pic : '/no photo.jpg'}
          alt={cause.name}
          className='rounded-lg'
        />
        <div className='mt-2'>
          <Suspense fallback={<Loading />}>
            <CauseLongDescription content={cause.long_description || ''} />
          </Suspense>
        </div>
      </Card>
    </div>
  )
}

export default CauseHeader
