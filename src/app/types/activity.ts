export interface IGetUserActivityRes {
  ok: boolean
  activities: IActivityProp[]
  message?: string
}

export interface IActivityProp {
  id: string
  name: string
  user_id: number
  cause_id: string
  amount: string
  status: string
  created_at: string
  updated_at: string
}
