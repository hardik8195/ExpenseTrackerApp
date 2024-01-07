import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function AddButton(){
    const navigaton = useNavigation()
    return(
        <Pressable 
        onPress={()=>navigaton.navigate("manageExpense")}
        style={styles.icon}>
           <AntDesign name="plus" size={24}/>
        </Pressable>
    )
}
const styles =StyleSheet.create({
    icon:{
        marginHorizontal:20
    }
})