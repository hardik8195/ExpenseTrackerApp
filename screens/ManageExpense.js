import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from "../constants/styles";
import { addItems, deleteItems } from "../app/ExpenseSlice";
import { useDispatch } from 'react-redux'
import Button from "../components/UI/Button";
import ManageForm from "../components/ManageForm/ManageForm";
export default function ManageExpense() {
    const route = useRoute();
    const navigation = useNavigation()
    const edititedExpenseId = route.params?.expenseId
    const isEditing = !!edititedExpenseId
    const dispatch = useDispatch()
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add expense"
        })
    }, [isEditing, navigation])

    function handleDelete() {
        dispatch(deleteItems(edititedExpenseId));
        navigation.goBack()
    }
    function handleAdd(){
        dispatch(addItems({
            description: 'A pair of shoes',
            amount: 59.99,
            date: '2021-12-19'
        }))
        navigation.goBack()
    }
    function handleUpdate(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
        <ManageForm />
            <View style={styles.buttonContainer}>
                <View>
                    <Button>
                        Cancel
                    </Button>
                </View>
                <View>
                    <Button onPress={isEditing?handleUpdate:handleAdd}>
                        {isEditing?"Update":"ADD"}
                    </Button>
                </View>
            </View>
            {isEditing ? (
                <View>
                    <View style={styles.hr}></View>
                    <View style={styles.icon}>
                        <Pressable onPress={handleDelete}
                        ><AntDesign name="delete" size={30} color="red" /></Pressable>
                    </View>
                </View>
            ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    icon: {
        alignItems: "center",
        marginTop: 40
    },
    hr: {
        marginTop: 40,
        height: 3,
        width: "100%",
        backgroundColor: GlobalStyles.colors.primary200
    },

})