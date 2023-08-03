import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        total: 0,
    },
    reducers: {
        addProduct: (state, action) =>{

            state.products.push(action.payload);
            state.total += action.payload &&action.payload.saleInfo && action.payload.saleInfo.listPrice && action.payload.saleInfo.listPrice.amount;

        },
        removeItem:(state,action) =>{
            state.total -= state.products[action.payload].saleInfo.listPrice.amount;
            state.products.splice(action.payload,1);
        },
        clearCart:(state) =>{
            state.products = [];
            state.total = 0;
        }
    },
});

export const {addProduct,removeItem,clearCart} = cartSlice.actions;
export const cartValue =(state) => state.cart;
export default cartSlice.reducer;