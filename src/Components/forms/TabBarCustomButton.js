import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { ThemeStyles } from '../../ThemeStyles';

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected
  
    if(isSelected) {
      return (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
              <View style={{ flex: 1, backgroundColor: ThemeStyles.color.white }}></View>
              <Svg
                  width={75}
                  height={61}
                  viewBox="0 0 75 61"
              >
                  <Path
                      d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                      fill={ThemeStyles.color.white}
                  />
              </Svg>
              <View style={{ flex: 1, backgroundColor: ThemeStyles.color.white }}></View>
          </View>
  
          <TouchableOpacity
              style={styles.tabMenu}
              onPress={onPress}
          >
              {children}
          </TouchableOpacity>
        </View>
      )
    }else {
      return(
        <TouchableOpacity
            style={styles.tabMenuColor}
            activeOpacity={1}
            onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      )
    }

}

const styles = StyleSheet.create({
    tabMenu: {
        top: -22.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: ThemeStyles.color.white
    },
    tabMenuColor: {
        flex: 1,
        height: 60,
        backgroundColor:ThemeStyles.color.white,
    }
})
 
export default TabBarCustomButton;