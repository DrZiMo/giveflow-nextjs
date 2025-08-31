import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from './ui/button'
import { DialogClose } from './ui/dialog'
import { useChangeProfilePicture } from '@/lib/hook/useUser'
import { useQueryClient } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { setUser } from '@/store/authSlice'

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const queryClient = useQueryClient()
  const authUser = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch<AppDispatch>()

  const changeProfilePicture = useChangeProfilePicture()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
  })

  const handleUpload = () => {
    if (!file) return
    const formData = new FormData()
    formData.append('profilePic', file)
    changeProfilePicture.mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['whoami'] })
        dispatch(setUser(authUser!))
        setFile(null)
        setPreview(null)
      },
    })
  }

  return (
    <div className='flex flex-col items-center'>
      <div
        {...getRootProps()}
        className='w-60 h-40 border-2 border-dashed border-primary text-center rounded-lg flex items-center justify-center cursor-pointer'
      >
        <input {...getInputProps()} />
        {preview ? (
          <img
            src={preview}
            alt='preview'
            className='w-full h-full object-cover rounded-lg'
          />
        ) : (
          <p className='text-primary'>Click or drag image here</p>
        )}
      </div>

      <div className='buttons mx-auto flex gap-4 mt-6'>
        <DialogClose>
          <Button variant={'outline'}>Cancel</Button>
        </DialogClose>
        <Button
          onClick={handleUpload}
          disabled={changeProfilePicture.isPending}
        >
          {changeProfilePicture.isPending ? 'Uploading...' : 'Upload'}
        </Button>
      </div>

      {changeProfilePicture.isError && (
        <p className='text-red-500 mt-2'>Upload failed. Try again.</p>
      )}
      {changeProfilePicture.isSuccess && (
        <p className='text-green-500 mt-2'>Profile picture updated!</p>
      )}
    </div>
  )
}
