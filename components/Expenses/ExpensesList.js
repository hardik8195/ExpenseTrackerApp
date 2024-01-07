import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";


export default function ExpensesList({ expenses }) {
    const navigation = useNavigation()
    const date = new Date()
    function handlePress(){
        navigation.navigate('manageExpense')
    }
    return (
        <FlatList
            data={expenses}
            renderItem={({ item }) => (
                <Pressable
                onPress={handlePress} 
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
                                borderRadius: 5
                            }}>
                                <Text style={{
                                    color: GlobalStyles.colors.primary500,
                                }}>Rs{item.amount.toFixed(2)}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: 'white' }}>{date.getFullYear(item.date)}-{date.getMonth() + 1}-{date.getDate()}</Text>
                        </View>
                    </View>
                </Pressable>

            )}
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