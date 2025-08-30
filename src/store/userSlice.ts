import { UserProps } from '@/app/types/users.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  user: {} as UserProps,
  isUser: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser(state, action: PayloadAction<UserProps>) {
      state.user = action.payload
    },
    setIsUser(state, action: PayloadAction<boolean>) {
      state.isUser = action.payload
    },
  },
})

export const { setSelectedUser, setIsUser } = userSlice.actions
export default userSlice.reducer
