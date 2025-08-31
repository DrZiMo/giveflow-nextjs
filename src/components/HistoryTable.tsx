'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Card } from './ui/card'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { useGetDonationsHistory } from '@/lib/hook/useUser'
import Loading from '@/app/loading'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const HistoryTable = () => {
  const { data: userHistory, isLoading } = useGetDonationsHistory()

  if (isLoading) return <Loading />

  return (
    <Card className='mt-10 py-3! px-3'>
      <Table className='rounded-md'>
        <TableHeader>
          <TableRow className='uppercase text-sm!'>
            <TableHead className='w-[100px]'>Date</TableHead>
            <TableHead>Cause</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className='text-right'>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='p-3'>
          {userHistory?.history.map((history) => (
            <TableRow key={history.id}>
              <TableCell className='text-muted-foreground'>
                {dayjs(history.donated_at).fromNow()}
              </TableCell>
              <TableCell className='font-medium'>
                <Link
                  href={`/causes/cause/${history.cause.id}`}
                  className='hover:text-primary transition'
                >
                  {history.cause.name}
                </Link>
              </TableCell>
              <TableCell className='font-medium'>${history.amount}</TableCell>
              <TableCell className='text-right'>
                <Badge variant={'success'}>Completed</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default HistoryTable
