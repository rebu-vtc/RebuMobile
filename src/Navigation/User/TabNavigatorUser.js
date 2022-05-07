import React from 'react';
import { Image } from 'react-native'
import LoyaltyScreen from "../../screens/user/LoyaltyScreen";
import { AppIcon, ThemeStyles } from "../../ThemeStyles";
import StackProfilScreen from './StackProfilScreen'
import StackHomeUser from './StackHomeUser'
import TabBarCustomButton from '../../components/forms/TabBarCustomButton'
import CustomTabBar from '../../components/forms/CustomTabBar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const RebuTabNavigator = createBottomTabNavigator(); // bottom tab

//tab navigator
const TabNavigatorUser = () =>  ( 

    <RebuTabNavigator.Navigator
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
        <RebuTabNavigator.Screen 
          name="Course" 
          component={StackHomeUser}
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
        <RebuTabNavigator.Screen 
          name="Loyalty" 
          component={LoyaltyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
                <Image
                  source={AppIcon.images.loyalty}
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
      <RebuTabNavigator.Screen 
          name="profil" 
          component={StackProfilScreen}
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
      </RebuTabNavigator.Navigator>
);

 
export default TabNavigatorUser;