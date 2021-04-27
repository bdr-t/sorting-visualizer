import { createSlice } from '@reduxjs/toolkit';
const mergeSortSlice = createSlice({
  name: 'mergeSort',
  initialState: {
    status: 'loading',
    animations: null,
    colors: null,
  },
  reducers: {
    data(state, { payload }) {
      state.animations = payload.mergeAnimations;
      state.colors = payload.mergeColors;
    },
  },
});

export const { data } = mergeSortSlice.actions;

export default mergeSortSlice.reducer;
