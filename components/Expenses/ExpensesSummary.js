import { StyleSheet, Text ,View} from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesSummary({expenses,PeriodName}){
    const expensesSum = expenses.reduce((sum,expence)=>{
        return sum+expence.amount
    },0)

    return (
        <View style={styles.container}>
        <Text style={{color:GlobalStyles.colors.primary400}}>{PeriodName}</Text>
        <Text style={{color:GlobalStyles.colors.primary400}}>Rs{expensesSum.toFixed(2)}</Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:GlobalStyles.colors.primary100,
        height:40,
        width:'80',
        flexDirection:'row',
        borderRadius:5,
        justifyContent:'space-between',
        alignItems:'center',
        elevation:3,
        padding:5
    }
})