import React from 'react'
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import { createStackNavigator } from '@react-navigation/stack'

const AppWelcomeStack = createStackNavigator(); 

const AppWelcomeStackScreen = () => (
    <AppWelcomeStack.Navigator
        headerMode="none"
    >
        <AppWelcomeStack.Screen name="welcome" component={WelcomeScreen} />
        <AppWelcomeStack.Screen name="Login"   component={LoginScreen}/>
        <AppWelcomeStack.Screen name="Signup"  component={SignupScreen}/>
    </AppWelcomeStack.Navigator>
); 

export default AppWelcomeStackScreen;