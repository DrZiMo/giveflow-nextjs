'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Users } from 'lucide-react'
import { useGetTopDonors } from '@/lib/hook/useDonation'
import Donor from './Donor'
import Loading from '@/app/loading'

const NumberOfDonors = ({
  donors,
  selectedCauseId,
  isLoadingDonor,
}: {
  donors: number
  selectedCauseId: string
  isLoadingDonor: boolean
}) => {
  const { data: topDonors, isLoading } = useGetTopDonors(selectedCauseId)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className='flex items-center gap-1 cursor-pointer hover:text-primary transition'>
          <Users size={15} /> {isLoadingDonor ? '...' : `${donors} donors`}
        </span>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Top Donors</DialogTitle>
          <DialogDescription>
            View the top donors of this cause.
          </DialogDescription>
        </DialogHeader>
        {isLoading ? (
          <Loading />
        ) : topDonors?.donors.length ? (
          <ul className='space-y-4'>
            {topDonors.donors.map((donor, index) => (
              <Donor donor={donor} number={index + 1} key={donor.id} />
            ))}
          </ul>
        ) : (
          <p className='text-muted-foreground'>
            No donors found for this cause.
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default NumberOfDonors
