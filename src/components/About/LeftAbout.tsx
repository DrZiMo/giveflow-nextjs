import { ArrowRight, Check } from 'lucide-react'
import BadgeCustome from '../BadgeCustome'
import TitleV2 from '../TitleV2'
import { Button } from '../ui/button'
import Link from 'next/link'

type LeftAboutPartProps = {
  size?: number
}

const LeftAboutPart = ({ size = 3 }: LeftAboutPartProps) => {
  const aboutList = [
    'Easy Donations',
    'Secure Payments',
    'Fast Processing',
    'Global Reach',
    'Impact Tracking',
    'Community Engagement',
    'Transparent Reporting',
    'Innovative Solutions',
  ]

  return (
    <div className='flex flex-col gap-3'>
      <BadgeCustome text='About' />
      <TitleV2
        text1='Revolutionizing'
        text2='charitable giving'
        subText='GiveFlow empowers donors with cutting-edge technology to make informed decisions and create lasting positive change in communities worldwide.'
      />
      <div className='list-none flex flex-col gap-1 2xl:gap-3 text-md 2xl:text-lg text-neutral/90 mt-4'>
        {size < 4 ? (
          aboutList.slice(0, size).map((item) => (
            <li className='flex items-center gap-2' key={item}>
              <div className='p-2 text-primary'>
                <Check size={20} />
              </div>
              {item}
            </li>
          ))
        ) : (
          <div className='grid grid-cols-2'>
            {aboutList.slice(0, size).map((item) => (
              <li className='flex items-center gap-2' key={item}>
                <div className='p-2 text-primary'>
                  <Check size={20} />
                </div>
                {item}
              </li>
            ))}
          </div>
        )}
      </div>
      <Link href={'/about'}>
        <Button className='w-fit mt-4 rounded-full font-normal flex items-center px-6'>
          Discover Our Platform <ArrowRight size={20} />
        </Button>
      </Link>
    </div>
  )
}

export default LeftAboutPart
