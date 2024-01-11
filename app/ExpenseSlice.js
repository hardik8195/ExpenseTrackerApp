import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    expenses: []
}

export const ExpenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addItems: (state, action) => {
            const expense = {
                id: action.payload.id,
                description: action.payload.description,
                amount: action.payload.amount,
                date: action.payload.date
            }
            state.expenses.unshift(expense)
        },
        updateItems: (state, action) => {
            state.expenses = state.expenses.map((item) => item.id === action.payload.id ? action.payload : item)
        },
        deleteItems: (state, action) => {
            state.expenses = state.expenses.filter((item) => item.id !== action.payload)
        },
        setItems:(state,action) => {
            state.expenses = action.payload.reverse()
        }
    }
})

export const { addItems, deleteItems, updateItems ,setItems} = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
