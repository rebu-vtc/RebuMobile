import React from 'react'
import { Animated, Easing, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigatorUser from './User/TabNavigatorUser'
import AppDriverTab from './Driver/AppDriverTab'
import StackWelcomeScreen from './StackWelcomeScreen'
import DrawerContainer from '../components/DrawerContainer';



const noTransitionConfig = () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
});






// navigation

const RootNavigator = () => {
  const RootStack = createStackNavigator();

  return(
      <RootStack.Navigator
        headerMode="none"
        //initialRouteName="Welcome"
        options={({ navigation }) => ({
          color: "black",
          transitionConfig:noTransitionConfig
        })}
      >
        <RootStack.Screen name="LoginStack" component={StackWelcomeScreen}/>
        <RootStack.Screen name="TabNavigator" component={TabNavigatorUser}/>
        {/*<RootStack.Screen name="AppDriverTab" component={AppDriverTab}/>*/}
      </RootStack.Navigator>
  );
}

const RebuDrawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => (
  <NavigationContainer>
    <RebuDrawer.Navigator
      drawerContent={props => <DrawerContainer {...props} /> }
    >

        <RebuDrawer.Screen name="RootNavigators" component={RootNavigator} />
    </RebuDrawer.Navigator>
  </NavigationContainer>

)
export default DrawerNavigator ;








