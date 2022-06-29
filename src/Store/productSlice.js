import { createSlice } from "@reduxjs/toolkit";

export const prodcutSlice = createSlice({
    name: 'products',
    initialState: {
        productCL : [],
        AllProducts : [],
        cart : [],
    },
    reducers: {
        storeAllProduct: (state, action) => {
            state.AllProducts.push(action.payload);
            console.log("the State", action.payload);
            console.log("the state: ",state);
        },
        setProducts: (state, action) => {
            // console.log(" the State", action.payload);
            state.productCL.push(action.payload);
            // console.log("the state: ",state);
        },
        addToCart: (state, action) => {
            alert("indside Reducer")
            state.cart.push(action.payload)
        },
    }
});

export const { storeAllProduct, setProducts, addToCart } = prodcutSlice.actions;
export default prodcutSlice.reducer;