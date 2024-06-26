import { StampCategories } from '@/app/lib/definitions';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Stamp {
  stamps: StampCategories[] | null;
  clickedCategory: string; 
  collectedStamps: string[];
  collectedStampsProcentage: number; 
  collectedStampsWithCoords: {name: string; coordinates: string[]}[]
}

const initialState: Stamp = {
  stamps: null,
  clickedCategory: '',
  collectedStamps: [],
  collectedStampsWithCoords: [],
  collectedStampsProcentage: 0,
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
    },

    setCollectStamps: (state, action: PayloadAction<{coordinates: string[]; name: string}[]>) => {
      const payload = action.payload; 
      state.collectedStampsWithCoords = action.payload; 

      const filterdList: string[] = payload.map((obj) => obj.name); 
      state.collectedStamps = filterdList.filter((name, index) => filterdList.indexOf(name) === index); 
      state.collectedStampsProcentage = parseFloat(((state.collectedStamps.length / 6) * 100).toFixed(2));
      
      // state.collectedStamps = action.payload;
    }, 

    addToCollectedStamp: (state, action: PayloadAction<string>) => {
      state.collectedStamps.push(action.payload); 
    }
  },
})

// Action creators are generated for each case reducer function
export default stampSlice.reducer;