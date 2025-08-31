import { ICategory } from './category'

export interface CauseGroupProps {
  causes: ICause[]
  number?: number
}
export interface IGetAllCausesResponse {
  ok: boolean
  causes: ICause[]
}

export interface IGetSingleCauseRes {
  ok: boolean
  cause: ICause
}

export interface IGetFeaturedCausesRes {
  ok: boolean
  causes: ICause[]
}

export enum CausesStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum UrgencyLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export interface ICause {
  id: string
  user_id: number
  name: string
  short_description: string
  long_description: string
  cause_pic: string
  cause_pic_public_id: string
  amount_needed: number
  current_amount: number
  status: CausesStatus
  is_deleted: boolean
  is_featured: boolean
  is_trending: boolean
  category_id: string
  urgency_level: UrgencyLevel
  is_expired: boolean
  expiration_date: string
  created_at: string
  updated_at: string
  _count: CauseCount
  category: ICategory
}

export interface CauseCount {
  like: number
}

/** If you need a minimal saved cause */
export interface SavedCauseProps {
  userid: number
  causeId: number
}

export interface CauseProps {
  id: string
  name: string
  short_description: string
  long_description?: string
  cause_pic: string
  amount_needed: number
  current_amount: number
  is_trending: boolean
  category: ICategory | string
}

export interface IGetNumberOfDonorsRes {
  ok: boolean
  donorsCount: number
}
