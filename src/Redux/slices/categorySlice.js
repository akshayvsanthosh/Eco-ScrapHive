import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategoryAPI } from "../../services/allAPI";

export const fetchCategories = createAsyncThunk('categories/fetchCategories',async()=>{
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllCategoryAPI(reqHeader)
        return result.data
      } catch (error) {
        console.log(error);
      }
    }
})

const categorySlice = createSlice({
    name:"categories",
    initialState:{
        allCategory:[],
        loading:false,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.allCategory = action.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(fetchCategories.pending,(state,action)=>{
            state.allCategory = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchCategories.rejected,(state,action)=>{
            state.allCategory = []
            state.loading = false
            state.error = "API Call failed.. Please try after some times!!!"
        })
    }
})

export default categorySlice.reducer