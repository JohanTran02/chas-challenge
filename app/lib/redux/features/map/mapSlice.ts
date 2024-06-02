import { Stampinfo } from '@/app/lib/definitions'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface mapState {
  markerInfo: Stampinfo | null;
}

const initialState: mapState = {
  markerInfo: null
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCoords: (state, action: PayloadAction<Stampinfo | null>) => {
      state.markerInfo = action.payload;  
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCoords } = mapSlice.actions; 
export default mapSlice.reducer;