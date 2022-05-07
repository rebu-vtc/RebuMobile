import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { ThemeStyles } from '../../../ThemeStyles';




const PlaceRow = ({ data }) => (
    
        <View style={styles.row}>
            <View style={[styles.iconContainer, { backgroundColor: (data.description === "Home" || data.description === "Work") ? ThemeStyles.color.lightBlue : "#A4A4A4" } ]}>
                {(data.description === "Home" || data.description === "Work")
                ? (data.description === "Work" ? <Entypo name="briefcase" size={20} color={ThemeStyles.color.white}/> : <Entypo name="home" size={20} color={ThemeStyles.color.white}/>)
                : <Entypo name="location-pin" size={20} color={ThemeStyles.color.white} />}
            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    );

 
export default PlaceRow;