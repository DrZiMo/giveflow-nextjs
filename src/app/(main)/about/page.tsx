'use client'

import HomeAbout from '@/components/About/HomeAbout'
import OurTeam from '@/components/About/OurTeam'
import OurValue from '@/components/About/OurValues'
import BadgeCustome from '@/components/BadgeCustome'
import Title from '@/components/Title'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useState } from 'react'

const About = () => {
  const tabs = ['Our Mission', 'Our Values', 'Our Team']
  const [activeTab, setActiveTab] = useState(0)
  const tabsContent = [
    <HomeAbout size={8} key={0} />,
    <OurValue key={1} />,
    <OurTeam key={2} />,
  ]

  return (
    <div className='about'>
      <div className='w-fit mx-auto mt-6'>
        <BadgeCustome>
          <Heart size={18} /> About GiveFlow
        </BadgeCustome>
      </div>

      <Title
        title='Transforming the Way the World Gives'
        subTitle="At GiveFlow, we're building a future where giving is effortless, transparent, and impactful."
      />

      <div className='tabs-container w-full mt-8 mb-4'>
        <div className='tabs bg-primary/10 py-1 px-2 rounded-full w-fit mx-auto flex items-center gap-4'>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`${
                activeTab === index
                  ? 'bg-white dark:bg-primary dark:text-white'
                  : ''
              } px-3 py-1 rounded-full hover:text-muted-foreground text-sm cursor-pointer transition`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {tabsContent.map((cont, index) => (
        <AnimatePresence mode='wait' key={index}>
          {activeTab === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {cont}
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  )
}

export default About
