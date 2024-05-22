import { UserValues, cookiesForUser } from '@/app/lib/definitions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type User ={
  isOnline: null | false | true;
  currentUser: null | UserValues; 
  userCookie: undefined | cookiesForUser; 
}

const initialState: User = {
  isOnline: null,
  currentUser: null, 
  userCookie: undefined,
}

export const userSlice = createSlice({
  name: 'user', 
  initialState, 
  reducers: {
    onlineState: (state, action: PayloadAction<false | true>) => {
      state.isOnline = action.payload; 
    }, 

    getUserCookie: (state, action: PayloadAction<undefined | cookiesForUser>) => {
      state.userCookie = action.payload; 
      console.log(action.payload)
    }
  },

}); 

export default userSlice.reducer; 