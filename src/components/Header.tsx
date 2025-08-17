import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <Logo />
      <Navigation />
      {/* <Rightbar /> */}
    </div>
  )
}

export default Header
