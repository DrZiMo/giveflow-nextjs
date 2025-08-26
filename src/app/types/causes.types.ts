export interface CauseProps {
  id: number
  title: string
  description: string
  amountNeeded: number
  currentAmount: number
  category: string
  trending: boolean
  imageUrl: string
  longDescription?: string | JSON
  donors: number
  likes: number
}

export interface CauseGroupProps {
  causes: CauseProps[]
  number?: number
}

export interface ICausesResponse {
  ok: boolean
  causes: Cause[]
}

export interface Cause {
  id: string
  giving_page_id: string
  name: string
  short_description: string
  long_description: string
  cause_pic: string
  cause_pic_public_id: string
  amount_needed: number
  current_amount: number
  status: string
  is_deleted: boolean
  is_featured: boolean
  is_trending: boolean
  category_id: string
  urgency_level: string
  is_expired: boolean
  expiration_date: Date
  created_at: Date
  updated_at: Date
  userId: null
  _count: Count
}

export interface Count {
  like: number
  donation: number
}

export interface SavedCauseProps {
  userid: number
  causeId: number
}
