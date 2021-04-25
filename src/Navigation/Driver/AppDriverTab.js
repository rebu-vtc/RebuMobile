import React from 'react'
import { Animated, Easing, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { AppIcon, AppStyles } from "../../AppStyles";
import { isIphoneX } from 'react-native-iphone-x-helper';
import AppDriverProfil from './AppDriverProfil'
import AppDriverHomeScreen from './AppDriverHomeScreen'
import { createBottomTabNavigator, BottomTabBar  } from '@react-navigation/bottom-tabs'

//custom button of tabBar
const TabBarCustomeButton = ({ accessibilityState, children, onPress }) =>{
    var isSelected = accessibilityState.selected
  
    if(isSelected) {
      return (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
              <View style={{ flex: 1, backgroundColor: AppStyles.color.white }}></View>
              <Svg
                  width={75}
                  height={61}
                  viewBox="0 0 75 61"
              >
                  <Path
                      d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                      fill={AppStyles.color.white}
                  />
              </Svg>
              <View style={{ flex: 1, backgroundColor: AppStyles.color.white }}></View>
          </View>
  
          <TouchableOpacity
              style={{
                  top: -22.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: AppStyles.color.white
              }}
              onPress={onPress}
          >
              {children}
          </TouchableOpacity>
        </View>
      )
    }else {
      return(
        <TouchableOpacity
            style={{ 
              flex: 1,
              height: 60,
              backgroundColor:AppStyles.color.white,
            }}
            activeOpacity={1}
            onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      )
    }
  }
  
  const CustomTabBar = (props) => {
   
      if (isIphoneX()) {
        return (
          <View>
            <View 
              style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 30,
                backgroundColor: AppStyles.color.white
              }}
            ></View>
            <BottomTabBar {...props.props} />
          </View>
        )
      } else {
        return (
          <BottomTabBar
            { ...props.props}
          />
        )
      }
      
    
}

const DriverTabNavigator = createBottomTabNavigator(); // bottom tab

//tab navigator 
const AppDriverTab = () => {
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
                    tintColor: focused ? AppStyles.color.tint: AppStyles.color.secondary
  
                  }} 
              /> 
            ),
            tabBarButton: (props) => (
            <TabBarCustomeButton
             {...props}
            />
          )
          }}
        />
        <DriverTabNavigator.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
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
                    tintColor: focused ? AppStyles.color.tint: AppStyles.color.secondary
                  }} 
                /> 
            ),
            tabBarButton: (props) => (
              <TabBarCustomeButton
              {...props}
              />
            )
          }}
        />
      </DriverTabNavigator.Navigator>
    );
  }
  


export default AppDriverTab