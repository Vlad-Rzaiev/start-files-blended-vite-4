import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filteredValue: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const selectFilter = state => state.filter.filter;

export const { filteredValue } = filterSlice.actions;

export default filterSlice.reducer;
