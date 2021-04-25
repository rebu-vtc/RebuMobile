import React, { useState} from "react";
import { 
    StyleSheet, 
    Text,
    TextInput,
    View,
    Dimensions,
    TouchableOpacity, 
    Platform
} from "react-native";
import { AppStyles, SIZES } from "../AppStyles";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


const LoginScreen = ({navigation}) => {

    const [showPassword, setShowPassword] = useState(false);

    renderHeader = () => (
      <View style={styles.header}>
        <Text style={styles.text_header}>Se connecter</Text>
      </View>
    );
    
      
    renderFooter = () =>  (
          <Animatable.View 
                animation="fadeInUpBig"
                iterationCount={1}
                style={styles.footer}
            >

            <View style={styles.action}>
              <FontAwesome
                name="envelope-o"
                color='#05375a'
                size={20}
              />
              <TextInput 
                style={styles.TextInput}
                placeholder="E-mail ou numéro de telephone"
                autoCapitalize="none"
              />   
            </View>

            <View style={styles.action}>
              <Feather
                name="lock"
                color='#05375a'
                size={20}
              />
              <TextInput 
                style={styles.TextInput}
                placeholder="Mot de passe"
                autoCapitalize="none"
                secureTextEntry={!showPassword}
              /> 
              <TouchableOpacity
                onPress={ () => setShowPassword(!showPassword) }
              >
                <Feather 
                  name={showPassword ? "eye-off" : "eye"}
                  color='grey'
                  size={20}
                /> 
              </TouchableOpacity> 
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity 
                onPress = { () => navigation.navigate("TabNavigator")}
              >   
                <LinearGradient
                  colors={[AppStyles.color.tint, AppStyles.color.tint]}
                  style={styles.loginContainer}   
                >
                  <Text style={styles.loginText} > Se connecter</Text>  
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.or}>Ou</Text>
              <TouchableOpacity 
                onPress = { () => navigation.navigate("TabNavigator")}
              >   
                <LinearGradient
                  colors={[AppStyles.color.facebook, AppStyles.color.facebook]}
                  style={styles.facebookContainer}   
                >
                  <Text style={styles.facebookText} >Se connecter avec Facebook</Text>  
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        );
      
    
    return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={ () => this.props.navigation.navigate("welcome")}
            style={styles.arrowleft}
          >
            <AntDesign 
              name="arrowleft" 
              color='white'
              size={20} 
            />
          </TouchableOpacity>
            { this.renderHeader() }
            { this.renderFooter() }
        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.color.tint
    },
    or: {
        fontFamily: AppStyles.fontName.main,
        color: "black",
        marginTop: 40,
        marginBottom: 10
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.white,
        marginTop: 20,
        marginBottom: 20
    },
    loginContainer: {
        width: 200,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    loginText: {
        color: AppStyles.color.white
    },
    facebookContainer: {
        width: 200,
        backgroundColor: AppStyles.color.facebook,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    facebookText: {
        color: AppStyles.color.white,
        fontSize: 10,
        padding: 5,
    },
    arrowleft: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 2   
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
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
    text_header:{
        color: AppStyles.color.white,
        fontWeight: 'bold',
        fontSize: 30,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    text_footer:{
        color: '#05375a',
        fontSize: 20,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2', 
        paddingBottom: 5,
    },
    TextInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
})

export default LoginScreen