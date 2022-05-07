import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    ActivityIndicator, 
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { ThemeStyles, SIZES, AppIcon } from '../ThemeStyles'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import CustomButton  from '../components/forms/CustomButton';
import RenderFooter from '../components/layouts/RenderFooter';
import RenderHeader from '../components/layouts/RenderHeader';

const WelcomeScreen = ({ navigation }) => {
    return ( 
            <View style={styles.container}>
                   <Animatable.Image
                    animation="bounceIn"
                    iterationCount={1}
                    source={AppIcon.images.luxe}
                    style={styles.logo}
                    resizeMode='stretch'
                />   
                <Animatable.Text 
                    animation="pulse"
                    iterationCount={1}
                    style={[styles.title, { color: 'white'}]}
                >

                <RenderHeader label={"REBU VTC"} header={styles.header} text_header={[styles.title, { color: 'white'}]} />
                </Animatable.Text>
    
                <RenderFooter style={styles.footer}>
                <Text style={styles.title}>Salut ! bienvenue sur notre service</Text>

                <View style={styles.alignMyItem}>
                    <CustomButton label="Se connecter" buttonContainer={styles.loginContainer}  buttonColor={ThemeStyles.color.tint} onPress= { () => navigation.navigate('Login') } />
                    <CustomButton label="S'inscrire" buttonContainer={styles.signInContainer} buttonText={styles.signInText} buttonColor={ThemeStyles.color.white} onPress= { () => navigation.navigate('Signup')} />
                </View>
                </RenderFooter>
            </View>
     );
}
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeStyles.color.tint,
        
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
    alignMyItem: {
        alignItems: 'center', justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 25, 
        fontWeight: 'bold',
    },
    
    logo: {
        height: "15%",
        width: "70%",
        marginLeft: 70,
        marginTop: 30,
    },
    title: {
        fontSize: ThemeStyles.fontSize.title,
        fontWeight: "bold",
        color: ThemeStyles.color.tint,
        textAlign: "center",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    loginText: {
        color: ThemeStyles.color.white
    },
    signInText: {
        color: ThemeStyles.color.tint
    },
    signInContainer: {
        width: 200,
        backgroundColor: ThemeStyles.color.white,
        borderRadius: ThemeStyles.borderRadius.main,
        padding: 8,
        borderWidth: 1,
        borderColor: ThemeStyles.color.tint,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
        width: 200,
        backgroundColor: ThemeStyles.color.tint,
        borderRadius: ThemeStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
 
export default WelcomeScreen;
