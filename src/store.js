import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Store/productSlice'

export default configureStore({
  reducer: {
    products : productReducer,
  },
})