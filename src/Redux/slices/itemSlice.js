import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllItemAPI } from "../../services/allAPI";

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getAllItemAPI(reqHeader)
            return result.data
        } catch (error) {
            console.log(error);

        }
    }
})

const itemSlice = createSlice({
    name: "items",
    initialState: {
        allItems: [],
        loadingItem: false,
        errorItem: ""
    },
    reducers: {

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchItems.fulfilled,(state,action)=>{
            state.allItems = action.payload
            state.loadingItem = false
            state.errorItem = ""
        })
        builder.addCase(fetchItems.pending,(state,action)=>{
            state.allItems = []
            state.loadingItem = true
            state.errorItem = ""
        })
        builder.addCase(fetchItems.rejected,(state,action)=>{
            state.allItems = []
            state.loadingItem = false
            state.errorItem = "API Call failed.. Please try after some times!!!"
        })
    }
})

export default itemSlice.reducer