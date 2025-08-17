import { ITitleV2 } from '@/app/types/title.types'

const TitleV2 = ({ text1, text2, subText }: ITitleV2) => {
  return (
    <div>
      <h1 className='text-4xl 2xl:text-5xl font-semibold text-primary'>
        {text1}
      </h1>
      <h1 className='text-4xl 2xl:text-5xl text-neutral font-semibold'>
        {text2}
      </h1>
      <p className='text-lg 2xl:text-xl text-neutral/60 mt-4'>{subText}</p>
    </div>
  )
}

export default TitleV2
