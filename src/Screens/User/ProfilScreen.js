import React, { useState } from 'react'
import { 
    StyleSheet, 
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Platform,
    View,
} from 'react-native'
import { useTheme } from 'react-native-paper';

import { ThemeStyles, SIZES, AppIcon, FONTS, globalStyles } from '../../ThemeStyles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import CustomButton from '../../components/forms/CustomButton';
import Field from '../../components/forms/Field';


const ProfilScreen = ({ navigation }) => {

        const { colors } = useTheme();

        const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            telephone: '',
            password: '', 
        });
        const [showPassword, setShowPassword] = useState(false); 

        const renderInner = () => (

            <View style={styles.panel}>

                <View style={{alignItems: 'center'}}>
                    <View style={styles.horizontalClip} />
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>Choose Profile Picture</Text>
                </View>
                <CustomButton label="Prendre une Photo" buttonColor={ThemeStyles.color.tint} buttonContainer={styles.buttonContainer} onPress={() => {}}/>
                <CustomButton label="Choisir dans la bibliothèque" buttonColor={ThemeStyles.color.tint} buttonContainer={styles.buttonContainer} onPress={() => {}}/>
                <CustomButton label="Annuler" buttonColor={ThemeStyles.color.tint} buttonContainer={styles.buttonContainer} onPress={() => bs.current.snapTo(1)}/>
            </View>
        );

       const renderHeader = () => (
            <View style={styles.header}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle} />
                </View>
            </View>
        );

        const bs = React.createRef();
        const fall = new Animated.Value(1);

        const handleChange = ( text ) => {
            const { name, value } = text;
            setFormData({ [name]: value })
        }

        return (
            <ScrollView style={[globalStyles.constainer, { backgroundColor: ThemeStyles.color.white }]}>
                <BottomSheet
                    ref={bs}
                    snapPoints={[330, 0]}
                    renderContent={renderInner}
                    renderHeader={renderHeader}
                    initialSnap={1}
                    callbackNode={fall}
                    enabledGestureInteraction={true}
                />
                <Animated.View style={
                    {margin: 20,
                    opacity: Animated.add(0.1, Animated.multiply(fall, 1.8)),

                }}>
                    <View style={{alignItems: 'center', marginBottom: 10}}>
                        <TouchableOpacity
                            onPress={ () => bs.current.snapTo(0)}>
                            <View style={styles.iconProfil}>
                                <ImageBackground
                                    source={AppIcon.images.avatarC}
                                    style={{ height:100, width: 100}}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View style={styles.centerAndAlign}><Icon name="camera" size={35} color='#fff' style={styles.iconCamera} /></View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Adja Doucanse</Text>
                        <Field 
                            placeholder= "Nom complet"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            onChangeText={handleChange}
                            value={formData.fullName}
                        >
                            <FontAwesome
                                name="user-o"
                                color={colors.text} 
                                size={20}
                            />
                        </Field>
                        <Field 
                            placeholder= "Email"
                            placeholderTextColor="#666666"
                            keyboardType="email-address"
                            autoCorrect={false}
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            onChangeText={handleChange}
                            value={formData.email}
                        >
                            <FontAwesome
                                name="envelope-o"
                                color={colors.text} 
                                size={20}
                            />
                        </Field>
                        <Field 
                            placeholder= "Téléphone"
                            placeholderTextColor="#666666"
                            keyboardType="number-pad"
                            autoCorrect={false}
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            onChangeText={handleChange}
                            value={formData.telephone}
                        >
                            <FontAwesome
                                name="phone"
                                color={colors.text} 
                                size={20}
                            />
                        </Field>
                        <Field 
                            placeholder="Mot de passe"
                            placeholderTextColor="#666666"
                            showPassword={!showPassword}
                            isPassword={true}
                            onPress={() => setShowPassword(!showPassword)}
                            onChangeText={handleChange}
                            value={formData.password}
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                        >
                            <Feather
                                name="lock"
                                color={colors.text}
                                size={20}
                            />
                        </Field>
                        <CustomButton label="Enregistrer" buttonColor={ThemeStyles.color.tint} buttonContainer={styles.buttonContainer} onPress={() => {}} />
                    </View>
                </Animated.View>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
    },
    panel:{
        paddingBottom: 20,
        backgroundColor:'#fff',
        paddingTop: 20,
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
        color: ThemeStyles.color.gray,
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
        color: ThemeStyles.color.white,
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
    },
    horizontalClip: {
        backgroundColor: ThemeStyles.color.mediumGrey,
        width: 60,
        height: 5,
        borderRadius: 25,
        marginBottom: 10,
    },
    iconProfil: {
        height: 100,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerAndAlign: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCamera: {
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },

})

export default ProfilScreen