import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
    prepareHeaders: (headers, { getState }) => {
      const token = getState().data.token;
      console.log(token);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
      return headers;
  },
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      url: '/users/current',
      providesTags: ['users'],
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['users'],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['users'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['users'],
    }),
  }),
  // tagTypes: ['contacts'],
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation, useGetCurrentUserQuery } = api;