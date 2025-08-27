import LeftAboutPart from './LeftAbout'
import RightAboutPart from './RightAbout'

interface IHomeAbout {
  size?: number
}

const HomeAbout = ({ size = 3 }: IHomeAbout) => {
  return (
    <div className='mt-26 flex flex-col md:flex-row justify-center md:justify-between gap-10 md:gap-0 w-[90%] 2xl:w-[1300px] mx-auto'>
      <LeftAboutPart size={size} />
      <RightAboutPart />
    </div>
  )
}

export default HomeAbout
