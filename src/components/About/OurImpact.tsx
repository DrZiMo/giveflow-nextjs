import { Card } from '../ui/card'

const OurImpact = () => {
  const boxes = [
    { title: 'Funds Rised', number: '$12M+' },
    { title: 'Causes Supported', number: '500+' },
    { title: 'Donors', number: '120K' },
    { title: 'Countries Reached', number: '50+' },
  ]
  return (
    <div className='mt-28'>
      <div className='flex flex-col gap-2 items-center text-center'>
        <h1 className='text-2xl font-semibold'>Our Impact in Numbers</h1>
        <p className='w-[60%] text-center text-lg text-muted-foreground'>
          Through the power of our platform and community, we&apos;ve achieved
          remarkable results
        </p>
      </div>

      <div className='boxes grid grid-cols-4 gap-8 mt-10 text-center'>
        {boxes.map((box, index) => (
          <Card key={index} className='py-8 gap-1! rounded-lg bg-card'>
            <h1 className='text-primary text-4xl font-semibold mb-2'>
              {box.number}
            </h1>
            <p className='text-muted-foreground'>{box.title}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default OurImpact
