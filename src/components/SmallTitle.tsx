import React from 'react'

const SmallTitle = ({ text }: { text: string }) => {
  return (
    <h1 className='text-md font-semibold text-muted-foreground mb-2'>{text}</h1>
  )
}

export default SmallTitle
