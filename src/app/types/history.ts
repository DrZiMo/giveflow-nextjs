export interface HistoryProbs {
  id: number
  userId: number
  date: string
  causeId: number
  amount: number
  status: HistoryStatus
}

export enum HistoryStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  FAILED = 'Failed',
}
