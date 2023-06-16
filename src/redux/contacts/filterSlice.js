import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers: {
    filterChange: (state, action) => {
       return (state = action.payload)
    },
  },
})

export const { filterChange } = filterSlice.actions
export const selectFilter = state => state.filter
export default filterSlice.reducer