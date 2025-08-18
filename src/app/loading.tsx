import React from 'react'
import { GridLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full h-[50vh] flex justify-center items-center'>
      <GridLoader color='#3b82f6' size={10} />
    </div>
  )
}

export default Loading
