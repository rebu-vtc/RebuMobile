import React, { useState, useEffect } from "react";
import { 
  StyleSheet, 
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity, 
  Platform,
  Modal,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import { AppStyles, SIZES, AppIcon, FONTS } from '../AppStyles'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';



const SignupScreen = ({navigation}) => {

  const [showPassword, setShowPassword] = useState(false); // pour montrer le mot de passe ou caher

  const [areas, setAreas] = useState([]); // stock le resultat de la requete tous les pays e
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // pour rendre visible le modal des numero


  useEffect( () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item =>{
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
          }
        })
        setAreas(areaData)
        if(areaData.length > 0) { 
          let defaultData = areaData.filter(a => a.code == "FR")
          
          if(defaultData.length > 0) {
            setSelectedArea(defaultData[0])
            console.log(defaultData[0])
          }
        }
      })
  }, []);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.text_header}>Créer un nouveau compte</Text>    
    </View>
  );
  function renderAreaCodesModal(){
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity 
          style={{ padding: SIZES.padding, flexDirection: 'row'}}
          onPress = { () => { 
            setSelectedArea(item)
            setModalVisible(false)
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{
              width: 30,
              height: 30,
              marginRight: 10
            }}
          />
          <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
        </TouchableOpacity>
      )
    };

    
    return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
    >
      <TouchableWithoutFeedback
        onPress = { () => setModalVisible(false) }
      >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View 
              style={{ 
                height: 400,
                width: SIZES.width * 0.8, 
                backgroundColor: AppStyles.color.lightGray,
                borderRadius: SIZES.radius
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={{ 
                  padding: SIZES.padding * 2,
                  margin: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
      </TouchableWithoutFeedback>

    </Modal>
    )
  }
    const renderFooter = () =>  (
      <Animatable.View 
      animation="fadeInUpBig"
      iterationCount={1}
      style={styles.footer}
      > 
        <View style={styles.footer}>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color='#05375a'
              size={20}
            />
            <TextInput 
              style={styles.TextInput}
              placeholder="Nom complet"
              autoCapitalize="none"
            />   
          </View>

          <View style={styles.action}>
            <FontAwesome
              name="envelope-o"
              color='#05375a'
              size={20}
            />
            <TextInput 
              style={styles.TextInput}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />   
          </View>

          <View style={styles.action}>
            <TouchableOpacity 
              style={styles.countryCode}
              onPress={ () => setModalVisible(true)}
            >
              <View style={{ justifyContent: 'center'}}>
                <Image
                  source={{ uri: selectedArea?.flag }}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <AntDesign 
                  name="down"
                  size={10}
                  color={AppStyles.color.black}
                  style={{ width: 10, height: 10 }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Text>{selectedArea?.callingCode}</Text>
              </View>
            </TouchableOpacity>
            <TextInput 
              style={styles.TextInputTeleph}
              placeholder="06 12 34 56 78"
              keyboardType="number-pad"
              autoCapitalize="none"
            />   
          </View>

          <View style={styles.action}>
            <Feather
              name="lock"
              color='#05375a'
              size={20}
            />
            <TextInput 
              style={styles.TextInput}
              placeholder="Mot de passe"
              autoCapitalize="none"
              secureTextEntry={!showPassword}
            /> 
            <TouchableOpacity
              onPress={ () => setShowPassword(!showPassword) }
            >
              <Feather 
                name={showPassword ? "eye-off" : "eye"}
                color='grey'
                size={20}
              /> 
            </TouchableOpacity> 
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity 
              onPress = { () => navigation.navigate("TabNavigator")}
            >   
              <LinearGradient
                colors={[AppStyles.color.tint, AppStyles.color.tint]}
                style={styles.signupContainer}   
              >
                <Text style={styles.signupText} > S'inscrire</Text>  
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        </Animatable.View>
    );

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={ () => navigation.navigate("welcome")}
          style={styles.arrowleft}
        >
          <AntDesign 
            name="arrowleft" 
            color='white'
            size={20} 
          />
        </TouchableOpacity>
        {renderHeader()}
        {renderFooter()}
        {renderAreaCodesModal()}
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: AppStyles.color.tint
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20
  },
  signupContainer: {
    width: 200,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },   
  signupText: {
    color: AppStyles.color.white,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 50,
    backgroundColor: AppStyles.color.tint
  },
  arrowleft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2   
  },
  footer: {
    flex: 3,
    backgroundColor: AppStyles.color.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header:{
    color: AppStyles.color.white,
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  text_footer:{
    color: '#05375a',
    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2', 
    paddingBottom: 5,
  },
  TextInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  TextInputTeleph: {
    flex: 1,
    marginVertical: SIZES.padding,
    borderBottomColor: AppStyles.color.white,
    borderBottomWidth: 1,
    height: 40,
    color: AppStyles.color.white
  },
  textSign: {
    fontSize: 18, 
    fontWeight: 'bold',
  }, 
  countryCode: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: AppStyles.color.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
  }
})

export default SignupScreen