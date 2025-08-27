import Image from 'next/image'
import Title from '../Title'
import JoinOurTeam from './JoinOurTeam'

// Import your images directly
import ceoImage from '/public/CEO picture.jpg'
import elonImage from '/public/Elon musk.webp'
import markImage from '/public/Murk zuckerberg.webp'
import Link from 'next/dist/client/link'

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Zuhayb Faysal',
      title: 'Founder & CEO',
      image: ceoImage,
      ImagePosition: { top: '0%', left: '0%' },
    },
    {
      name: 'Elon Musk',
      title: 'CTO',
      image: elonImage,
      ImagePosition: { top: '0%', left: '30%' },
    },
    {
      name: 'Mark Zuckerberg',
      title: 'Lead Developer',
      image: markImage,
      ImagePosition: { top: '30%', left: '30%' },
    },
  ]

  return (
    <div className='mt-18 w-[90%] 2xl:w-[1300px] mx-auto'>
      <Title
        title='Meet Our Team'
        subTitle='Passionate innovators dedicated to transforming charitable giving through technology'
        size={2}
        isLine={false}
      />

      <div className='members grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        {teamMembers.map((teamMember, index) => (
          <div
            className='membe flex flex-col items-center gap-3 p-6'
            key={index}
          >
            <Image
              placeholder='blur' // this enables blur
              src={teamMember.image}
              alt={teamMember.name}
              className='object-cover w-[160px] h-[160px] rounded-full border-5 border-base-100 cursor-pointer transform hover:scale-105 transition'
              style={{
                objectPosition: `${teamMember.ImagePosition.left} ${teamMember.ImagePosition.top}`,
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              }}
              width={160}
              height={160}
            />
            <div className='text-center'>
              <h1 className='text-xl font-semibold'>{teamMember.name}</h1>
              <p className='text-md text-muted-foreground'>
                {teamMember.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link href={'/contact'}>
        <JoinOurTeam />
      </Link>
    </div>
  )
}

export default OurTeam
