import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { ThemeStyles, AppIcon } from '../../ThemeStyles';
import Directions from '../../components/Directions'

const HomeDriver = () => {

    const [destination, setDestination] = useState(null);
    const [getMapRegion, SetMapRegion] = useState({
      latitude: LONGITUDE,
      longitude: LATITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    })
  
    
  
      const handleLocationSelected = (data, { geometry }) => {
    
        const { location: { lat: latitude, lng: longitude } } = geometry;
    
        console.log(data);
    
      }
  
      return ( 
          <View style={styles.myMapcontainer}>
              <MapView 
              provider={PROVIDER_GOOGLE} 
              style={styles.map} region={getMapRegion()}
              showUserLocation
              followUserLocation
              loadingEnabled
              ref={el => this.mapView = el}
          >
            <Marker coordinate={getMapRegion()}
              image={AppIcon.images.car}
              style={{ height: 35, width: 35 }}
            >
                
            </Marker>
              { destination && (
                <Directions
                  origin={getMapRegion()}
                  destination={destination}
                  onReady={ result => {
                    this.mapView.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: 50,
                        left: 50,
                        top: 50,
                        bottom: 50,
                      }
                    });
                  }}
                />
              ) }
          </MapView>
  
          <Search onLocationSelected={handleLocationSelected} />
        </View>
      );
  }
  
  const styles = StyleSheet.create({
      containerHome: {
          flex: 1,
      },
      myMapcontainer: {
          ...StyleSheet.absoluteFillObject,
      },
      
      map: {
       ...StyleSheet.absoluteFillObject,
      }
  });    


export default HomeDriver 

