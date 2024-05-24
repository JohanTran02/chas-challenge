import { UserValues, cookiesForUser } from '@/app/lib/definitions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type User ={
  currentUser: null | false | UserValues; 
}

const initialState: User = {
  currentUser: null, 
}

export const userSlice = createSlice({
  name: 'user', 
  initialState, 
  reducers: {
    onlineState: (state, action: PayloadAction<null | false | UserValues>) => {
      state.currentUser = action.payload; 
    }, 
  },

}); 

export default userSlice.reducer; 