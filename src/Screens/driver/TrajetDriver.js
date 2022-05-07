import React, { useEffect, useState } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    Image,
    FlatList 
} 
from 'react-native';
import { AppIcon, globalStyles } from '../../ThemeStyles';
import Card from '../../components/layouts/Card';

const TrajetDriver = () => {
   
    const [loyal, setLoyal] = useState([
        {content: 'Lorem ipsum dolor sit amet', id: '1'},
        {content: 'Lorem ipsum dolor sit amet', id: '2'},
        {content: 'Lorem ipsum dolor sit amet', id: '3'},
        {content: 'Lorem ipsum dolor sit amet', id: '4'},
        {content: 'Lorem ipsum dolor sit amet', id: '5'},
        {content: 'Lorem ipsum dolor sit amet', id: '6'},
        {content: 'Lorem ipsum dolor sit amet', id: '7'},
        ])
    
    return (
        <View style={globalStyles.constainer}>
            <Text style={globalStyles.title}>Détails du trajet</Text>
            <FlatList 
            data={loyal}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={ () => console.log(item.id)}>
                <Card>
                    <Text style={globalStyles.titleText}>{ item.content }</Text>
                </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
    
}
 
export default TrajetDriver;