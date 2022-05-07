import React from 'react'
import LoginScreen from "../screens/LoginScreen";
import SignUp from "../screens/SignUp";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createStackNavigator } from '@react-navigation/stack'

const AppWelcomeStack = createStackNavigator(); 

const StackWelcomeScreen = () => (
    <AppWelcomeStack.Navigator
        headerMode="none"
    >
        <AppWelcomeStack.Screen name="welcome" component={WelcomeScreen} />
        <AppWelcomeStack.Screen name="Login"   component={LoginScreen}/>
        <AppWelcomeStack.Screen name="Signup"  component={SignUp}/>
    </AppWelcomeStack.Navigator>
); 

export default StackWelcomeScreen;