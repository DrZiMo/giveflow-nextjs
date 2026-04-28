'use client'

import ImageUploaderCause from '@/components/dashboard/ImageUploaderCause'
import NewCauseForm from '@/components/dashboard/NewCauseForm'
import ProfileTitle from '@/components/ProfileTitle'
import React, { useState } from 'react'

const NewCausePage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  return (
    <div>
      <ProfileTitle
        title='Create New Cause'
        subtitle='Fill the inputs and create new cause.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div>
          <ImageUploaderCause onFileSelect={setSelectedFile} />
        </div>
        <div>
          <NewCauseForm causePic={selectedFile} />
        </div>
      </div>
    </div>
  )
}

export default NewCausePage
