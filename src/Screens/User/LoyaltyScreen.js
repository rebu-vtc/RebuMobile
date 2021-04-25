import React from 'react'
import { SafeAreaView, 
    Text, 
    StyleSheet, 
    View,
    Platform,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} 
from 'react-native';

import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { AppIcon } from '../../AppStyles';

const MIN_HEIGHT = Platform.OS === 'android' ? 55 : 90;
const MAX_HEIGHT = 350;

const LoyaltyScreen = () =>  {

      
        return (
            <ImageHeaderScrollView
              maxHeight={MAX_HEIGHT}
              minHeight={MIN_HEIGHT}
              renderForeground={() => (
                <Image source={AppIcon.images.user} style={styles.image}/>
              )}
            >
  
                <TriggeringView onHide={() => console.log("text hidden")}>
                  <View>
                     <Text>Scroll Me!</Text>
                  </View>
                </TriggeringView>
             
            </ImageHeaderScrollView>
        );
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    }
})

export default LoyaltyScreen