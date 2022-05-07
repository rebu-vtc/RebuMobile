import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { ThemeStyles } from '../../ThemeStyles';
import API_GOOGLE_KEY from '../../services/APIKey';


const RouteMap = ({ origin, destination }) => {

    const originLoc = origin ? {
            latitude: origin.details.geometry.location.lat,
            longitude: origin.details.geometry.location.lng,
        } : { latitude: 48.976200, longitude: 2.254705 };
    const destinationLoc = destination ? {
            latitude: destination.details.geometry.location.lat,
            longitude: destination.details.geometry.location.lng,
        } : { latitude: 48.99613904696866, longitude: 2.2589559170628712 };

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation
            initialRegion={{
                latitude: originLoc.latitude,
                longitude: originLoc.longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
            >
                <MapViewDirections
                    origin={originLoc}
                    destination={destinationLoc}
                    strokeWidth={3}
                    strokeColor={ThemeStyles.color.black}
                    apikey={API_GOOGLE_KEY}
                />
                <Marker
                    coordinate={originLoc}
                    title={"Origin"}
                >
                    <View style={styles.markerRound}>
                        <View style={styles.markerCircle} />
                    </View>
                </Marker>
                <Marker
                    coordinate={destinationLoc}
                    title={"Destination"}
                >
                    <View style={styles.markerRectangle}>
                        <View style={styles.markerCircle} />
                    </View>
                </Marker>
        </MapView>
    )
};

export default RouteMap;

const styles = StyleSheet.create({
    map: {    
        ...StyleSheet.absoluteFillObject,
    },
    markerRound: {
        alignItems: "center",
        justifyContent: "center",
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: ThemeStyles.color.black,
    },
    markerRectangle: {
        alignItems: "center",
        justifyContent: "center",
        width: 15,
        height: 15,
        backgroundColor: ThemeStyles.color.black,
    },
    markerCircle: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: ThemeStyles.color.white
    }
});
