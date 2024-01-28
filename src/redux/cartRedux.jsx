import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../mocks/cart";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: {},
        total: 0,
        totalProductCount: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.total +=
                action.payload &&
                action.payload.saleInfo &&
                action.payload.saleInfo.listPrice &&
                action.payload.saleInfo.listPrice.amount;
        },
        addToCart(state, action) {
            try {
                if (action.payload) {
                    state.products = action.payload;
                    const amountToAdd =
                        action.payload &&
                        action.payload.listPrice &&
                        action.payload.listPrice.amount;

                    if (typeof amountToAdd === "number" && !isNaN(amountToAdd)) {
                        state.total += amountToAdd;
                    } else {
                        console.error("Invalid amount:", amountToAdd);
                    }
                    state.totalProductCount += 1;
                }
            } catch (error) {
                console.log(error);
            }
        },
        findAllCart(state, action) {
            try {
                if (action.payload) {
                    state.products = action.payload;
                    let total = 0;
                    action.payload?.docs?.map((item)=>{
                        const amountToAdd = item && item.listPrice && item.listPrice.amount;
                    if (typeof amountToAdd === "number" && !isNaN(amountToAdd)) {
                        total += amountToAdd;
                    } else {
                        console.error("Invalid amount:", amountToAdd);
                    }
                    })
                    state.total = total;
                    state.totalProductCount = action.payload?.totalDocs;
                }
            } catch (error) {
                console.log(error);
            }
        },
        removeItem: (state, action) => {
            state.total -= state.products[action.payload].saleInfo.listPrice.amount;
            state.products.splice(action.payload, 1);
        },
        clearCart: (state) => {
            state.products = [];
            state.total = 0;
        },
    },
});

export const { addProduct, removeItem, clearCart } = cartSlice.actions;
export const cartValue = (state) => state.cart;
export default cartSlice.reducer;

export const addToCart = (data) => async (dispatch) => {
    try {
        const result = await cartApi.addToCart(data);
        if (result) {
            await dispatch(cartSlice.actions.addToCart(result?.data));
            return result;
        }
        return false;
    } catch (e) {
        console.log(e);
    }
};

export const findAllCart = (data) => async (dispatch) => {
    try {
        const result = await cartApi.findAllCart(data);

        if (result) {
            await dispatch(cartSlice.actions.findAllCart(result?.data));
            return result;
        }
        return false;
    } catch (e) {
        console.log(e);
    }
};

export const deleteCart = (data) => async (dispatch) => {
    try {
        const result = await cartApi.deleteCart(data);

        if (result) {
            // await dispatch(cartSlice.actions.deleteCart(result?.data));
            return result;
        }
        return false;
    } catch (e) {
        console.log(e);
    }
};
