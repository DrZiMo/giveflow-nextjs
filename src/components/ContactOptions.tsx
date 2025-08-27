'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Card } from './ui/card'

const ContactOptions = () => {
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
        <Card
          className='flex flex-col gap-2 items-center cursor-pointer p-5 rounded-md transition bg-card'
          key={index}
        >
          <div className='icon bg-primary/10 p-3 rounded-full text-primary'>
            <card.icon size={24} />
          </div>
          <div>
            <h1 className='text-lg font-semibold'>{card.title}</h1>
            <p className='text-muted-foreground'>{card.desc}</p>
          </div>
          <h1 className='text-primary text-lg font-semibold'>{card.value}</h1>
        </Card>
      ))}
    </div>
  )
}

export default ContactOptions
