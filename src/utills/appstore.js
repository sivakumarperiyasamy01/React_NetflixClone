import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utills/appslice"

const appstore=configureStore({
        reducer:{
            user:userReducer,
        }
})

export default appstore;