import { UserProps } from '@/app/types/users.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuthState {
  isLoggedIn: boolean
  user: UserProps | null
}

const initialState: IAuthState = {
  isLoggedIn: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<UserProps>) {
      state.isLoggedIn = true
      state.user = action.payload
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
