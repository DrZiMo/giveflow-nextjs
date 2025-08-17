import LeftAboutPart from './LeftAbout'
import RightAboutPart from './RightAbout'

interface IHomeAbout {
  size?: number
}

const HomeAbout = ({ size = 3 }: IHomeAbout) => {
  return (
    <div className='mt-26 flex justify-between w-[90%] 2xl:w-[1300px] mx-auto'>
      <LeftAboutPart size={size} />
      <RightAboutPart />
    </div>
  )
}

export default HomeAbout
