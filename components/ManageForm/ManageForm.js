import { View } from "react-native";
import Input from "./input";
import { useState } from "react";

export default function ManageForm() {
    const [inputHandler,setinputHandler] = useState({
        amount:"",
        date:"",
        description:""
    })

    function handleInput(name,value){
       setinputHandler((currInputValue)=>{
        return{ 
        ...currInputValue,
        [name]:value
        }
       })
    }
    return (
        <View>
            <View>
                <Input
                    label="amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: handleInput.bind(this,'amount'),
                        value:inputHandler.amount

                    }} />
            </View>
            <View>
                <Input
                    label="date"
                    placeholder="YYYY-MM-DD"
                    textInputConfig={{
                        onChangeText:handleInput.bind(this,'date'),
                        value:inputHandler.date
                    }}
                />
            </View>
            <View>
                <Input
                    label="description"
                    textInputConfig={{
                        onChangeText:handleInput.bind(this,'description'),
                        value:inputHandler.description
                    }}
                />
            </View>
        </View>
    )
}