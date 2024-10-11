import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import itemSlice from "./slices/itemSlice";
import selectCategorySlice from "./slices/selectCategorySlice";
import selectItemSlice from "./slices/selectItemSlice";
import getOrderSlice from "./slices/getOrderSlice";
import deleteOrderSlice from "./slices/deleteOrderSlice";

const eshStore = configureStore({
    reducer:{
        categoryReducer:categorySlice,
        itemReducer:itemSlice,
        selectCategoryReducer:selectCategorySlice,
        selectItemReducer:selectItemSlice,
        getOrderReducer:getOrderSlice,
        deleteOrderReducer:deleteOrderSlice
    }
})

export default eshStore