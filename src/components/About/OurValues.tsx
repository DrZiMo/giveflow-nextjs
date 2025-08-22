import { Globe, Heart, ShieldCheck, Sparkle } from 'lucide-react'
import OurImpact from './OurImpact'
import Title from '../Title'
import OurApproach from './OurApprouch'

const OurValue = () => {
  const cards = [
    {
      icon: Heart,
      title: 'Compassion',
      desc: 'We lead with empathy and understanding, putting people at the center of everything we do.',
    },
    {
      icon: ShieldCheck,
      title: 'Trust',
      desc: 'Building trust through transparency, accountability and responsible stewardship of funds.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      desc: 'Creating positive change that spans geographical boundaries and serves communities worldwide.',
    },
    {
      icon: Sparkle,
      title: 'Innovation',
      desc: 'Pioneering new approaches to giving that maximize impact and inspire others to take action.',
    },
  ]

  return (
    <div className='mt-18 w-[90%] 2xl:w-[1300px] mx-auto'>
      <Title
        title='Our Core Values'
        subTitle='These principles guide everything we do as we work to transform charitable giving worldwide'
        size={2}
        isLine={false}
      />

      <div className='cards grid grid-cols-4 mt-10 gap-6 text-center'>
        {cards.map((card, index) => (
          <div
            className='flex flex-col gap-2 items-center cursor-pointer p-5 rounded-md transition bg-card'
            key={index}
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            }}
          >
            <div className='icon bg-second p-3 rounded-full text-primary'>
              <card.icon size={24} />
            </div>
            <h1 className='text-lg font-semibold'>{card.title}</h1>
            <p className='text-muted-foreground'>{card.desc}</p>
          </div>
        ))}
      </div>
      <OurApproach />
      <OurImpact />
    </div>
  )
}

export default OurValue
