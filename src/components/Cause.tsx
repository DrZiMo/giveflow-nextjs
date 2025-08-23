import { CauseProps } from '@/app/types/causes.types'
import {
  Ambulance,
  Apple,
  GraduationCap,
  HandHeart,
  Heart,
  Leaf,
  LeafyGreen,
  Palette,
  PawPrint,
  Scale,
  Stethoscope,
  TrendingUp,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import { Progress } from './ui/progress'
import { Button } from './ui/button'
import Link from 'next/link'
import shortenText from '@/lib/shortenText'
import SaveLaterButton from './SaveLaterButton'

const Cause = ({
  id,
  title,
  description,
  amountNeeded,
  currentAmount,
  category,
  trending,
  imageUrl,
}: CauseProps) => {
  const percentage = (currentAmount / amountNeeded) * 100

  const categoryIcon: { [key: string]: React.ElementType } = {
    Environment: LeafyGreen,
    Education: GraduationCap,
    Hunger: Apple,
    Health: Stethoscope,
    Animals: PawPrint,
    Climate: Leaf,
    'Social Justice': Scale,
    'Disaster Relief': Ambulance,
    'Youth Development': Users,
    'Arts and Culture': Palette,
  }

  const Icon = categoryIcon[category]

  return (
    <div className='bg-white h-fit rounded-sm shadow hover:shadow-lg transition cursor-pointer'>
      {/* Header Section */}
      <div className='relative h-[150px] w-full rounded-t-sm overflow-hidden'>
        <img
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-0 left-0 w-full h-full flex justify-between px-3 py-2 z-10'>
          <span className='bg-background px-3 py-1 shadow rounded-full text-[0.7rem] 2xl:text-sm h-fit flex items-center gap-2'>
            <Icon size={15}></Icon>
            {category}
          </span>
          {trending && (
            <span className='bg-primary text-background px-3 py-1 rounded-full text-[0.7rem] 2xl:text-sm h-fit flex gap-2 items-center'>
              <TrendingUp size={15} /> Trending
            </span>
          )}
        </div>
      </div>
      {/* Content Section */}
      <div className='p-4'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-gray-500 text-sm'>{shortenText(description)}</p>

        {/* Progress Section */}
        <div className='mt-3'>
          <div className='flex justify-between text-sm'>
            <span>${currentAmount} raised</span>
            <span className='text-gray-500'>${amountNeeded} goal</span>
          </div>
          <Progress value={percentage} className='mt-2' />
        </div>
        <div className='flex items-center gap-2 mt-4'>
          <Link href={`/causes/cause/${id}`} className='flex-1'>
            {' '}
            {/* FIX This later */}
            <Button className='w-full'>
              <HandHeart size={24} /> Donate
            </Button>
          </Link>
          <SaveLaterButton />
        </div>
      </div>
    </div>
  )
}

export default Cause
