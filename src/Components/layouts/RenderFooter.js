import React from 'react';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const RenderFooter = ({ style, children }) => {
    return ( 
        <Animatable.View 
            animation="fadeInUpBig"
            iterationCount={1}
            style={style}
        >
            {children}
        </Animatable.View>
     );
}
 
export default RenderFooter;