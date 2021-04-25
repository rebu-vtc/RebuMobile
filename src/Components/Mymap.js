import * as React from 'react'
import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import { AppIcon } from '../AppStyles'
import Geolocation from '@react-native-community/geolocation';
import Search from './Search'
import haversine from "haversine";
import Directions from './Directions';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 48.9691706;
const LONGITUDE = 2.2344721;

class Mymap extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        destination: null,
        error: null,
        routeCoordinates: [], // polyline
        distanceTravelled: 0, // constient la distance parcourue en live
        prevLatLng: {} // contient la valeur precedente de latitude et longitude
    }
      
  }
  
  handleAdresse = (text) => {
    this.setState({ adresse: text })
  }

  _textinput() {
      return(
        
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                  source={AppIcon.images.avatarC}
                  style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25
                  }}
              />
          </View>
          
      );
  }
  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };
  /**
   *
   *
   * @memberof HomeScreen
   */
  componentDidMount () { // utiliser lorsque le compnent a fini de se monter
    console.log('monter')
    /*Geolocation.getCurrentPosition(
      position => {
          //console.log(position.coords.latitude+' '+position.coords.longitude)
          this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null
          });
      },
      error => this.setState({ error: error.message }), // error
      {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
      }
    );
    
    Geolocation.watchPosition(
      position => {
        console.log(position)
        //console.log(position.coords)
        const { latitude, longitude } = position.coords;
        const { routeCoordinates, distanceTravelled } = this.state;
        const newCoordinate = { 
          latitude, 
          longitude 
        };

        this.setState({ 
            latitude,
            longitude,
            routeCoordinates: routeCoordinates.concat([newCoordinate]),
            distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
            prevLatLng: newCoordinate
        });
          
      },
      error => console.log(error),
      {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 10
      }
    );*/
  }

  getMapRegion = () => ({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
  });

  handleLocationSelected = (data, { geometry }) => {

    const { location: { lat: latitude, lng: longitude } } = geometry;

    console.log(data);

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      }
    })
  }


  render() {
    const { destination } = this.state;
    console.log('rendu')
    return (
      <View style={styles.myMapcontainer}>
        <MapView 
            provider={PROVIDER_GOOGLE} 
            style={styles.map} region={this.getMapRegion()}
            showUserLocation
            followUserLocation
            loadingEnabled
            ref={el => this.mapView = el}
        >
          {/*<Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />*/}
          <Marker coordinate={this.getMapRegion()}
            image={AppIcon.images.car}
            style={{ height: 35, width: 35 }}
          >
              
          </Marker>
            { destination && (
              <Directions
                origin={this.getMapRegion()}
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

        <Search onLocationSelected={this.handleLocationSelected} />
        {/*<View style={styles.buttonContainer}>
            <Text style={styles.bottomBarContent}>
                {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
        </View>*/}
      </View>
    );

  }  

  
}

const styles = StyleSheet.create({
  myMapcontainer: {
    ...StyleSheet.absoluteFillObject,
},

map: {
 ...StyleSheet.absoluteFillObject,
}


})
   
export default Mymap