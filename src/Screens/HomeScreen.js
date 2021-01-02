import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Configuration } from '../Configuration'
import { AppStyles } from '../AppStyles'


class HomeScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Welcome</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: Configuration.home.listing_item.offset
    }, 
    title: {
        fontFamily: AppStyles.fontName.bold,
        fontWeight: "bold",
        color: AppStyles.color.title,
        fontSize:25
    },
    userPhoto: {
        width:40,
        height: 40,
        borderRadius: 20,
        marginLeft: 5
    }

})

export default HomeScreen