import React, { useCallback, useMemo, useRef } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Entypo from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import {Text, TouchableRipple} from 'react-native-paper'
//https://www.youtube.com/watch?v=sIRcN0MeZVU

const ReaminBottom = () => {

    // ref
  const bottomSheetRef = useRef(null);
  const windowHeight = Dimensions.get('window').height;

  // variables
  const snapPoints = useMemo(() => [128, '50%', windowHeight - 200]);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

    return (
      <View style={styles.BottomContainer}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          
        >
          <View style={styles.contentContainer}>
            
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Entypo name="home" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Home</Text>
              </View>
            </TouchableRipple>

            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialIcons name="work" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Work</Text>
              </View>
            </TouchableRipple>
               
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <FontAwesome5 name="map-pin" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Place favoris</Text>
              </View>
            </TouchableRipple>
          </View>
        </BottomSheet>
      </View>
    );
     
  
}

const styles = StyleSheet.create({
  BottomContainer: {
    flex: 1,  
    padding: 24,
    //backgroundColor:'#e3e4e6'
  },
  contentContainer: {
    flex: 1,
  },
  menuItem:{
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
  }
});
export default ReaminBottom