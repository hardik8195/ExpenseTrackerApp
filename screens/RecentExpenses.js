import { useEffect, useState } from "react"
import ExpensesOutput from "../components/Expenses/ExpensesOutput"
import { useDispatch, useSelector } from "react-redux"
import { getExpenses } from "../utils/http"
import { setItems } from "../app/ExpenseSlice"
import LoadingOverlay from "../components/UI/LoadingOverLay"
import { getDateMinusDays } from "../utils/date"
export default function RecentExpenses() {
    const [loading, setLoading] = useState(true)
    const expenses = useSelector((state) => state.expenses)
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchExpense() {
            setLoading(true)
            try {
                const fetchedExpenses = await getExpenses()
                dispatch(setItems(fetchedExpenses))
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchExpense()
    }, [])

    const recentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo && expense.date <= today;
    })

    if (loading) {
        return <LoadingOverlay />
    }
    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensePeriod="Last seven days Total"
            fallBackText="Expense is not been registered in 7 days !" />
    )
}