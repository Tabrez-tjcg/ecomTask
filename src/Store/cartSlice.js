import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart : [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            // console.log("OnCLick Remove: " ,action.payload)
            return state.cart.filter( item => item.id !== action.payload );
        },
        updateCart : (state, action) => {
            state.cart.AdditionalData.quantity =  action.payload  
            console.log("inside the update reducer", action.payload);
        },
    }
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;

