import React from 'react';
import { 
    StyleSheet, 
    TextInput,
    View,
    TouchableOpacity
  } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

const Field = ({ children, showPassword=false, isPassword=false, onPress, ...restOfProps }) => {
    return ( 
        <View style={styles.action}> 
            { children }
            <TextInput  {...restOfProps} />   
            { isPassword && (
                <TouchableOpacity onPress={onPress}> 
                <Feather
                    name={showPassword ? "eye-off" : "eye"}
                    color='grey'
                    size={20}
                />
                </TouchableOpacity>
            )}
        </View>
     );
}

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2', 
        paddingBottom: 5,
    },
    TextInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});
 
export default Field;