import { ITitleV1 } from '@/app/types/title.types'

const sizeMap: Record<number, string> = {
  2: 'text-2xl',
  3: 'text-3xl',
  4: 'text-4xl',
  5: 'text-5xl',
  6: 'text-6xl',
}

const Title = ({ title, subTitle, isLine = true, size = 4 }: ITitleV1) => {
  return (
    <div className='mt-5 text-center'>
      <h1
        className={`text-neutral text-center font-bold md:${sizeMap[size]} ${
          sizeMap[size - 1]
        } mb-2`}
      >
        {title}
      </h1>
      <div
        className={`w-[100px] md:w-[150px] mx-auto bg-primary h-[2px] md:h-[4px] rounded-full ${
          isLine ? '' : 'hidden'
        }`}
      ></div>
      <p
        className={`md:${
          size === 4 ? 'text-lg md:text-xl' : 'text-sm md:text-md'
        } text-muted-foreground w-full md:w-1/2 text-center md:text-left mx-auto mt-4`}
      >
        {subTitle}
      </p>
    </div>
  )
}

export default Title
