import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import UserPart from './UserPart'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <Logo />
      <Navigation />
      <UserPart />
    </div>
  )
}

export default Header
