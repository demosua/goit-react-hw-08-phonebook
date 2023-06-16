import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authorizationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
      return headers;
  },
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      url: '/users/current',
      providesTags: ['Auth'],
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation, useGetCurrentUserQuery } = authorizationApi;