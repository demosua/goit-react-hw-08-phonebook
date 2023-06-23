import { createSlice } from '@reduxjs/toolkit';
import { api } from 'redux/backend/api';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {},
  extraReducers: builder => {
    builder
      //updateContact
      //deleteContact
      //createContact
      .addMatcher(
        api.endpoints.getContacts.matchFulfilled,
        (state, { payload }) => {
          state.items = payload;
        }
      );  
  },
});

export default contactSlice.reducer;