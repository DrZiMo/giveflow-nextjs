import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

const UserPart = () => {
  return (
    <div>
      <ModeToggle />

      {/* if there is no logged in user */}
      <div className='buttons'>
        <Button variant={'outline'}>Login</Button>
        <Button>Signup</Button>
      </div>
    </div>
  )
}

export default UserPart
