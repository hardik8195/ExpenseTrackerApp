import ExpensesOutput from "../components/Expenses/ExpensesOutput"
export default function RecentExpenses(){
  
   
    return (
        <ExpensesOutput 
        expensePeriod="Last seven days" 
        fallBackText="Expense is not been registered in 7 days !"/>
    )
}