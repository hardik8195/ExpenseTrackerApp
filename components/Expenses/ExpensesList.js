import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from "../../utils/date";


export default function ExpensesList({ expenses }) {
    const navigation = useNavigation()
    return (
        <FlatList
            data={expenses}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => navigation.navigate("manageExpense", { expenseId: item.id })}
                    style={({ pressed }) => pressed && styles.pressed}>
                    <View style={styles.container}>
                        <View style={styles.childContainer}>
                            <View>
                                <Text style={{ color: 'white' }}>{item.description}</Text>
                            </View>
                            <View style={{
                                height: 40,
                                width: 60,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                marginTop:4
                            }}>
                                <Text style={{
                                    color: GlobalStyles.colors.primary500,
                                }}>Rs{item.amount.toFixed(2)}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: 'white' }}>{getFormattedDate(item.date)}</Text>
                        </View>
                    </View>
                </Pressable>


            )}
            keyExtractor={(item) => item.id}
        />
    )
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
        // backgroundColor: GlobalStyles.colors.primary400
    },
    container: {
        backgroundColor: GlobalStyles.colors.primary400,
        marginVertical: 10,
        elevation: 3,
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center'
    },
    childContainer: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})