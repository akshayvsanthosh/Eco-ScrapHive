import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import itemSlice from "./slices/itemSlice";

const eshStore = configureStore({
    reducer:{
        categoryReducer:categorySlice,
        itemReducer:itemSlice
    }
})

export default eshStore