import React from 'react'
import HomeScreen from "../../Screens/User/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack'

const HomStack = createStackNavigator(); // stack for home
const Stack = createStackNavigator();


const AppHomeStackScreen = () => (
    <HomStack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="Home" component={HomeScreen}/>
    </HomStack.Navigator>
)

export default AppHomeStackScreen