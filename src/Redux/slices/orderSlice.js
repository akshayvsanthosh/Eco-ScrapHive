import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addOrder = createAsyncThunk('orders/addOrder', async()=>{
    
})

const orderSlice = createSlice({
    name:"orders",
    initialState:{
        image:"",
        itemNames:[],
        address:{}
    },
    reducers:{
        addImage:(state,action)=>{
            state.image=action.payload
        },
        addItemNames:(state, action)=>{
            state.itemNames = action.payload; 
        },
        addOrderAddress:(state,action)=>{
            state.address = action.payload
        }
    }
})

export const{addImage,addItemNames,addOrderAddress} = orderSlice.actions
export default orderSlice.reducer