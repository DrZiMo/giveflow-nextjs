import { Building } from 'lucide-react'
import { Card } from '../ui/card'

const JoinOurTeam = () => {
  return (
    <Card className='mt-18 bg-primary/10 p-10 rounded-lg'>
      <div className='flex flex-col md:flex-row gap-6 w-[90%] md:w-[60%] mx-auto'>
        <div className='text-primary'>
          <Building size={35} />
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-semibold'>Join Our Team</h1>
          <p className='text-muted-foreground text-md'>
            We&apos;re always looking for talented individuals who are
            passionate about making a difference. Check out our open positions
            and see if there&apos;s a fit for you.
          </p>
          <button className='border border-primary bg-card w-fit py-2 px-4 text-primary rounded-full cursor-pointer hover:bg-primary/5 transition'>
            View Open Positions
          </button>
        </div>
      </div>
    </Card>
  )
}

export default JoinOurTeam
