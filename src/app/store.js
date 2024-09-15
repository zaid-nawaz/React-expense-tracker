import {configureStore} from '@reduxjs/toolkit';
import expenseSlice from '../features/expenseSlice';
import categorySlice from '../features/categorySlice';

export const store = configureStore({
    reducer: { 
        expensed : expenseSlice,
        categorised : categorySlice,
    }
    
})