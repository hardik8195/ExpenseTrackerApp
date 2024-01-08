import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    expenses: []
}

export const ExpenseSlice=createSlice({
    name:'expenses',
    initialState,
    reducers:{
        addItems:(state,action) => {
            const expense  = {
                id:nanoid(),
                description:action.payload.description,
                amount:action.payload.amount,
                date:action.payload.date
            }
            state.expenses.push(expense)
        },
        deleteItems:(state,action)=>{
            state.expenses = state.expenses.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {addItems,deleteItems} = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
