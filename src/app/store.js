import { configureStore } from '@reduxjs/toolkit';
import gymReducer from './features/gymSlice';
export const store = configureStore({
    reducer: {
        gyms: gymReducer,
    },
});
