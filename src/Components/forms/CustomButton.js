import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { ThemeStyles } from '../../ThemeStyles';

const CustomButton = ({ label, buttonColor, onPress, buttonText="", buttonContainer="" }) => {

    return ( 
        <View style={styles.containerView}>
            <TouchableOpacity onPress={onPress}>   
            <LinearGradient
                colors={[buttonColor, buttonColor]}
                style={ buttonContainer ? buttonContainer : styles.buttonContainer}   
            >
                <Text style={ buttonText ? buttonText : styles.buttonText} >{label}</Text>  
            </LinearGradient>
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    containerView:{ 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonText: {
        color: ThemeStyles.color.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: 200,
        backgroundColor: ThemeStyles.color.tint,
        borderRadius: ThemeStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default CustomButton;