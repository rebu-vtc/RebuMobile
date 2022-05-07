import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RenderFooter from '../components/layouts/RenderFooter';
import RenderHeader from '../components/layouts/RenderHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Field from '../components/forms/Field';
import { ThemeStyles, SIZES, globalStyles } from '../ThemeStyles';
import CustomButton  from '../components/forms/CustomButton';
import ButtonFacebook from '../components/forms/ButtonFacebook';
import { useTheme } from 'react-native-paper';


const LoginScreen = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '', 
    });
    const { colors } = useTheme();

    const handleChange = ( text ) => {
      const { name, value } = text;
      setFormData({ [name]: value })
    }

    const onSubmitEdit = () => {
        console.log(formData)
    }
    
    return ( 
        <View style={styles.container}>
            <TouchableOpacity
                onPress={ () => navigation.navigate("welcome")}
                style={styles.arrowleft}
            >
            <AntDesign  
                name="arrowleft" 
                color='white'
                size={20} 
            />
            </TouchableOpacity>

            <RenderHeader label="Se connecter" style={styles.header} />

            <RenderFooter style={styles.footer}>
                <Field 
                    placeholder= "Votre adresse e-mail"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={[globalStyles.textInput, {
                        color: colors.text
                    }]}
                    onChangeText={handleChange}
                    value={formData.email}
                >
                    <FontAwesome 
                        name="envelope-o"
                        color="#05375a"
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
                    style={[globalStyles.textInput, {
                        color: colors.text
                    }]}
                    
                >
                    <Feather
                        name="lock"
                        color='#05375a'
                        size={20}
                    />
                </Field>
                <CustomButton 
                    label="Se connecter" 
                    buttonColor={ThemeStyles.color.tint} 
                    onPress= { () => navigation.navigate("TabNavigator")}
                    //onPress={onSubmitEdit}
                 />
                {/*<View style={{ alignItems: 'center', justifyContent: 'center'}}><Text style={styles.or}>Ou</Text></View>
                <ButtonFacebook 
                    onPress= { () => navigation.navigate("TabNavigator")}
                    //onPress={onSubmitEdit}
                 />*/}
            </RenderFooter>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeStyles.color.tint
    },
    arrowleft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2   
    },
    footer: {
        flex: 3,
        backgroundColor: ThemeStyles.color.white,
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
        backgroundColor: ThemeStyles.color.tint
    },
    or: {
        fontFamily: ThemeStyles.fontName.main,
        color: "black",
        marginTop: 20,
    }
    

});
 
export default LoginScreen;