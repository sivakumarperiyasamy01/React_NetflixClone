import { createSlice } from "@reduxjs/toolkit";

const GptsearchSlice=createSlice({
    name:"Search",
    initialState:{
      ShowGptsearch:false
    },
    reducers:{
      ToggleGptSearchview:(state)=>{
        state.ShowGptsearch=!state.ShowGptsearch
      },
    },

});


export const{ToggleGptSearchview}=GptsearchSlice.actions
export default GptsearchSlice.reducer;