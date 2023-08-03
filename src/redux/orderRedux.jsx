import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        products:[],
        clickIndex:{},
    },
    reducers: {
        addOrderProduct: (state, action) =>{

            state.products.push(action.payload);
            
        },
        // updateProductList: (state,action) =>{
        //     state.productList.products.length=0;
        //     state.productList.products.push(...action.payload.products)
        // },
        updateIndex:(state,action) =>{
            state.clickIndex=action.payload;
        },
        // addOrderItem:(state,action) =>{
        //     state.productList.products.unshift(...action.payload.products);
        // },
        clearOrders:(state) =>{
            state.products.length=0;
            // state.productList.products.length=0;
            state.clickIndex={};
            // state.orderId=null;
        }
        
    },
});

export const {addOrderProduct,updateIndex,clearOrders} = orderSlice.actions;
export const orderValue =(state) => state.order;
export default orderSlice.reducer;