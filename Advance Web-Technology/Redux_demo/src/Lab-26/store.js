import { configureStore } from "@reduxjs/toolkit";
import authReducer from './../Lab-26/slices/authSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});