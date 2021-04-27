import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mergeSortReducer from './mergeSortSlice';
import selectionSortReducer from './selectionSortSlice';

export default configureStore({
  reducer: {
    mergeSort: mergeSortReducer,
    selectionSort: selectionSortReducer,
  },
  middleware: getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});
