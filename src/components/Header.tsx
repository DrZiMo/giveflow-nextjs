import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import UserPart from './UserPart'

const Header = () => {
  return (
    <div className='flex justify-between md:gap-12 lg:gap-52 items-center w-[90%] mx-auto'>
      <Logo />
      <Navigation />
      <UserPart />
    </div>
  )
}

export default Header
