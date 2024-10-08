import { configureStore } from "@reduxjs/toolkit";
import ListReducer from './features/JobList/listSlice'



export const store = configureStore({
  reducer:{
    list:ListReducer
  }
})