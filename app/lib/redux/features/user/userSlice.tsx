import { UserValues, cookiesForUser } from '@/app/lib/definitions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type User ={
  isOnline: null | false | true;
  currentUser: null | UserValues; 
}

const initialState: User = {
  isOnline: null,
  currentUser: null, 
}

export const userSlice = createSlice({
  name: 'user', 
  initialState, 
  reducers: {
    onlineState: (state, action: PayloadAction<false | true>) => {
      state.isOnline = action.payload; 
    }, 
  },

}); 

export default userSlice.reducer; 