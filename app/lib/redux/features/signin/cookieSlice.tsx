import { CookiesForUser } from '@/app/lib/definitions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type User = {
    cookie: string | undefined;
}

const initialState: User = {
    cookie: undefined,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onlineState: (state, action: PayloadAction<string | undefined>) => {
            state.cookie = action.payload;
        },
    },

});

export default userSlice.reducer; 