'use client'

import Link from 'next/link'

export interface FooterLinksProp {
  title: string
  links: string[]
}

const FooterLinks = ({ title, links }: FooterLinksProp) => {
  return (
    <div>
      <h2 className='text-base-100 font-semibold mb-3'>
        {title.toUpperCase()}
      </h2>
      <div className='flex flex-col gap-2'>
        {links.map((link) => (
          <Link
            key={link}
            href={link}
            className='hover:text-primary transition list-none'
          >
            <li>{link}</li>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterLinks
