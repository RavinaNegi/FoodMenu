import { configureStore } from "@reduxjs/toolkit"
import slice from "./slice";
const store=configureStore({
    reducer:{
        appSlice:slice,
    },
}

);
export default store;
