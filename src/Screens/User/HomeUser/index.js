import React from 'react';
import { View } from 'react-native';
import HomeMap from '../../../components/HomeMap/index';
import HomeSearch from '../../../components/HomeSearch/index'
import styles from './styles';

const HomeUser = () => {

    return ( 
      <View>  
        <HomeMap />
        <HomeSearch />
      </View>
      
    );
}

 
export default HomeUser;