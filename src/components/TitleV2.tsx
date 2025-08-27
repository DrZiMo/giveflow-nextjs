import { ITitleV2 } from '@/app/types/title.types'

const TitleV2 = ({ text1, text2, subText }: ITitleV2) => {
  return (
    <div className='text-center md:text-left'>
      <h1 className='text-3xl md:text-4xl 2xl:text-5xl font-semibold text-primary'>
        {text1}
      </h1>
      <h1 className='text-3xl md:text-4xl 2xl:text-5xl text-neutral font-semibold'>
        {text2}
      </h1>
      <p className='text-sm md:text-lg 2xl:text-xl text-muted-foreground mt-4'>
        {subText}
      </p>
    </div>
  )
}

export default TitleV2
