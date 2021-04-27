import { createSlice } from '@reduxjs/toolkit';
const selectionSortSlice = createSlice({
  name: 'selectionSort',
  initialState: {
    status: 'loading',
    animations: null,
    colors: null,
  },
  reducers: {
    data(state, { payload }) {
      state.animations = payload.selectionAnimations;
      state.colors = payload.selectionColors;
    },
  },
});

export const { data } = selectionSortSlice.actions;

export default selectionSortSlice.reducer;
