import React from 'react'
import { 
     StyleSheet, 
     View, 
     Text,
     ActivityIndicator, 
     Image,
     Dimensions,
     TouchableOpacity
} from 'react-native';
import { AppStyles, SIZES, AppIcon } from '../AppStyles'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
    }
    renderHeader(){
        return (
            <View style={styles.header}>
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
                    REBU VTC
                </Animatable.Text>     
            </View>
        )
    }
    renderFooter(){
        return (
            <Animatable.View 
                animation="fadeInUpBig"
                iterationCount={1}
                style={styles.footer}
            >
                <Text style={styles.title}>Salut ! bienvenue sur notre service</Text>

                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity 
                        onPress = { () => this.props.navigation.navigate("Login")}
                    >   
                        <LinearGradient
                            colors={[AppStyles.color.tint, AppStyles.color.tint]}
                            style={styles.loginContainer}   
                        >
                            <Text style={styles.loginText} > Se connecter</Text>  
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity  
                        onPress = { () => this.props.navigation.navigate("Signup")}
                    >
                        <LinearGradient
                            colors={[AppStyles.color.white, AppStyles.color.white]}
                            style={styles.signupContainer} 
                        >
                            <Text style={styles.signupText} >S'inscrire</Text> 
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
            </Animatable.View>
        
        )
    }


    render() {
        if (this.state.isLoading == true) {
            return (
              <ActivityIndicator
                style={styles.spinner}
                size="large"
                color={AppStyles.color.tint}
              />
            );
          }

        return (
            <View style={styles.container}>
               
                { this.renderHeader() }
                { this.renderFooter() }
            </View>
        );
    }
}

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: "center",
        //justifyContent: "center",
        //marginBottom: 150,
        backgroundColor: AppStyles.color.tint
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.tint,
        marginTop: 20,
        textAlign: "center",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    loginText: {
        color: AppStyles.color.white
    },
    signupText: {
        color: AppStyles.color.tint
    },
    signupContainer: {
        width: 200,
        backgroundColor: AppStyles.color.white,
        borderRadius: AppStyles.borderRadius.main,
        padding: 8,
        borderWidth: 1,
        borderColor: AppStyles.color.tint,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
        width: 200,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer:{
        flex: 1.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 75,
        paddingHorizontal: 30,
    }, 
    title: {
        color: 'black',
        fontSize: 30, 
        fontWeight: 'bold',
    },
    
    logo: {
        height: "25%",
        width: "75%",
    }
})


export default  WelcomeScreen