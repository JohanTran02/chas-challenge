import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type User ={
  isOnline: null | false | true;
}

const initialState: User = {
  isOnline: null,
}

export const userSlice = createSlice({
  name: 'user', 
  initialState, 
  reducers: {
    onlineState: (state, action: PayloadAction<false | true>) => {
      state.isOnline = action.payload; 
    }
  }
}); 

export default userSlice.reducer; 