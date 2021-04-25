import React from 'react'
import ProfilScreen from "../../Screens/User/ProfilScreen";
import SettingScreen from "../../Screens/User/SettingScreen";
import EditProfileScreen from '../../Screens/User/EditProfileScreen';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const SetStack = createStackNavigator(); // stack for profile
//navigation profil 
const AppProfilStackScreen  = ({navigation}) => (
  
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
        name="ProfilScreen" 
        component={ProfilScreen}
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
              onPress={ () => navigation.navigate('EditProfile') }
            />
          )
        }}
      />
      <SetStack.Screen 
        name="EditProfile"
        options={{
          title: 'Modifier le profil'
        }}
        component={EditProfileScreen}
      />
      <SetStack.Screen name="SettingScreen" component={SettingScreen}/>
    </SetStack.Navigator>
)

export default AppProfilStackScreen;