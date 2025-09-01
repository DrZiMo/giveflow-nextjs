import { ISavedCause } from '@/app/types/saves'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  savedCauses: [] as ISavedCause[],
}

export const causeSlice = createSlice({
  name: 'cause slice',
  initialState,
  reducers: {
    setSavedCauses(state, action: PayloadAction<ISavedCause[]>) {
      state.savedCauses = action.payload
    },
  },
})

export const { setSavedCauses } = causeSlice.actions
export default causeSlice.reducer
