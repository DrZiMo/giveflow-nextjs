import { CauseProps } from '@/app/types/causes.types'
import React from 'react'
import { Card } from './ui/card'
import CauseLongDescription from './CauseLongDescription'

const CauseHeader = ({ cause }: { cause: CauseProps }) => {
  return (
    <div className='space-y-2'>
      <h1 className='text-3xl font-bold'>{cause.title}</h1>
      <p className='text-muted-foreground'>{cause.description}</p>
      <Card className='p-3'>
        <img src={cause.imageUrl} alt={cause.title} className='rounded-lg' />
        <div className='mt-2'>
          <CauseLongDescription content={cause.longDescription || ''} />
        </div>
      </Card>
    </div>
  )
}

export default CauseHeader
