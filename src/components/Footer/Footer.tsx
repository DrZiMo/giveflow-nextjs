'use client'

import { Heart } from 'lucide-react'
import FooterLinks from './FooterLinks'
import FooterMain from './FooterMain'
import FooterUpdated from './FooterUpdate'

const Footer = () => {
  const exploreLinks = [
    { label: 'Causes', href: '/causes' },
    { label: 'How it Works', href: '/about' },
  ]

  const resourceLinks = [
    { label: 'Help Center', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ]

  return (
    <div className='bg-dark-primary mt-20 text-gray-400 w-full'>
      <div className='w-[90%] 2xl:w-[1300px] mx-auto py-16'>
        <div className='grid grid-cols-4 gap-10'>
          <FooterMain />
          <FooterLinks title='Explore' links={exploreLinks} />
          <FooterLinks title='Resource' links={resourceLinks} />
          <FooterUpdated />
        </div>
        <div className='divider w-full h-[1px] bg-faded mt-16'></div>
        <div className='footer-bottom text-sm flex justify-between mt-5'>
          <h5>© 2025 GiveFlow. All rights reserved.</h5>
          <h5 className='flex gap-1 items-center'>
            Made with <Heart size={16} className='text-primary' /> for a better
            world
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
