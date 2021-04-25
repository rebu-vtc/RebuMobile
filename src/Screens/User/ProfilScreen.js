import React from 'react'
import {  StyleSheet, View, SafeAreaView } from 'react-native';
import {Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper'

import { Configuration } from '../../Configuration'
import { AppStyles, SIZES, AppIcon, FONTS } from '../../AppStyles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


class ProfilScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
               
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image
                            source={AppIcon.images.avatarC}
                            size={80}
                        />
                        <View style={{marginLeft: 20}}>
                            <Title style={[
                                styles.title, {
                                    marginTop:15,
                                    marginBottom: 5
                                }
                                ]}>Adja Doucanse</Title>
                            <Caption style={styles.caption}>@adjadoucanse</Caption>
                        </View>
                    </View>
                    
                </View>
                
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20}/>
                        <Text style={{ color:"#777777", marginLeft: 20 }}>003377668852</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20}/>
                        <Text style={{ color:"#777777", marginLeft: 20 }}>adja@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                      <Title>$140</Title>
                      <Caption>course/Mois</Caption>
                    </View>
                    <View style={styles.infoBox}>
                      <Title>$14</Title>
                      <Caption>course/Jours</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="calendar" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Trajets</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="credit-card" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Paiement</Text>
                        </View>
                    </TouchableRipple>
               
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="heart-outline" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Parrainage</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="help-circle-outline" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Aide</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="set-none" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Paramètres</Text>
                        </View>
                    </TouchableRipple>                    
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight:  'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row', 
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    }

});
export default ProfilScreen