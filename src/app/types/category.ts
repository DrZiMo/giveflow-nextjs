export interface ICategory {
  id: string
  name: string
  created_at: string
  updated_at: string
}

export interface IGetAllCategory {
  id: string
  name: string
  created_at: string
  updated_at: string
  _count: {
    cause: number
  }
}

export interface IGetAllCategoryRes {
  ok: boolean
  categories: IGetAllCategory[]
}
