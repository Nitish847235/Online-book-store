import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userRedux from "./userRedux";
import cartReducer from "./cartRedux";
import orderReducer from "./orderRedux";
import searchReducer from "./SearchRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}
const rootReducer = combineReducers({user: userRedux,order: orderReducer,cart: cartReducer,search:searchReducer})
const persisteReducer = persistReducer(persistConfig, rootReducer)

export const store = 
     configureStore({
     reducer: persisteReducer,
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
        serializableCheck:{
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export let persistor = persistStore(store);
export default store;