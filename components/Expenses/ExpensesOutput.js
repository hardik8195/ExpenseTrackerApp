import { Text ,StyleSheet,View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import { useSelector } from "react-redux";

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2022-01-05')
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01')
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19')
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2022-02-18')
    },
    {
      id: 'e6',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19')
    },
    {
      id: 'e7',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19')
    },
    {
      id: 'e8',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19')
    },
  ];
export default function ExpensesOutput({expensePeriod,fallBackText}){
  const Expenses = useSelector((state)=>state.expenses)
  let content = <Text style={
    {fontSize:15,
    color:'white',
    textAlign:"center",
    marginTop:15
    }}>{fallBackText}</Text>
  if(Expenses.length>0){
    content = <ExpensesList expenses={Expenses}/>
  }
    return (
        <>
        <View style={styles.container}>
        <ExpensesSummary expenses={Expenses} PeriodName={expensePeriod}/>
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