import React from 'react';
import { 
    StyleSheet, 
    Text,
    TouchableOpacity,
}from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { ThemeStyles } from '../../ThemeStyles';


const ButtonFacebook = ({ onPress }) => {
  return ( 
    
    <TouchableOpacity onPress = { onPress } style={styles.containerView}>   
      <LinearGradient
        colors={[ThemeStyles.color.facebook, ThemeStyles.color.facebook]}
        style={styles.facebookContainer}   
      >
        <Text style={styles.facebookText} >Se connecter avec Facebook</Text>  
      </LinearGradient>
    </TouchableOpacity>
    
  );
}
const styles = StyleSheet.create({
  facebookContainer: {
    width: 200,
    backgroundColor: ThemeStyles.color.facebook,
    borderRadius: ThemeStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  facebookText: {
    color: ThemeStyles.color.white,
    fontSize: 10,
    padding: 5,
  },
  containerView:{ 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
export default ButtonFacebook;
