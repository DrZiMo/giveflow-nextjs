import { HistoryProbs, HistoryStatus } from '../types/history'

export const historyData: HistoryProbs[] = [
  {
    id: 1,
    userId: 1,
    date: 'Jan 5, 2024',
    causeId: 2,
    amount: 250.0,
    status: HistoryStatus.PAID,
  },
  {
    id: 2,
    userId: 1,
    date: 'Dec 28, 2023',
    causeId: 1,
    amount: 250.0,
    status: HistoryStatus.PAID,
  },
  {
    id: 3,
    userId: 1,
    date: 'Jan 10, 2025',
    causeId: 5,
    amount: 450.4,
    status: HistoryStatus.FAILED,
  },
  {
    id: 4,
    userId: 1,
    date: 'Jan 5, 2025',
    causeId: 3,
    amount: 2,
    status: HistoryStatus.PENDING,
  },
]
