import { configureStore } from '@reduxjs/toolkit';
import dbslice from './dbslice';  

export const store = configureStore({
  reducer: {
    db: dbslice, 
  },
});

export default store;
