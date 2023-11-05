import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utills/appslice"
import moviesReducer from "../utills/moviesSlice"

const appstore=configureStore({
        reducer:{
            user:userReducer,
            movieslist:moviesReducer
            
},
});

export default appstore;