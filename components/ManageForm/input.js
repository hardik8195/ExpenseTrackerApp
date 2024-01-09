import { View,Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Input({label,textInputConfig}){
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig} />
        </View>
    )
}