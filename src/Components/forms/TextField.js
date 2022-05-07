import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { ThemeStyles } from '../../ThemeStyles';

const TextField = ({ label="", style, ...restOfProps }) => {

    return (  
        <View style={style}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <TextInput style={styles.input} {...restOfProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    labelContainer: {
        position: "relative",
        paddingHorizontal: 14,
        backgroundColor: 'white'
    },
    label: {
      fontFamily: 'Avenir-Heavy',
      fontSize: 16,
    },
    error: {
      marginTop: 4,
      marginLeft: 12,
      fontSize: 12,
      color: '#B00020',
      fontFamily: 'Avenir-Medium',
    },
  })
 
export default TextField;