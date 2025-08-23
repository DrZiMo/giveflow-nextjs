'use client'

import Link from 'next/link'

export interface FooterLinksProp {
  title: string
  links: { label: string; href: string }[]
}

const FooterLinks = ({ title, links }: FooterLinksProp) => {
  return (
    <div className='w-fit'>
      <h2 className='text-white font-semibold mb-3'>{title.toUpperCase()}</h2>
      <ul className='flex flex-col gap-2 list-none'>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className='hover:text-primary transition'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks
