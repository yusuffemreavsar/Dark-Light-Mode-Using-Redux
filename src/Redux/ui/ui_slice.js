//Creating a Slice for Store
import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    nightMode:false
}
export const uiSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    disableNightMode:(state)=>{
        state.nightMode=false;
    },
    enableNightMode:(state)=>{
        state.nightMode=true;
    }
  },
})

export const {disableNightMode,enableNightMode } = uiSlice.actions

export default uiSlice.reducer