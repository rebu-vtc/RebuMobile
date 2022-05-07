import React from "react";
import { StyleSheet, View } from "react-native";
import { AppIcon } from "../../src/ThemeStyles";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { 
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon  from "react-native-vector-icons/Ionicons";



 const DrawerContainer = ({ navigation }) => {
  
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <Avatar.Image
                    source={AppIcon.images.avatarC}
                  />
                  <View style={{marginLeft: 15, flexDirection: 'column'}}>
                    <Title style={styles.title}>Adja Doucanse</Title>
                  </View>
                </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
                icon={({color, size } ) => (
                  <AntDesign 
                    name="home"
                    color={color}
                    size={size}
                  />
                )}
                label="Accueil"
                onPress={() => {
                  navigation.navigate("Home")
                }}              
              />
               <DrawerItem 
                icon={({color, size } ) => (
                  <AntDesign 
                    name="filetext1"
                    color={color}
                    size={size}
                  />
                )}
                label="factures"
                onPress={() => {
                  navigation.navigate("Loyalty")
                }}              
              />
              <DrawerItem 
                icon={({color, size } ) => (
                  <AntDesign 
                    name="creditcard"
                    color={color}
                    size={size}
                  />
                )}
                label="moyen de paiement"
                onPress={() => {
                    navigation.navigate("PaymentScreen")
                }}              
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
              icon={({color, size}) => (
                <AntDesign
                  name="logout"
                  size={20}
                />
              )}
              label="Déconnexion"
              onPress={() => {
                  
              }}
            />
        </Drawer.Section>
      </View>
    );
  }


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  }, 
  userInfoSection: {
    paddingLeft: 20, 
  }, 
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  }, 
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  } 
});

export default DrawerContainer;