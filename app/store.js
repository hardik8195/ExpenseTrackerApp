import {configureStore} from '@reduxjs/toolkit'
import ExpenseReducer from "../app/ExpenseSlice"
const store = configureStore({
    reducer:ExpenseReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})

export default store