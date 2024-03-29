import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  delContactThunk,
  getContactsThunk,
  postContactThunk,
  updateContactThunk,
} from './options';

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActs = [
  getContactsThunk,
  postContactThunk,
  delContactThunk,
  updateContactThunk,
];

const addStatusToActs = status => arrOfActs.map(el => el[status]);

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = null;
      })
      .addCase(postContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
        state.error = null;
      })
      .addCase(delContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
        state.error = null;
      })
      .addCase(updateContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.map(contact =>
          contact.id === payload.id ? payload : contact
        );
        state.error = null;
      })
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});

// export const phoneBookSlice = createSlice({
//   name: 'phoneBook',
//   initialState: contactInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(getContactsThunk.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.contacts = payload;
//         state.error = null;
//       })
//       .addCase(getContactsThunk.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(postContactThunk.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(postContactThunk.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.contacts = [...state.contacts, payload];
//         state.error = null;
//       })
//       .addCase(postContactThunk.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(delContactThunk.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(delContactThunk.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.contacts = state.contacts.filter(
//           contact => contact.id !== payload
//         );
//         state.error = null;
//       })
//       .addCase(delContactThunk.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       });
//   },
// });
