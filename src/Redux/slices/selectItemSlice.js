import { createSlice } from "@reduxjs/toolkit";

const selectItemSlice = createSlice({
    name:"selectItems",
    initialState:[],
    reducers:{
        setSelectedItem:(state,action)=>{
            if (state.includes(action.payload)) {
                // Remove ID from the array
                return state.filter(existingId =>existingId != action.payload)
            } else {
                // Add ID into array
                state.push(action.payload)
            }
        },
        clearSelectedItem:(state)=>{
            return []
        }
    }
})

export const {setSelectedItem,clearSelectedItem} = selectItemSlice.actions
export default selectItemSlice.reducer