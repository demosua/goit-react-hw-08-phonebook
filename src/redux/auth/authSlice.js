import { createSlice } from '@reduxjs/toolkit';
import { api } from 'redux/backend/api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        api.endpoints.signup.matchFulfilled,
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        api.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        api.endpoints.logout.matchFulfilled,
        (state, { payload }) => {
          state.user.name = '';
          state.user.email = '';
          state.token = '';
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        api.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.user.name = payload.name;
          state.user.email = payload.email;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;