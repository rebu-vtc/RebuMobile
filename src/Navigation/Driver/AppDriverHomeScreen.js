import React from 'react'
import DriverHomeScreen from "../../Screens/Driver/DriverHomeScreen";
import { createStackNavigator } from '@react-navigation/stack'

const HomeDriveStack = createStackNavigator(); // stack for home
const Stack = createStackNavigator();


const AppDriverHomeScreen = () => (
    <HomeDriveStack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="HomeDriver" component={DriverHomeScreen}/>
    </HomeDriveStack.Navigator>
)

export default AppDriverHomeScreen