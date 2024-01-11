import { StyleSheet, View, Text, Alert } from "react-native";
import Input from "./input";
import { useState } from "react";
import Button from "../UI/button";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";

export default function ManageForm({ setButtonTitle, onSubmit, defaultExpense }) {

    const [description, setDescription] = useState(defaultExpense ? defaultExpense.description : '')
    const [amount, setAmount] = useState(defaultExpense ? defaultExpense.amount.toString() : '')
    const [date, setDate] = useState(defaultExpense ? getFormattedDate(defaultExpense.date) : '')
    const navigation = useNavigation()

    function handleSubmit() {
        const expenseData = {
            description: description,
            amount: +amount,
            date: new Date(date),

        }
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            Alert.alert('Invalid Input', 'Please check your input values')
            return;
        }
        onSubmit(expenseData)
    }
    return (
        <View style={styles.form}>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    style={styles.rowInput}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: (enteredAmo) => setAmount(enteredAmo),
                        value: amount,

                    }} />

                <Input
                    label="Date"
                    style={styles.rowInput}
                    textInputConfig={{
                        onChangeText: (enteredDate) => setDate(enteredDate),
                        value: date,
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                    }}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: (enteredText) => setDescription(enteredText),
                    value: description,
                }}
            />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button onPress={() => navigation.goBack()}>
                        Cancel
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button onPress={handleSubmit}>
                        {setButtonTitle}
                    </Button>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});