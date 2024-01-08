import { Text } from "react-native"
import ExpensesOutput from "../components/Expenses/ExpensesOutput"

export default function AllExpenses(){
    return (
        <ExpensesOutput 
        expensePeriod="two"
        fallBackText="The expense is not been registered !"
        />
    )
}