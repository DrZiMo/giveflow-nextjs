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
      <h1 className={`text-neutral font-bold ${sizeMap[size]} mb-2`}>
        {title}
      </h1>
      <div
        className={`w-[150px] mx-auto bg-primary h-[4px] rounded-full ${
          isLine ? '' : 'hidden'
        }`}
      ></div>
      <p
        className={`${
          size === 4 ? 'text-xl' : 'text-md'
        } text-almost-black w-1/2 mx-auto mt-4`}
      >
        {subTitle}
      </p>
    </div>
  )
}

export default Title
