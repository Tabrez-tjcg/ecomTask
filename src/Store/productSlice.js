import { createSlice } from "@reduxjs/toolkit";

export const prodcutSlice = createSlice({
    name: 'products',
    initialState: {
        productCL : [],
        AllProducts : [],
    },
    reducers: {
        storeAllProduct: (state, action) => {
            state.AllProducts.push(action.payload);
        },
        ShowProduct: (state, action) => {
            console.log("the State", action.payload);
            state.productCL = action.payload;
        },
    }
});

export const { storeAllProduct, ShowProduct } = prodcutSlice.actions;
export default prodcutSlice.reducer;