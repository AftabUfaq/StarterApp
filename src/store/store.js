import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/api/apiSlice";
import loginReducer from '../services/login/loginSlice'
import logger from 'redux-logger'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        loginReducer:loginReducer
    },
    middleware: 
        getDefaultMiddleware =>
            getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})