import React from 'react'
import { ScrollView, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Configuration } from '../Configuration'
import { AppStyles } from '../AppStyles'
import Button from "react-native-button";

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
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
                <Text style={styles.title}>Salut ! bienvenue sur notre service</Text>
                <Button 
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    onPress = { () => this.props.navigation.navigate("Login")}
                >
                    Se connecter
                </Button>
                <Button
                    containerStyle={styles.signupContainer}
                    style={styles.signupText}
                    onPress = { () => this.props.navigation.navigate("Signup")}
                >
                    S'inscrire
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 150,
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
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.white,
        borderRadius: AppStyles.borderRadius.main,
        padding: 8,
        borderWidth: 1,
        borderColor: AppStyles.color.tint,
        marginTop: 15
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    }
})


export default  WelcomeScreen