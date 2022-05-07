import React from 'react'
import HomeDriver from "../../screens/driver/HomeDriver";
import { createStackNavigator } from '@react-navigation/stack'

const HomeDriveStack = createStackNavigator(); // stack for home
const Stack = createStackNavigator();


const AppHomeDriver = () => (
    <HomeDriveStack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="HomeDriver" component={HomeDriver}/>
    </HomeDriveStack.Navigator>
)

export default AppHomeDriver