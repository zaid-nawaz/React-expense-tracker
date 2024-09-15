import { createSlice } from "@reduxjs/toolkit";


export const categorySlice = createSlice({
    name : 'sliceCategory',
    initialState : [],
    reducers : {
        addCategoryReducer : (state,action) => {
            const category = {
                text : action.payload
            }
            state.push(category)
        } 
    }
})

export const {addCategoryReducer} = categorySlice.actions  

export default categorySlice.reducer