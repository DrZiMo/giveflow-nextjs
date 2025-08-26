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
import { useParams } from 'next/navigation'
import { historyData } from '@/app/data/history'
import Link from 'next/link'
import causes from '@/app/data/causes'
import { Badge } from './ui/badge'
import { HistoryStatus } from '@/app/types/history'
import { Download } from 'lucide-react'

const HistoryTable = () => {
  const { userId } = useParams<{ userId: string }>()
  const userHistory = historyData.filter(
    (item) => item.userId === Number(userId)
  )

  return (
    <Card className='mt-10 py-3! px-3'>
      <Table className='rounded-md'>
        <TableHeader>
          <TableRow className='uppercase text-sm!'>
            <TableHead className='w-[100px]'>Date</TableHead>
            <TableHead>Cause</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className='text-right'>Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='p-3'>
          {userHistory.map((history) => {
            const causeName =
              causes.find((c) => c.id === history.causeId)?.title ||
              'Unknown Cause'
            return (
              <TableRow key={history.id}>
                <TableCell>{history.date}</TableCell>
                <TableCell className='font-medium'>{causeName}</TableCell>
                <TableCell className='font-medium'>${history.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      history.status === HistoryStatus.PAID
                        ? 'success'
                        : history.status === HistoryStatus.FAILED
                        ? 'destructive'
                        : 'warning'
                    }
                  >
                    {history.status}
                  </Badge>
                </TableCell>
                <TableCell className='text-right'>
                  <Link
                    href={`/receipts/${history.id}`}
                    className='text-primary flex items-center justify-end gap-1 font-medium'
                  >
                    <Download size={16} /> Download
                  </Link>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}

export default HistoryTable
