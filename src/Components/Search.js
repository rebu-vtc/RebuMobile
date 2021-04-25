import React from 'react'; 
import { View, StyleSheet, Platform, TextInput } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_GOOGLE_KEY } from '../API/RebuAPI'
import { AppStyles, SIZES } from '../AppStyles'
import Ionicons from "react-native-vector-icons/Ionicons";

class Search extends React.Component {

    state = {
        searchFocused: false,
    }

    render() {
        const { searchFocused } = this.state
        const { onLocationSelected } = this.props

        const homePlace = {
            description: 'Home', 
            geometry: { location: { lat: 48.97182664860533, lng: 2.2565353706092726 } },
          };
          const workPlace = {
            description: 'Shop',  
            geometry: { location: { lat: 48.96468148557149, lng: 2.2552022110935686 } },
          };
        
        return(

            <View style={styles.searchBox}>
                <TextInput
                    placeholder="Recherche"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0}}
                />
                <Ionicons name="search" size={20} />
            
            {/*<GooglePlacesAutocomplete
                placeholder="Recherche"
                onPress={onLocationSelected}
                placeholderTextColor="#333"
                query={{ 
                    key: API_GOOGLE_KEY,
                    language: 'fr',   
                }}
                textInputProps={{ 
                    onFocus: () => { this.setState({ searchFocused: true }) },
                    onBlur: () => { this.setState({ searchFocused: false }) },
                    autoCapitalize: "none",
                    autoCorrect: false
                }}
                //listViewDisplayed={searchFocused}
                fetchDetails
                enablePoweredByContainer={false}
                predefinedPlaces={[homePlace, workPlace]}
                styles={{ 
                    container: {
                        position: "absolute",
                        top: Platform.select({ ios: 60, android: 40 }),
                        width: "100%",
                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: "transparent",
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        borderRadius: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginTop: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowOffset: { x: 0, y: 0 },
                        shadowRadius: 15,
                        borderWidth: 1,
                        borderColor: '#DDD',
                        fontSize: 18, 

                    },
                    listView: {
                        borderWidth: 1,
                        borderColor: '#DDD',
                        backgroundColor: '#FFF',
                        marginHorizontal: 20,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1, 
                        shadowOffset: { x: 0, y: 0 },
                        shadowRadius: 15,
                        marginTop: 10,
                    },
                    description: {
                        fontSize: 16,
                    },
                    row: {
                        padding: 20,
                        height: 58
                    }, 

                }}
            />*/}
           </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5, 
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    }
})


export default Search;