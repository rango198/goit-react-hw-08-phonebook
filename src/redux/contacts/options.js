import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  delContact,
  editContact,
  getAllContacts,
  setAuthHeader,
} from '../Api/fetchAPI';
import { toast } from 'react-toastify';

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      setAuthHeader(token);
      console.log(token);
      const { data } = await getAllContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || 'Ooops! Something went wrong...'
      );
    }
  }
);

// export const getContactsThunk = createAsyncThunk(
//   'phoneBook/getContacts',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await getAllContacts();
//       return data;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(
//         `Ooops! Wrong... Try again or update browser`
//       );
//     }
//   }
// );

export const postContactThunk = createAsyncThunk(
  'phoneBook/postContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await addContact(data);
      toast.success('Add contact', {
        duration: 3000,
      });
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { phoneBook } = getState();

      const normalizedName = name.toLowerCase();
      const normalizedPhone = number.trim();

      const dublicate = phoneBook.contacts.find(contact => {
        const normalizedCurrentName = contact.name.toLowerCase();
        const normalizedCurrentPhone = contact.number.trim();
        return (
          normalizedCurrentName === normalizedName &&
          normalizedCurrentPhone === normalizedPhone
        );
      });

      if (dublicate) {
        toast.error(`This contact is already in contacts`);
        return false;
      }
    },
  }
);

export const delContactThunk = createAsyncThunk(
  'phoneBook/delContact',
  async (id, { rejectWithValue }) => {
    try {
      await delContact(id);
      toast.success('Contact Delete', {
        duration: 3000,
      });
      return id;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/editContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await editContact(data);

      toast.success('Contact Edit', {
        duration: 3000,
      });

      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
