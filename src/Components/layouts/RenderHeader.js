import React from 'react';
import { View, StyleSheet, Text  } from 'react-native';
import { ThemeStyles } from '../../ThemeStyles';

const RenderHeader = ({ label, header="", text_header=""}) => {
    return ( 
        <View style={header ? header : ""}>
            <Text style={text_header ? text_header : styles.text_header}> {label}</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({ 
    text_header:{
        color: ThemeStyles.color.white,
        fontWeight: 'bold',
        fontSize: 30,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },

});

export default RenderHeader;