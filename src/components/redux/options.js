import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  delContact,
  editContact,
  getContacts,
} from 'components/fetchAPI';

import { toast } from 'react-toastify';

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(
        `Ooops! Wrong... Try again or update browser`
      );
    }
  }
);

export const postContactThunk = createAsyncThunk(
  'phoneBook/postContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await addContact(data);

      toast.success('Add contact', {
        position: 'bottom-right',
      });
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      console.log(name, number);
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
      toast.success('Contact delete', {
        position: 'bottom-right',
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
      console.log(data);
      const { data: result } = await editContact(data);
      console.log(data);
      toast.success('Contact update', {
        position: 'bottom-right',
      });
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
