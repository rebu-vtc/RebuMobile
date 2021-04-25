import React from 'react';
import MapViewDirections from 'react-native-maps-directions'
import { View } from 'react-native'
import { API_GOOGLE_KEY } from '../API/RebuAPI'

const Directions = ( { destination, origin, onReady}) => (
    
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey={API_GOOGLE_KEY}
        strokeWidth={5}
        strokeColor="#222"
        optimizeWaypoints={true}
    />
)
    

export default Directions;