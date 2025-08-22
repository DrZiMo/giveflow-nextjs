import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa6'

const SocialButtons = () => {
  return (
    <div className='grid grid-cols-2 gap-5 mt-5'>
      <Button variant='outline'>
        <FcGoogle /> Google
      </Button>
      <Button variant='outline'>
        <FaFacebook /> Facebook
      </Button>
    </div>
  )
}

export default SocialButtons
