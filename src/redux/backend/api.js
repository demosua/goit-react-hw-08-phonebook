import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users', 'Contacts'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
      }),
      providesTags: ['Users'],
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Users'],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Users'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: ({ contactId, name, number }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: { contactId, name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation,
useLogoutMutation, useGetCurrentUserQuery,
useGetContactsQuery, useCreateContactMutation,
useDeleteContactMutation, useUpdateContactMutation } = api;