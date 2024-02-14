import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk } from './auth-thunk';

export const initialStateAuth = {
  token: '',
  isLoading: false,
  error: false,
  profile: null,
  isLoad: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
  state.isLoad = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlise = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    logOut(state) {
      state.token = '';
      state.profile = null;
      state.isLoad = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(
        isAnyOf(loginThunk.pending, getProfileThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, getProfileThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlise.reducer;

export const { logOut } = authSlise.actions;
