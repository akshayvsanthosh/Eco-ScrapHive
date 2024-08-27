import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteOrderAPI } from "../../services/allAPI";

export const deleteOrder = createAsyncThunk('dltOrder/deleteOrder', async (oId, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token")
    if (token) {
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await deleteOrderAPI(oId, reqHeader)
            return result.data
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    } else {
        // Handle the case where the token is missing
        return rejectWithValue("Token missing");
    }
})

const deleteOrderSlice = createSlice({
    name: "dltOrder",
    initialState: {
        status: 'idle',
        error: null,
        data: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteOrder.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(deleteOrder.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload
        })
        builder.addCase(deleteOrder.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    }
})

export default deleteOrderSlice.reducer