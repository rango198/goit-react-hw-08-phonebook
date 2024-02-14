import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './contacts-slice';
import { filterSlice } from './filter-slice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './Auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const reduser = {
  phoneBook: phoneBookSlice.reducer,
  filter: filterSlice.reducer,
  auth: authReducer.reducer,
};

const persistedReducer = persistReducer(persistConfig, reduser);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
