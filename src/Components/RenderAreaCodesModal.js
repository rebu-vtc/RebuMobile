import React, {useContext} from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    Text, 
    TouchableWithoutFeedback, 
    Modal,
    FlatList
} from 'react-native';
import { SIZES, ThemeStyles } from '../ThemeStyles';
import ModalContext from './contexts/ModalContext';
import SelectedAreaContext from './contexts/SelectedAreaContext'
import AreasContext from './contexts/AreasContext'


const RenderAreaCodesModal = () => {

    const { areas } = useContext(AreasContext);
    const {  setSelectedArea } = useContext(SelectedAreaContext);
    const { modalVisible, setModalVisible } = useContext(ModalContext); 

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity 
          style={{ padding: SIZES.padding, flexDirection: 'row'}}
          onPress = { () => { 
            /*console.log("ok1")*/
            setSelectedArea(item)
            setModalVisible(false)
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{
              width: 30,
              height: 30,
              marginRight: 10
            }}
          />
          <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
        </TouchableOpacity>
      )
    };

    
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
        >
            <TouchableWithoutFeedback
                onPress = { () => setModalVisible(false) }
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View 
                    style={styles.viewModal}
                    >
                    <FlatList
                        data={areas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.code}
                        showsVerticalScrollIndicator={false}
                        style={{ 
                        padding: SIZES.padding * 2,
                        margin: SIZES.padding * 2,
                        }}
                    />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    )
  }

  const styles = StyleSheet.create({
    viewModal: {
      height: 400,
      width: SIZES.width * 0.8, 
      backgroundColor: ThemeStyles.color.lightGray,
      borderRadius: SIZES.radius
    }
  })
export default RenderAreaCodesModal;