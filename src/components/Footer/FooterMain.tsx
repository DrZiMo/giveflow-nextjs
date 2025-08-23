'use client'

import Link from 'next/link'
import FooterLogo from './FooterLogo'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const FooterMain = () => {
  const iconSize = 20
  return (
    <div className='flex flex-col gap-6'>
      <FooterLogo />
      <p>
        A modern platform for effortless and impactful giving. Supporting causes
        that matter worldwide.
      </p>
      <div className='icons flex gap-4'>
        {/* TODO: add the links */}
        <Link
          href={''}
          target='_blank'
          className='hover:text-primary transition'
        >
          <Twitter size={iconSize} />
        </Link>
        <Link
          href={''}
          target='_blank'
          className='hover:text-primary transition'
        >
          <Facebook size={iconSize} />
        </Link>
        <Link
          href={''}
          target='_blank'
          className='hover:text-primary transition'
        >
          <Instagram size={iconSize} />
        </Link>
        <Link
          href={''}
          target='_blank'
          className='hover:text-primary transition'
        >
          <Linkedin size={iconSize} />
        </Link>
      </div>
    </div>
  )
}

export default FooterMain
