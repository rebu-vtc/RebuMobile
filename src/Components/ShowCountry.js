import React, { useContext } from 'react';
import ModalContext from './contexts/ModalContext';
import SelectedAreaContext from './contexts/SelectedAreaContext'; 
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeStyles } from '../ThemeStyles';

const ShowCountry = () => {
    

    const { selectedArea } = useContext(SelectedAreaContext);
    const { setModalVisible } = useContext(ModalContext); 

    return ( 
        <TouchableOpacity 
            style={styles.countryCode}
            onPress={ () => setModalVisible(true)}
        >
            <View style={{ justifyContent: 'center'}}>
                <Image
                source={{ uri: selectedArea?.flag }}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                }}
                />
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <AntDesign 
                name="down"
                size={10}
                color={ThemeStyles.color.black}
                style={{ width: 10, height: 10 }}
                />
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Text>{selectedArea?.callingCode}</Text>
            </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({

    countryCode: {
        width: 100,
        height: 50, 
        marginHorizontal: 5, 
        borderBottomColor: ThemeStyles.color.white,
        borderBottomWidth: 1,
        flexDirection: 'row',
    }, 

}); 
 
export default ShowCountry;