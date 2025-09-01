import { ICause } from '@/app/types/causes.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  likedCauses: {} as ICause[],
}

export const likeSlice = createSlice({
  name: 'user like',
  initialState,
  reducers: {
    setLikedCauses(state, action: PayloadAction<ICause[]>) {
      state.likedCauses = action.payload
    },
    clearLikeCauses(state) {
      state.likedCauses = []
    },
  },
})

export const { setLikedCauses, clearLikeCauses } = likeSlice.actions
export default likeSlice.reducer
