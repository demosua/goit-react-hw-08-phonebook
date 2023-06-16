import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    login: (state, action) => {
       return (state = action.payload)
    },
  },
});


export const selectFilter = state => state.auth
export default authSlice.reducer