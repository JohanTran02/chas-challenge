import { UserValues } from '@/app/lib/definitions';
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

type UserFetchInfo = {
  endpoint: string; 
  userInfo: UserValues; 
}

// export const userFetch = createAsyncThunk('user/userFetch', async(data: UserFetchInfo) => {
//   const response = await fetch('https://natureai.azurewebsites.net/registeraccount', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify({data: data.userInfo})
//   }); 
//   const json = await response.json();
//   return {json, user: data.userInfo};
// })

export const userSlice = createSlice({
  name: 'user', 
  initialState, 
  reducers: {
    onlineState: (state, action: PayloadAction<false | true>) => {
      state.isOnline = action.payload; 
    }
  },
  // extraReducers(builder) {
  //   builder.addCase(userFetch.pending, (state, action) => {
  //     // Add user to the state array
  //     console.log('Pending..')
  //   })

  //   builder.addCase(userFetch.fulfilled, (state, action) => {
  //     // Add user to the state array
  //       // state.isOnline = true;
  //       state.currentUser = action.payload.user; 
  //       console.log(action.payload.json, ' ', action.payload.user); 
  //   })

  //   builder.addCase(userFetch.rejected, (state, action) => {
  //     // Add user to the state array
  //     console.log('Failed')

  //   })
  // }
}); 

export default userSlice.reducer; 