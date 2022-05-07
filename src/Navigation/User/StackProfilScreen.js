import React from 'react';
import ProfilScreen from '../../screens/user/ProfilScreen';
import { createStackNavigator } from '@react-navigation/stack'
import Icons from "react-native-vector-icons/Ionicons"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const SetStack = createStackNavigator(); // stack for profile

const StackProfilScreen = ({ navigation }) =>  ( 
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
            <Icons.Button
              name="menu"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      />
      
    </SetStack.Navigator>
);

 
export default StackProfilScreen;