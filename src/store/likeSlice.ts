import { ICause } from '@/app/types/causes.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LikeCauseItem {
  cause: ICause
}

interface LikeCausesState {
  causes: LikeCauseItem[]
}

const initialState: LikeCausesState = {
  causes: [],
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLikedCauses(state, action: PayloadAction<LikeCauseItem[]>) {
      state.causes = action.payload
    },
    addLikedCause(state, action: PayloadAction<LikeCauseItem>) {
      state.causes.push(action.payload)
    },
    clearLikeCauses(state) {
      state.causes = []
    },
  },
})

export const { setLikedCauses, addLikedCause, clearLikeCauses } =
  likeSlice.actions
export default likeSlice.reducer
