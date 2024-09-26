import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../Redux/authSlice';
import  dataSlice  from '../Redux/dbslice';
const rootReducer = combineReducers({
  auth: authReducer,
  data:  dataSlice
})
export const store = configureStore({
  reducer: rootReducer,
});