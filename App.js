import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddButton from './components/UI/AddButton';
import { Provider } from 'react-redux';
import store from './app/store';
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

function Expenses() {
  return (
    <BottomTab.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
    }}>
      <BottomTab.Screen name='recentExpenses' component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />

          ),
          headerRight:({color,size})=>(
            <AddButton  color={color}/>
          )
        }}


      />
      <BottomTab.Screen name='allExpenses' component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
         
        }}
      />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
        headerTintColor:"white"
      }}>
        <Stack.Screen name='expenses' component={Expenses}
          options={{
            headerShown: false,
            headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          }}
        />
        <Stack.Screen name="manageExpense" component={ManageExpense}
        options={{
          title:"Manage Expense"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
