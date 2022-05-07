import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import RouteMap from '../../../components/RouteMap/index';
import { useNavigation } from "@react-navigation/native";
import RebuTypes from '../../../components/RebuTypes/index';
import styles from './styles';
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeStyles } from '../../../ThemeStyles';

const TripsScreen = () => {

    const route = useRoute(); 
    const { originPlace, destinationPlace } = route.params;
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return ( 
        <View>
            <Pressable style={styles.floatTopButton} onPress={goBack}>
                <Ionicons name="arrow-back" size={30} color={ThemeStyles.color.blackGrey} />
            </Pressable>
            <View>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>
            <View style={styles.bottomContainer}>
                <RebuTypes />
            </View>
        </View>
    );
}
 
export default TripsScreen;