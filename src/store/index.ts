import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/store/authSlice'
import userSlice from '@/store/userSlice'
import likeSlice from './likeSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    selectedUser: userSlice,
    likedCauses: likeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
