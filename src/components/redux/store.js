import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './contacts-slice';
import { filterSlice } from './filter-slice';
import { authReducer } from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookSlice.reducer,
    filter: filterSlice.reducer,
    auth: authReducer,
  },
});
