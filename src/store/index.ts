import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/store/authSlice'
import userSlice from '@/store/userSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    selectedUser: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
