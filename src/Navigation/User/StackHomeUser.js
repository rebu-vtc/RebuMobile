import React from 'react';
import HomeUser from '../../screens/user/HomeUser/index';
import DestinationScreen from '../../screens/user/DestinationScreen'
import TripsScreen from '../../screens/user/TripsScreen/index';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentScreen from '../../screens/user/PaymentScreen';

const HomeStack = createStackNavigator();

const StackHomeUser = ({ navigation }) => ( 
    <HomeStack.Navigator
        headerMode="none"
    >
        <HomeStack.Screen name={"Home"} component={HomeUser} />
        <HomeStack.Screen name={"DestinationScreen"} component={DestinationScreen} />
        <HomeStack.Screen name={"TripsScreen"} component={TripsScreen} />
        <HomeStack.Screen name="PaymentScreen" component={PaymentScreen} />
    </HomeStack.Navigator>
);

export default StackHomeUser;