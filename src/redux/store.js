import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './contacts/contacts-slice';
import { filterSlice } from './filter-slice';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/auth-slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  phoneBook: phoneBookSlice.reducer,
  filter: filterSlice.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
