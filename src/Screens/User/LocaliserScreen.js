import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';
import { AppStyles, SIZES, AppIcon, FONTS } from '../../AppStyles'

const LocaliserScreen = () => {

  renderHeader = () =>(

    <View style={styles.header}>
      <View>

      </View>
      <View style={styles.header2}>
        <Text>White bloc</Text>
      </View>
    </View>
  );
  
  renderFooter = () =>(

    <View style={styles.footer}>

    </View>
  );
    return (
        <View style={styles.container}>
          {renderHeader()}
          {renderFooter()}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: AppStyles.color.tint
  },
  footer: {
    flex: 3,
    backgroundColor: AppStyles.color.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: AppStyles.color.tint
  },
  header2: {
    backgroundColor: AppStyles.color.white,
    paddingVertical: 50,
    borderRadius: 20
  }
})
export default LocaliserScreen