import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from '../auth/auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  return state;
};

const handleFulfilledRegisterUser = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = false;
};

const handleFulfilledLogInUser = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleRejected = state => {
  return state;
};

const handlePendingCurrentUser = state => {
  state.isRefreshing = true;
};

const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejectedCurrentUser = state => {
  state.isRefreshing = false;
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    // const { pending, fulfilled, rejected } = status;
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, handleFulfilledRegisterUser)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(logInUser.pending, handlePending)
      .addCase(logInUser.fulfilled, handleFulfilledLogInUser)
      .addCase(logInUser.rejected, handleRejected)
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(getCurrentUser.pending, handlePendingCurrentUser)
      .addCase(getCurrentUser.fulfilled, handleFulfilledCurrentUser)
      .addCase(getCurrentUser.rejected, handleRejectedCurrentUser);
  },
});

export const authReducer = authSlice.reducer;
