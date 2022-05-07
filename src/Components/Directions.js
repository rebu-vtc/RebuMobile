import React from 'react';
import MapViewDirections from 'react-native-maps-directions'
import { PLACE_KEY } from '../services/APIKey'


const Directions = ( { destination, origin, onReady}) => (
    
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey={PLACE_KEY}
        strokeWidth={5}
        strokeColor="#222"
        optimizeWaypoints={true}
    />
)
    

export default Directions;