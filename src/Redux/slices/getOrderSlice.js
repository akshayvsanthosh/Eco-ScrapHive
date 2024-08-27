import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllOrdersAPI } from "../../services/allAPI";

export const fetchOrders = createAsyncThunk('allOrders/fetchOrders', async()=>{
    const token = sessionStorage.getItem("token")
    if (token) {
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getAllOrdersAPI(reqHeader)
            return result.data.reverse()
        } catch (error) {
            console.log(error);
        }
    }
})

const getOrdersSlice = createSlice({
    name:"allOrders",
    initialState:{
        allOrders: [],
        loading: false,
        error: ""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchOrders.fulfilled,(state,action)=>{
            state.allOrders = action.payload
            state.loading= false
            state.error = ""
        })
        builder.addCase(fetchOrders.pending,(state,action)=>{
            state.allOrders = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchOrders.rejected,(state,action)=>{
            state.allOrders = []
            state.loading = false
            state.error = "API Call failed.. Please try after some times!!!"
        })
    }
})

export default getOrdersSlice.reducer