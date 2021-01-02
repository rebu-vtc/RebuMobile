import React from 'react'
import { Animated, Easing, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import { AppIcon, AppStyles } from "../AppStyles";
import { Configuration } from "../Configuration";
import DrawerContainer from "../Components/DrawerContainer";

const noTransitionConfig = () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
  });

const Stack = createStackNavigator();

const LoginStack = () => {
  return(
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="screen"
      options={({ navigation }) => ({
        headerTintColor: "red",
        headerTitle: styles.headerTitleStyle,
        cardStyle: { backgroundColor: "#FFFFFF" }
      })}
    >
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    </Stack.Navigator>
  );

}

const HomeStack = () =>{
  return(
    <Stack.Navigator
      initialRouteName= "Home"
      headerMode="screen"
      options={({ navigation }) => ({       
        headerLayoutPreset: 'center',
        cardStyle: { backgroundColor: "#FFFFFF"}
       })}
    >
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
}


const RebuTabNavigator = createBottomTabNavigator();

const TabNavigator = () =>{
  return(
  <RebuTabNavigator.Navigator
  >
    <RebuTabNavigator.Screen 
      name="Home"
      component={HomeStack}
      options={ ({ navigation }) => ({
          TabBarIcon: ({ focused, tintColor }) => {
            const { RouteName } = navigation.state;
            let iconName;
            if (RouteName === "Home") {
              iconName = AppIcon.images.home;
            }
    
            return (
              <Image 
                style={{
                  tintColor: focused ? AppStyles.color.tint : AppStyles.color.grey
                }}
                source={iconName}
              />
            );
          },
          initialLayout: {
            height: 300
          },
          tabBarOptions: {
            activeTintColor: AppStyles.color.tint, 
            inactiveTintColor: "gray",
            style: { 
              height: Configuration.home.tab_bar_height
            }
          }
        })
      }

    />
  </RebuTabNavigator.Navigator>
  );
}


 //Drawer stack
const RebuDrawer = createDrawerNavigator();

const DrawerStack = () => {
  return(
    <RebuDrawer.Navigator 
      initialRouteName="Tab"
      drawerPosition="left"
      drawerWidth='200'
      options={({ navigation }) => ({
        drawerWidth: 200,
        contentComponent: DrawerContainer
      })}
    >
      <RebuDrawer.Screen name="Tab" component={TabNavigator} />
    </RebuDrawer.Navigator>
  );
}

// Manifest of possible screens
const RootStack = createStackNavigator();

const RootNavigator = () => {
  return(
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        initialRouteName="DrawerStack"
        options={({ navigation }) => ({
          color: "black",
          transitionConfig:noTransitionConfig
        })}
      >
        <RootStack.Screen name="LoginStack" component={LoginStack} />
        {/*<RootStack.Screen name="DrawerStack" component={DrawerStack} />*/}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
/*const RootNavigator = createStackNavigator(
  {
    LoginStack: { screen: LoginStack },
    DrawerStack: { screen: DrawerStack }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "DrawerStack",
    transitionConfig: noTransitionConfig,
    navigationOptions: ({ navigation }) => ({
      color: "black"
    })
  }
);*/

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "black",
    flex: 1,
    fontFamily: AppStyles.fontName.main
  }
});

export default RootNavigator ;





