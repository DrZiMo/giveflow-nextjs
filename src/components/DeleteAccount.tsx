import React from 'react'
import { Button } from './ui/button'

const DeleteAccount = () => {
  return (
    <div className='mt-10 w-full p-4 border border-destructive bg-destructive/5 rounded-md text-destructive'>
      <h1 className='font-semibold'>Delete Account</h1>
      <p>
        Permanently delete your account and all associated data. This action
        cannot be undone.
      </p>
      <Button variant={'destructive'} className='mt-3'>
        Delete Account
      </Button>
    </div>
  )
}

export default DeleteAccount
