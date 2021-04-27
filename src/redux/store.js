import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import mergeSortReducer from './mergeSortSlice'

export default configureStore({
  reducer: {
   mergeSort : mergeSortReducer,
  },
  middleware : getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})