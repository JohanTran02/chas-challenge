import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './features/map/mapSlice'
import stampReducer from './features/achievements/stampsSlice'

export const store = configureStore({
  reducer: {
    map: mapReducer,
    stamp: stampReducer, 
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch