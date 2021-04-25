import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_GOOGLE_KEY } from '../API/RebuAPI'
import PlacesInput from 'react-native-places-input';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Fontisto from "react-native-vector-icons/Fontisto"
import data from '../API/data'
import data2 from '../API/data2'
import data3 from '../API/data3'

const DestinationSearch = () => {
    
    /*const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        console.warn('useEffect is called');
        if(originPlace && destinationPlace)
        {
            console.warn('Redirect to results');
        }
    }, [originPlace, destinationPlace])*/

    return (

        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.card}>
                    <View style={styles.drop}>
                        <Text style={styles.dropText}>Votre destination</Text>
                        <TouchableOpacity>
                            <Feather name="x" size={24} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.search}> 
                        <View style={styles.inptWrapper}>
                            <View style={styles.pinkDot} />
                            <TextInput placeholder="Quel est votre point d'arrivée ?"/>
                        </View>
                        <View>
                            <Feather name="heart" size={20} />
                        </View>
                    </View>
                    <View style={styles.bottomCard}>
                        <View style={styles.bottomCardPin}>
                            <Fontisto 
                                name="map-marker-alt" 
                                size={20} 
                                style={styles.bottomCardIcon} 
                            />
                            <Text style={styles.bottomCardText}>
                                Appuyez pour sélectionner sur la carte
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.buttonCircle}>
                            <Feather name="arrow-right" 
                                size={20} 
                                style={{ color: '#fff'}} 
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.contentWrapper}>
                <Text style={styles.bigTitle}>Lieux préférés</Text>
                <View style={{ 
                    marginBottom: 25,
                }}>
                    {data2.map(data =>{
                        return(
                            <View key={data.id} style={styles.favoriteWrapper}>
                                <View style={styles.favoriteWrapper2}>
                                    <Fontisto 
                                        name="heart" size={18} 
                                        style={{ color: '#04dca0', marginRight: 10}} 
                                    />
                                    <View>  
                                        <Text style={styles.favoriteTitle}>{data.title}</Text>
                                        <Text style={styles.favoriteSubtitle}>{data.subtitle}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Feather 
                                        name="minus-circle" 
                                        size={24} 
                                        style={{ color: '#ff909a' }}
                                    />
                                </View>
                            </View>
                        )
                    })}
                </View>
                    <Text style={styles.bigTitle}>Lieux récemment visités</Text>
                    {
                        data3.map(data =>  {
                            return (
                                <View key={data.id} style={styles.recentWrapper}>
                                    <MaterialCommunityIcons
                                        name="clock-time-five"
                                        size={24}
                                        style={{ color: '#80828b', marginRight: 10,}}
                                    />
                                    <Text style={styles.recentText}>{data.title}</Text>
                                </View>
                            )
                        })
                    }
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", 
    },
    card: {
        padding: 20,
        marginHorizontal: 10,
        borderColor: "#efefef",
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 30,
    },
    drop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropText: {
        fontWeight: 'bold',
        color: '#ff5563',
    },
    search: {
        marginVertical: 15,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#efeff0',
        borderWidth: 2,
    },
    inptWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pinkDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#ff4858",
        marginRight: 10,
    },
    bottomCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    bottomCardPin:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomCardIcon:{
        color: '#ff4858',
        marginRight: 10,
    },
    bottomCardText:{
        color: '#92939b',
        fontWeight: '500',
        fontSize: 13,
    },
    buttonCircle:{
        width:50,
        height: 50,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    contentWrapper:{
        paddingHorizontal: 20,
        marginTop: 40,
    },
    bigTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#404151',
        marginBottom: 20,
    },
    favoriteWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    favoriteWrapper2:{
        flexDirection: 'row',
    },
    favoriteTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#555664',
        marginBottom: 5
    },
    favoriteSubtitle:{
        color: '#a9abb0',
    },
    recentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    recentText: {
        fontWeight: '500',
        fontSize: 14,
        color: '#80828b'
    }
    

})
export default DestinationSearch