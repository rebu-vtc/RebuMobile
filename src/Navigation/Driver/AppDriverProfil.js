import React from 'react'
import ProfilDriver from "../../screens/driver/ProfilDriver";
import { createStackNavigator } from '@react-navigation/stack'
import Icon from "react-native-vector-icons/Ionicons"

const SetStack = createStackNavigator(); // stack for profile
//navigation profil 
const AppDriverProfil  = ({navigation}) => (
  
    <SetStack.Navigator
       screenOptions={{
        headerStyle: {
           backgroundColor: '#fff',
           shadowColor: '#fff',
           elevation: 0,
        },
        headerTintColor: '#000',
       }}
    >
      <SetStack.Screen 
        name="DriverProfil" 
        component={ProfilDriver}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button 
              name="menu"
              size={25}
              backgroundColor='#fff'
              color='#000'
              
            />
           )
        }}
      />
    </SetStack.Navigator>
)

export default AppDriverProfil;