import { Building } from 'lucide-react'

const JoinOurTeam = () => {
  return (
    <div
      className='mt-18 bg-second p-10 rounded-lg'
      style={{
        boxShadow: 'rgb(204, 219, 232) 0px 1px 6px 0px inset',
      }}
    >
      <div className='flex gap-6 w-[60%] mx-auto'>
        <div className='text-primary'>
          <Building size={35} />
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-semibold'>Join Our Team</h1>
          <p className='text-almost-black text-md'>
            We&apos;re always looking for talented individuals who are
            passionate about making a difference. Check out our open positions
            and see if there&apos;s a fit for you.
          </p>
          <button className='border border-primary bg-card w-fit py-2 px-4 text-primary rounded-full cursor-pointer hover:bg-second transition'>
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinOurTeam
