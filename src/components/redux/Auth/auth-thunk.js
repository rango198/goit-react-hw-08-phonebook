import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logIn } from 'components/fetchAPI';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { dispatch }) => {
    const data = await logIn(body);
    dispatch(getProfileThunk());
    return data;
  }
);

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  return await getProfile();
});
