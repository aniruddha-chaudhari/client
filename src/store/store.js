import { configureStore } from '@reduxjs/toolkit';
import userdetail from './slices/userdetail';

export const store = configureStore({
    reducer: {
       app: userdetail,
    },  
});