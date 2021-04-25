import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import Mymap from '../../Components/Mymap'

class DriverHomeScreen extends React.Component {

    render() {
        return(
            <View style={styles.containerHome}>
                <Mymap/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
    }, 
})

export default DriverHomeScreen 