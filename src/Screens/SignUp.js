import React, { useState, useEffect } from 'react';
import { 
View, 
StyleSheet, 
Image, 
TouchableOpacity, 
Text,
Modal,
TouchableWithoutFeedback,
FlatList,
} from 'react-native';
import RenderFooter from '../components/layouts/RenderFooter';
import RenderHeader from '../components/layouts/RenderHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Field from '../components/forms/Field';
import { ThemeStyles, SIZES, globalStyles, FONTS } from '../ThemeStyles'
import CustomButton  from '../components/forms/CustomButton';
import ButtonFacebook from '../components/forms/ButtonFacebook';
import { useTheme } from 'react-native-paper';


const SignUp = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false); // pour montrer le mot de passe ou caher

  const [areas, setAreas] = useState([]); // stock le resultat de la requete tous les pays e
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // pour rendre visible le modal des numero
  const { colors } = useTheme();

  const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      telephone: '',
      password: '', 
  });

  const handleChange = ( text ) => {
    const { name, value } = text;
    setFormData({ [name]: value })
  }
 
  
  const fetchCountry = async () => {
    try {
      
     await fetch('https://restcountries.eu/rest/v2/all')
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
    }catch(error) {
            error =>console.log(error.response)
        }
  }
  
  useEffect( () => {
    fetchCountry();
    }, []);

  function renderAreaCodesModal(){
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity 
          style={{ padding: SIZES.padding, flexDirection: 'row'}}
          onPress = { () => { 
            console.log("ok1")
            /*setSelectedArea(item)
            setModalVisible(false)*/
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
              style={styles.viewModal}
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

            <RenderHeader label="S'inscrire" style={styles.header} />

            <RenderFooter style={styles.footer}>
                <Field 
                  placeholder= "Nom complet"
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  style={[globalStyles.textInput, {
                      color: colors.text
                  }]}
                  onChangeText={handleChange}
                  value={formData.fullName}
                >
                    <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={20}
                    />
                </Field>
                <Field 
                  placeholder= "Votre adresse e-mail"
                  placeholderTextColor="#666666"
                  keyboardType="email-address"
                  autoCorrect={false}
                  style={[globalStyles.textInput, {
                      color: colors.text
                  }]}
                  onChangeText={handleChange}
                  value={formData.email}
                >
                    <FontAwesome 
                        name="envelope-o"
                        color="#05375a"
                        size={20}
                    />
                </Field>

                <Field 
                  placeholder= "06 12 34 56 78"
                  placeholderTextColor="#666666"
                  keyboardType="number-pad"
                  autoCorrect={false}
                  style={[globalStyles.textInput, {
                      color: colors.text
                  }]}
                  onChangeText={handleChange}
                  value={formData.telephone}
                  keyboardType="number-pad"
                >
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
                        color={ThemeStyles.color.black}
                        style={{ width: 10, height: 10 }}
                      />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <Text>{selectedArea?.callingCode}</Text>
                    </View>
                  </TouchableOpacity>
                </Field>

                <Field 
                    placeholder="Mot de passe"
                    placeholderTextColor="#666666"
                    showPassword={!showPassword}
                    isPassword={true}
                    onPress={() => setShowPassword(!showPassword)}
                    onChangeText={handleChange}
                    value={formData.password}
                    style={[globalStyles.textInput, {
                        color: colors.text
                    }]}
                >
                    <Feather
                        name="lock"
                        color='#05375a'
                        size={20}
                    />
                </Field>

                <CustomButton label="S'inscrire" buttonColor={ThemeStyles.color.tint} onPress= { () => navigation.navigate("TabNavigator")} />
                 {/*<View style={{ alignItems: 'center', justifyContent: 'center'}}><Text style={styles.or}>Ou</Text></View>
                  <ButtonFacebook onPress= { () => navigation.navigate("TabNavigator")} />*/}
            </RenderFooter>
            {renderAreaCodesModal()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeStyles.color.tint
    },
    arrowleft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2   
    },
    footer: {
        flex: 3,
        backgroundColor: ThemeStyles.color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: ThemeStyles.color.tint
    },
    or: {
        fontFamily: ThemeStyles.fontName.main,
        color: "black",
        marginTop: 20,
    },
    viewModal: {
    height: 400,
    width: SIZES.width * 0.8, 
    backgroundColor: ThemeStyles.color.lightGray,
    borderRadius: SIZES.radius

  },
  countryCode: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: ThemeStyles.color.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
  }, 

});
 
export default SignUp;