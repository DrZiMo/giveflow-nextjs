'use client'

import Loading from '@/app/loading'
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
import { useGetDonationsHistory } from '@/lib/hook/useUser'
import { RootState } from '@/store'
import { EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const HistoryPage = () => {
  const { user, isUser } = useSelector((state: RootState) => state.selectedUser)

  const [search, setSearch] = useState('')
  const [time, setTime] = useState('all')
  const [status, setStatus] = useState('Completed') // default to Completed

  const { data: userHistory, isLoading } = useGetDonationsHistory(search, time)

  if (!isUser && !user.is_history_visible) {
    return (
      <p className='text-muted-foreground flex items-center gap-3 font-medium'>
        <EyeOff /> User history is not visible
      </p>
    )
  }

  const statusOptions = ['Completed', 'Pending', 'Refunded']
  const timeOptions = [
    { label: 'All Time', value: 'all' },
    { label: 'Last 24 Hours', value: '24h' },
    { label: 'Last Week', value: 'week' },
    { label: 'Last Month', value: 'month' },
    { label: 'Last Year', value: 'year' },
  ]

  // If user chooses a status other than Completed, show no donations
  const filteredHistory = status === 'Completed' ? userHistory?.history : []

  return (
    <div>
      <ProfileTitle
        title='Donation History'
        subtitle='Track all your donations and download receipts'
      />

      {/* Top Part */}
      <Card className='p-3 grid grid-cols-2 md:grid-cols-4 gap-3 mt-10'>
        <div className='col-span-2'>
          <SearchBar value={search} setValue={setSearch} />
        </div>
        <div className='col-span-1'>
          <Select value={status} onValueChange={setStatus}>
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
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Time' />
            </SelectTrigger>
            <SelectContent side='bottom'>
              {timeOptions.map((option) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Table / Empty State */}
      {isLoading ? (
        <Loading />
      ) : filteredHistory && filteredHistory.length > 0 ? (
        <HistoryTable
          userHistory={{ ok: true, history: filteredHistory }}
          isLoading={isLoading}
        />
      ) : (
        <p className='text-muted-foreground mt-10'>
          No donation history found.
        </p>
      )}
    </div>
  )
}

export default HistoryPage
