import React from 'react'
import { View, FlatList } from 'react-native'
import RebuTypeRow from '../RebuTypeRow/index';
import styles from './styles';
import typesData from "../../assets/data/types";

const RebuTypes = () => {

    const confirm = () => {
        console.log("Confirmed");
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={typesData}
                renderItem={({ item }) => <RebuTypeRow type={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default RebuTypes;
