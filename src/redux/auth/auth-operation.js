import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  userCurrent,
  userLogin,
  userLogout,
  userSignUp,
} from '../Api/fetchAPI';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userSignUp(data);
      toast.success('Successfully registered!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      //console.log('register:', result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userLogin(data);
      toast.success('Successfully logged!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      //console.log('login:', result);
      return result;
    } catch (error) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userLogout();
      toast.success('Successfully logout!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      //console.log('logout:', data);
      return data;
    } catch (error) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const { data } = await userCurrent(token);
      console.log('currentUser:', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();

      if (!token) {
        return false;
      }
    },
  }
);
