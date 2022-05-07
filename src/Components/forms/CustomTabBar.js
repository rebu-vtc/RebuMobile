import React from 'react';
import { StyleSheet, View } from 'react-native'
import { ThemeStyles } from "../../ThemeStyles";
import { isIphoneX } from 'react-native-iphone-x-helper';
import {  BottomTabBar  } from '@react-navigation/bottom-tabs'

    const CustomTabBar = (props) => {
   
        if (isIphoneX()) {
          return (
            <View>
              <View style={styles.styleButton}></View>
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

  const styles = StyleSheet.create({
      styleButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 30,
        backgroundColor: ThemeStyles.color.white
      }
  })

 
export default CustomTabBar;