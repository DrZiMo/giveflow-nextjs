import HistoryTable from '@/components/HistoryTable'
import ProfileTitle from '@/components/ProfileTitle'
import SearchBar from '@/components/SearchBar'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const HistoryPage = () => {
  const statusOptions = ['All Status', 'Compeleted', 'Pending', 'Refunded']
  const timeOptions = [
    'All Time',
    'Last 24 Hours',
    'Last Week',
    'Last Month',
    'Last Year',
  ]

  return (
    <div>
      <ProfileTitle
        title='Donation History'
        subtitle='Track all your donations and download receipts'
      />

      {/* Top Part */}
      <Card className='p-3 grid grid-cols-4 gap-3 mt-10'>
        <div className='col-span-2'>
          <SearchBar />
        </div>
        <div className='col-span-1'>
          <Select defaultValue='All Status'>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>
            <SelectContent side='bottom'>
              {statusOptions.map((option) => (
                <SelectItem value={option} key={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='col-span-1'>
          <Select defaultValue='All Time'>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Time' />
            </SelectTrigger>
            <SelectContent side='bottom'>
              {timeOptions.map((option) => (
                <SelectItem value={option} key={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Table of the data */}
      <HistoryTable />
    </div>
  )
}

export default HistoryPage
