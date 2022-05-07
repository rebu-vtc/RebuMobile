import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { AppIcon } from '../../ThemeStyles';
import cars from "../../assets/data/cars";
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Ionicons'

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 48.9691706;
const LONGITUDE = 2.2344721;

const HomeMap = () => {

    const [region, SetRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    const [error, setError] = useState('');

    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            
        SetRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        })
        console.log(region)
        })

    }, [])
    const getImageUrl = (type) => {

        if(type === "Personnel") {
            return AppIcon.carTypes.prive;
        } else if (type === "Business"){
            return AppIcon.carTypes.business
        } else if (type === "Economic") {
            return AppIcon.carTypes.economic
        }
        return AppIcon.carTypes.prive;
    }

    return ( 
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={region}
            showUserLocation
        >
            <Marker coordinate={region}
                image={AppIcon.images.car}
                style={{ height: "15%", width: "25%" }}
            >
                <Icon
                    name="md-location-outline"
                    color="#05375a"
                    size={20}
                    style={{ paddingVertical: 16 }}
                />
              
          </Marker>
            {cars.map( (car) => (
                <Marker
                    key={car.id}
                    coordinate={{ latitude: car.latitude, longitude: car.longitude }}
                >
                    <Image style={[styles.marker, { transform: [{ rotate: `${car.heading}deg` }] }]} source={getImageUrl(car.type)} />
                </Marker>
            ))}
        </MapView>
     );
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    marker: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    }
});

//https://www.youtube.com/watch?v=bg-U0xZwcRk&list=PL85ITvJ7FLojBfY7TifCq7P417AZdsP4k&index=13
 
export default HomeMap;