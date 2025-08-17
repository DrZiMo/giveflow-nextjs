import React from 'react'
import { GridLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <GridLoader color='#3b82f6' size={10} />
    </div>
  )
}

export default loading
