import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from "../constants/styles";
import { addItems, deleteItems, updateItems } from "../app/ExpenseSlice";
import { useDispatch, useSelector } from 'react-redux'
import ManageForm from "../components/ManageForm/ManageForm";
import { deleteExpense, postExpense, updateExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverLay";
export default function ManageExpense() {
    const [isLoading, setIsLoading] = useState(false)
    const route = useRoute();
    const navigation = useNavigation()
    const edititedExpenseId = route.params?.expenseId
    const isEditing = !!edititedExpenseId
    const expenses = useSelector((state) => state.expenses)
    const dispatch = useDispatch()
    const selectedExpense = expenses.find((expense) => expense.id === edititedExpenseId)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add expense"
        })
    }, [isEditing, navigation])

    async function handleDelete() {
        setIsLoading(true)
        try {
            await deleteExpense(edititedExpenseId);
            dispatch(deleteItems(edititedExpenseId));
        } catch (error) {
            console.log("an error occured in deleting an expense")
        }
        navigation.goBack()
    }
    async function confirmHandler(expenseData) {
        setIsLoading(true)
        if (isEditing) {
            try {
                dispatch(updateItems({
                    id: edititedExpenseId,
                    description: expenseData.description,
                    amount: expenseData.amount,
                    date: expenseData.date
                }))

                await updateExpenses(edititedExpenseId, expenseData);
            } catch (error) {
                console.log("could not update expense")
            }
        }

        else {
            try {
                const fetchid = await postExpense(expenseData)
                dispatch(addItems({
                    id: fetchid,
                    description: expenseData.description,
                    amount: expenseData.amount,
                    date: expenseData.date
                }))
            } catch (error) {
                console.log("could not add an expense")
            }
        }
        navigation.goBack()
    }
    if (isLoading) {
        return <LoadingOverlay />
    }
    return (
        <View style={styles.container}>
            <ManageForm
                setButtonTitle={isEditing ? "Update" : "Add"}
                onSubmit={confirmHandler}
                defaultExpense={selectedExpense}
            />
            {isEditing ? (
                <View style={{ marginTop: 30 }}>
                    <View style={styles.hr}></View>
                    <View style={styles.icon}>
                        <Pressable onPress={handleDelete}>
                            <AntDesign name="delete" size={30} color="red" />
                        </Pressable>
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
        paddingHorizontal: 50,
        backgroundColor: GlobalStyles.colors.primary700
    },
    icon: {
        alignItems: "center",
        marginTop: 10
    },
    hr: {
        height: 3,
        width: "100%",
        backgroundColor: GlobalStyles.colors.primary200
    },

})