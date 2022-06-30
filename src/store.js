import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Store/productSlice'
import cartReducer from './Store/cartSlice'

export default configureStore({
  reducer: {
    products : productReducer,
    cart: cartReducer,
  },
})