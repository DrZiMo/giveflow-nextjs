'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const ContactOptions = () => {
  const { theme } = useTheme()
  const cards = [
    {
      icon: Mail,
      title: 'Email Us',
      desc: 'Send us an email anytime',
      value: 'hello@giveflow.org',
    },
    {
      icon: Phone,
      title: 'Call Us',
      desc: 'Mon-Fri from 8am to 5pm',
      value: '+252 63 4541983',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      desc: 'Come say hello at our office',
      value: 'Deero mall, 3rd Floor',
    },
    {
      icon: Clock,
      title: 'Response Time',
      desc: 'We typically respond within',
      value: '24 hours',
    },
  ]
  return (
    <div className='cards grid grid-cols-4 mt-12 gap-6 text-center'>
      {cards.map((card, index) => (
        <div
          className='flex flex-col gap-2 items-center cursor-pointer p-5 rounded-md transition bg-card'
          key={index}
          style={{
            boxShadow: `${
              theme === 'light'
                ? 'rgba(0, 0, 0, 0.16)'
                : 'rgba(255, 255, 255, 0.16)'
            } 0px 1px 4px`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              theme === 'light'
                ? 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
                : 'rgba(255, 255, 255, 0.2) 0px 13px 27px -5px, rgba(255, 255, 255, 0.1) 0px 8px 16px -8px'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              theme === 'light'
                ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                : 'rgba(255, 255, 255, 0.1) 0px 2px 8px 0px'
          }}
        >
          <div className='icon bg-second p-3 rounded-full text-primary'>
            <card.icon size={24} />
          </div>
          <div>
            <h1 className='text-lg font-semibold'>{card.title}</h1>
            <p className='text-almost-black'>{card.desc}</p>
          </div>
          <h1 className='text-primary text-lg font-semibold'>{card.value}</h1>
        </div>
      ))}
    </div>
  )
}

export default ContactOptions
