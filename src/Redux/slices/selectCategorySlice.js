import { createSlice } from "@reduxjs/toolkit";

const selectCategorySlice = createSlice({
    name:"selectCategory",
    initialState:[],
    reducers:{
        setSelectedCategory:(state,action)=>{
            if (state.includes(action.payload)) {
                // Remove ID from the array
                return state.filter(existingId => existingId != action.payload);
            } else {
                // Add ID into array
                state.push(action.payload)
            }
            
        },
        clearSelectedCategories:(state)=>{
            return []
        }
    }
})

export const {setSelectedCategory,clearSelectedCategories} = selectCategorySlice.actions
export default selectCategorySlice.reducer