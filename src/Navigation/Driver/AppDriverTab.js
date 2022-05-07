import React from 'react'
import { Image } from 'react-native'

import { AppIcon, ThemeStyles } from "../../ThemeStyles";
import AppDriverProfil from './AppDriverProfil'
import AppDriverHomeScreen from './AppDriverHomeScreen'
import NotificationDriver from '../../screens/driver/NotificationDriver'
import TrajetDriver from '../../screens/driver/TrajetDriver';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import TabBarCustomButton from '../../components/forms/TabBarCustomButton'
import CustomTabBar from '../../components/forms/CustomTabBar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


//tab navigator 
const AppDriverTab = () => {
  
  const DriverTabNavigator = createBottomTabNavigator(); // bottom tab

    return(
      <DriverTabNavigator.Navigator
        tabBarOptions={{
          showLabel: false,
          style:{
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0
          }
      }}
      tabBar={(props) => (
        <CustomTabBar 
          props={props}
        />
      )}
      >
        <DriverTabNavigator.Screen 
          name="DriverCourse" 
          component={AppDriverHomeScreen}
          options={{
            tabBarIcon: ({ focused }) => ( 
                <Image
                  source={AppIcon.images.course}
                  style={{ 
                    width: 25,
                    height: 25,
                    tintColor: focused ? ThemeStyles.color.tint: ThemeStyles.color.secondary
  
                  }} 
              /> 
            ),
            tabBarButton: (props) => (
            <TabBarCustomButton
             {...props}
            />
          )
          }}
        />
        <DriverTabNavigator.Screen
        name="Notifications"
        component={NotificationDriver}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name="bell" 
              style={{ tintColor: focused ? ThemeStyles.color.tint: ThemeStyles.color.secondary }} 
              size={25}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
             {...props}
            />
          )
        }}
      />
      <DriverTabNavigator.Screen 
          name="TrajetDriver" 
          component={TrajetDriver}
          options={{
            tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="road"
                  color={{ tintColor: focused ? ThemeStyles.color.tint: ThemeStyles.color.secondary }} 
                  size={25}
                /> 
            ),
            tabBarButton: (props) => (
              <TabBarCustomButton
              {...props}
              />
            )
          }}
        />
      <DriverTabNavigator.Screen 
          name="DriverProfil" 
          component={AppDriverProfil}
          options={{
            tabBarIcon: ({ focused }) => (
                <Image
                  source={AppIcon.images.user}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? ThemeStyles.color.tint: ThemeStyles.color.secondary
                  }} 
                /> 
            ),
            tabBarButton: (props) => (
              <TabBarCustomButton
              {...props}
              />
            )
          }}
        />
      </DriverTabNavigator.Navigator>
    );
  }
  


export default AppDriverTab