import { Text } from "react-native"
import ExpensesOutput from "../components/Expenses/ExpensesOutput"
import { useSelector } from "react-redux"

export default function AllExpenses() {
    const expenses = useSelector((state) => state.expenses)
    return (
        <ExpensesOutput
            expenses={expenses}
            expensePeriod="TOTAL"
            fallBackText="The expense is not been registered !"
        />
    )
}