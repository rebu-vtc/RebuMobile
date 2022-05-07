import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppIcon, ThemeStyles } from '../../ThemeStyles';

const RebuTypeRow = (props) => {

    const { type } = props;

    const getImageUrl = (type) => {

        if(type === "Personnel") {
            return AppIcon.carTypes.prive;
        } else if (type === "Business"){
            return AppIcon.carTypes.business
        } else if (type === "Economic") {
            return AppIcon.carTypes.economic
        }
        return AppIcon.carTypes.prive;
    }

    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: type.selected ? ThemeStyles.color.lightGrey : ThemeStyles.color.white,
                borderBottomColor: type.selected ? ThemeStyles.color.lightGrey : ThemeStyles.color.mediumGrey }
            ]}
            onPress={() => console.log(type.id)}
        >
            <Image
                style={styles.image}
                source={getImageUrl()}
            />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{" "}
                    <Ionicons name="person" size={16} />
                    {" "}3
                </Text>
                <Text style={styles.time}>8.03PM droff off</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.price}>est. {type.price}€</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RebuTypeRow;
