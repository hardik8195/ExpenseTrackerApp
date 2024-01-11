import { Text ,StyleSheet,View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({expensePeriod,fallBackText,expenses}){
  let content = <Text style={
    {fontSize:15,
    color:'white',
    textAlign:"center",
    marginTop:15
    }}>{fallBackText}</Text>

  if(expenses.length>0){
    content = <ExpensesList expenses={expenses}/>
  }
    return (
        <>
        <View style={styles.container}>
        <ExpensesSummary expenses={expenses} PeriodName={expensePeriod}/>
        {content}
        </View>
        </>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop:24,
    paddingBottom:0,
    backgroundColor:GlobalStyles.colors.primary700

  }
})