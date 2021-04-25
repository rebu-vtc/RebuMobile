import React from 'react'
import { 
    StyleSheet, 
    SafeAreaView, 
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Platform,
    View,
} from 'react-native'
import { useTheme } from 'react-native-paper';

import { AppStyles, SIZES, AppIcon, FONTS } from '../../AppStyles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const DriverEditProfilScreen = () => {
    const { colors } = useTheme();

        renderInner = () => (

            <View style={styles.panel}>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>Choose Profile Picture</Text>
                </View>
                <TouchableOpacity style={styles.panelButton}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton}>
                    <Text style={styles.panelButtonTitle}>Choose from Libary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton} onPress={ () => this.bs.current.snapTo(1)} >
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        );

        renderHeader = () => (
            <View style={styles.header}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle} />
                </View>
            </View>
        );

        bs = React.createRef();
        fall = new Animated.Value(1);

        return (
            <View style={styles.container}>
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[330, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />
                <Animated.View style={{margin: 20,
                    opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.8)),

                }}>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={ () => this.bs.current.snapTo(0)}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alalignItems: 'center',
                            }}>
                                <ImageBackground
                                    source={AppIcon.images.avatarC}
                                    style={{ height:100, width: 100}}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Icon name="camera" size={35} color='#fff' style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }} />
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                            Adja Doucanse
                        </Text>

                        <View style={styles.action}>
                            <FontAwesome name="user-o" color={colors.text} size={20} />
                            <TextInput
                                placeholder= "Prénom"
                                placeholderTextColor="#666666"
                                autoCorrect={false}
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                        
                        <View style={styles.action}>
                            <FontAwesome name="phone" color={colors.text} size={20} />
                            <TextInput
                                placeholder= "Téléphone"
                                placeholderTextColor="#666666"
                                keyboardType="number-pad"
                                autoCorrect={false}
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                        <View style={styles.action}>
                            <FontAwesome name="envelope-o" color={colors.text} size={20} />
                            <TextInput
                                placeholder= "Email"
                                placeholderTextColor="#666666"
                                keyboardType="email-address"
                                autoCorrect={false}
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                            <Text style={styles.panelButtonTitle}>Enregistrer</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.color.white
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelTitle:{
        fontWeight: 'bold',
    },
    panelHandle: {
        width: 40,
        height: 8,
    },
    panelSubtitle: {
        fontSize: 14,
        color: AppStyles.color.gray,
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: AppStyles.color.white,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row', 
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -12,
        marginLeft: 10,
        color: '#05375a'
    }

})

export default DriverEditProfilScreen;