import axios from "axios";

const FIREBASE_URL = "https://expesnse-tracker-app-default-rtdb.firebaseio.com"
export async function postExpense(expenseData) {
    const response = await axios.post(FIREBASE_URL + "/expenses.json", expenseData)
    const id = response.data.name
    return id;
}

export async function getExpenses() {
    const response = await axios.get(FIREBASE_URL + "/expenses.json");

    const Expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        Expenses.push(expenseObj);
    }
    return Expenses;
}

export function updateExpenses(id, expenseData) {
    return axios.put(FIREBASE_URL + `/expenses/${id}.json`, expenseData)
}
export function deleteExpense(id) {
    return axios.delete(FIREBASE_URL + `/expenses/${id}.json`);
}
