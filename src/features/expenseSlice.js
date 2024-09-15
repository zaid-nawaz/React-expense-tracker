import { createSlice, nanoid } from "@reduxjs/toolkit";




export const expenseSlice = createSlice({
    name:'sliceExpense',
    initialState : [],
    reducers:{
        addExpense : (state,action) => {
            let today = new Date().toLocaleDateString();
            const expense = {
                id : nanoid(),  
                text : action.payload.text,
                price : action.payload.price,
                category : action.payload.category,
                date : today
            }
            
            
            state.push(expense)
            
    
        },
    }
})  

export const {addExpense} = expenseSlice.actions 

export default expenseSlice.reducer