import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate("DestinationScreen");
    }

    return (
        
        <TouchableWithoutFeedback onPress={goToSearch}> 
            <View style={styles.searchBox}>
                 <Text style={styles.inputText}>Où allez-vous?</Text> 
            </View>  
        </TouchableWithoutFeedback>
        
    )
};

export default HomeSearch;

