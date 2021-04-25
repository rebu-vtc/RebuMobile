import React, { Component }from 'react';
import {Text, View, StyleSheet, StatusBar } from 'react-native';
import { GOOGLE_KEY } from '../API/RebuAPI'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class HomeSearch extends React.Component {

  render() {

    return(
      <View style={styles.containerHomeSearch}>
        <GooglePlacesAutocomplete
          placeholder='Recherche'
          placeholderTextColor="#333"
          onPress={ (data, details = null) => {
            console.log(data, details)
          }}
          query={{
            key: GOOGLE_KEY,
            language: 'en',
          }}
          styles={{
            textInputContainer:{
              width: '100%',
            },
            destination: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              
            }
          }}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerHomeSearch: {
    flex: 1,
    padding: 10,
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: '#ecf0f1',
    height: '100%',
  }
})
export default HomeSearch