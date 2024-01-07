import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        currentLocation: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) =>{
            state.isFetching= true;
            state.error = false;
        },
        loginSuccess: (state, action) =>{
            state.isFetching = false;
            // if(state.currentUser===null || (state.currentUser.data && state.currentUser.data===null)){
                state.currentUser = action.payload;
            // }
            // else{
            //     if(state.currentUser && state.currentUser.data && state.currentUser.data.name)
            //         state.currentUser.data.name = action.payload?.data?.name;
            //     if(state.currentUser && state.currentUser.data && state.currentUser.data.email)
            //         state.currentUser.data.email = action.payload?.data?.email;
            //     if(state.currentUser && state.currentUser.data && state.currentUser.data.phone)
            //         state.currentUser.data.phone = action.payload?.data?.phone;
            //     if(state.currentUser && state.currentUser.data && state.currentUser.data.picture)
            //         state.currentUser.data.picture = action.payload?.data?.picture;
            // }
        },
        loginFailure: (state) =>{
            state.isFetching = false;
            state.error = true;
        },
        logOut: (state) =>{
            state.currentUser = null;
            state.error= false
        },
        updateLocation: (state,action) =>{
            state.currentLocation = action.payload;
        }
        // addressEdit:(state,action) =>{
        //     state.currentUser.data.address[action.payload.index]=action.payload.values;
        // },
        // addressDelete:(state,action) =>{
        //     state.currentUser.data.address.splice(action.payload,1);
        // }
    },
});

export const {loginStart, loginSuccess, loginFailure, logOut, updateLocation} = userSlice.actions;
export const selectUser = (state) => state.user
export default userSlice.reducer;