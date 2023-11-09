import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utills/appslice"
import moviesReducer from "../utills/moviesSlice"
import GptReducer from "../utills/GptsearchSlice"
import LangReducer from "../utills/langugageSlice"

const appstore=configureStore({
        reducer:{
            user:userReducer,
            movieslist:moviesReducer,
            Search:GptReducer,
            lang:LangReducer
},
});

export default appstore;