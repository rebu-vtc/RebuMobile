import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../AppStyles";

class SignupScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            fullname: "",
            phone: "",
            email: "",
            password: ""
        };
    }
    handleFullname = (text) => {
        this.setState({ fullname: text })
    }
    handlePhone = (text) => {
        this.setState({ phone: text })
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    _TryToLoginFirst(fullname, phone, email, pass){
      console.log('Full name'+ fullname + 'phone'+ phone + 'email'+ email + ' password:  '+ pass)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.leftTitle]}>Créer un nouveau compte</Text>
                <View style={styles.InputContainer}>
                    <TextInput 
                        style={styles.body}
                        placeholder="Nom complet"
                        onChangeText={this.handleFullname}
                        value={this.state.fullname}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput 
                        style={styles.body}
                        placeholder="Numéro de téléphone"
                        onChangeText={this.handlePhone}
                        value={this.state.phone}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput 
                        style={styles.body}
                        placeholder="E-mail"
                        onChangeText={this.handleEmail}
                        value={this.state.email}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput 
                        style={styles.body}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={this.handlePassword}
                        value={this.state.password}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />
                </View>
                <Button
                    containerStyle={[styles.facebookContainer, { marginTop: 50 }]}
                    style={styles.facebookText}
                    onPress={() => this.props.navigation.navigate("Home")}
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
        alignItems: "center"
      },
      title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.tint,
        marginTop: 20,
        marginBottom: 20
      },
      leftTitle: {
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 20
      },
      content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.text
      },
      loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
      },
      loginText: {
        color: AppStyles.color.white
      },
      placeholder: {
        fontFamily: AppStyles.fontName.text,
        color: "red"
      },
      InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.main
      },
      body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
      },
      facebookContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
      },
      facebookText: {
        color: AppStyles.color.white
      }
})

export default SignupScreen