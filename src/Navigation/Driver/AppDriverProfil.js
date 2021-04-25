import React from 'react'
import DriverProfilScreen from "../../Screens/Driver/DriverProfilScreen";
import DriverSettingScreen from "../../Screens/Driver/DriverSettingScreen";
import DriverEditProfilScreen from '../../Screens/Driver/DriverEditProfilScreen';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

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
        component={DriverProfilScreen}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button 
              name="menu"
              size={25}
              backgroundColor='#fff'
              color='#000'
              
            />
           ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={ () => navigation.navigate('DriverEditProfil') }
            />
          )
        }}
      />
      <SetStack.Screen 
        name="DriverEditProfil"
        options={{
          title: 'Modifier le profil'
        }}
        component={DriverEditProfilScreen}
      />
      <SetStack.Screen name="DriverSetting" component={DriverSettingScreen}/>
    </SetStack.Navigator>
)

export default AppDriverProfil;