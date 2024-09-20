import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: { // Use "reducer" key here
    auth: authReducer, // Add auth reducer
  },
});

export default store;
