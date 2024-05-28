import { StampCategories } from '@/app/lib/definitions';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Stamp {
  stamps: StampCategories[] | null;
  clickedCategory: string; 
}

const initialState: Stamp = {
  stamps: null,
  clickedCategory: ''
}

export const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {
    setSpecificStampInfo: (state, action: PayloadAction<StampCategories>) => {
      const stamps = action.payload; 
      state.stamps = [stamps]
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.clickedCategory = action.payload; 
    }
  },
})

// Action creators are generated for each case reducer function
export default stampSlice.reducer;