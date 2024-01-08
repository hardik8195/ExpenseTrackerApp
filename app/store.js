import {configureStore} from '@reduxjs/toolkit'
import ExpenseReducer from "../app/ExpenseSlice"
const store = configureStore({
    reducer:ExpenseReducer
})

export default store