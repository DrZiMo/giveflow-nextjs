'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
  onFileSelect: (file: File | null) => void
}

const ImageUploaderCause: React.FC<Props> = ({ onFileSelect }) => {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
    onFileSelect(file)
  }

  return (
    <div className='space-y-3 mt-8'>
      <Label htmlFor='causePic'>Upload Cause Image</Label>
      <Input
        id='causePic'
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />
      {preview && (
        <img
          src={preview}
          alt='Preview'
          className='w-full h-48 object-cover rounded-md mt-3'
        />
      )}
    </div>
  )
}

export default ImageUploaderCause
