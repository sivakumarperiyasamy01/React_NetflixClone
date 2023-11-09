import { createSlice } from "@reduxjs/toolkit";

const Lang=createSlice({
    name:"lang",
    initialState:{
      langugage:"English"
    },
    reducers:{
      changelanguage:(state,action)=>{
        state.langugage=action.payload
      },
    },
  })


  export const{changelanguage}=Lang.actions;
  export default Lang.reducer;