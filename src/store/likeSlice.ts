import { ICause } from '@/app/types/causes.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LikeCauses {
  causes: ICause[]
}

const initialState = {
  likedCauses: {} as LikeCauses,
}

export const likeSlice = createSlice({
  name: 'user like',
  initialState,
  reducers: {
    setLikedCauses(state, action: PayloadAction<ICause[]>) {
      state.likedCauses = { causes: action.payload }
    },
    clearLikeCauses(state) {
      state.likedCauses = { causes: [] }
    },
  },
})

export const { setLikedCauses, clearLikeCauses } = likeSlice.actions
export default likeSlice.reducer
