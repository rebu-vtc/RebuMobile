import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import Mymap from '../../Components/Mymap'
import ReaminBottom from '../../Components/ReaminBottom'
class HomeScreen extends React.Component {

    render() {
        return(
            <View style={styles.containerHome}>
                <Mymap/>
                <ReaminBottom />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
    },
    
    
})

export default HomeScreen 