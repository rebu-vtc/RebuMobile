import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeStyles } from '../../ThemeStyles';

const Card = ({ children , style }) => {
    return ( 
        <View style={styles.card}>
            <View style={ style ? style : styles.cardContent}>
                { children }
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333', 
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        padding: 30, 
        fontSize: 24,
        flexDirection:'row'
    }
}); 
export default Card;