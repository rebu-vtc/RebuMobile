import React from 'react'
import { Animated, Easing, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabNavigatorScreen from './User/AppTabNavigatorScreen'
import AppDriverTab from './Driver/AppDriverTab'
import AppWelcomeStackScreen from './AppWelcomeStackScreen'



const noTransitionConfig = () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
});


const RootStack = createStackNavigator();

/*const DrawerNavigator = () => {
  <RebuDrawer.Navigator>
    <RebuDrawer.Screen name="" component={} />
  </RebuDrawer.Navigator>
}*/

// navigation

const RootNavigator = () => {
  return(
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        //initialRouteName="Welcome"
        options={({ navigation }) => ({
          color: "black",
          transitionConfig:noTransitionConfig
        })}
      >
        {/*<RootStack.Screen name="LoginStack" component={AppWelcomeStackScreen}/>
        <RootStack.Screen name="TabNavigator" component={AppTabNavigatorScreen}/>*/}
        <RootStack.Screen name="AppDriverTab" component={AppDriverTab}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator ;





