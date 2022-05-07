import React, { useEffect, useState} from 'react';
import { View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
import { PLACE_KEY } from '../../../services/APIKey';
import { ThemeStyles, globalStyles } from '../../../ThemeStyles';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import RebuTypes from '../../../components/RebuTypes';
import RenderHeader from '../../../components/layouts/RenderHeader';
import RenderFooter from '../../../components/layouts/RenderFooter';
import CustomButton from '../../../components/forms/CustomButton';
import Field from '../../../components/forms/Field';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons'



const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.9691706, lng: 2.2344721 } },
};

const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.4940881 } },
};

const DestinationScreen = () => {
    

    const [originPlace, setOriginPlace] = useState(null); 
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();


    useEffect( () => {
        if(originPlace && destinationPlace) {
            navigation.navigate("TripsScreen", {
                originPlace,
                destinationPlace
            });
        }
    }, [originPlace, destinationPlace]); 

    const onSubmitEdit = (originPlace, destinationPlace) => {

            if(originPlace && destinationPlace) {
            navigation.navigate("TripsScreen", {
                originPlace,
                destinationPlace
            });
        }
        }

    /*searchLocation = async (text) => {
    this.setState({searchKeyword: text});
    axios
      .request({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${PLACE_KEY}&input=${this.state.searchKeyword}`,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          searchResults: response.data.predictions,
          isShowingResults: true,
        });
      })
      .catch((e) => {
        console.log(e.response);
      });
  };*/
     console.log("origin "+originPlace+", destionation "+destinationPlace)


    return ( 
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={ () => navigation.navigate("Home")}
                style={styles.arrowleft}
            >
            <AntDesign  
                name="arrowleft" 
                color='white'
                size={20} 
            />
            </TouchableOpacity>
            <RenderHeader label="Votre point de départ ?"  />
            
            <RenderFooter style={globalStyles.footer}>
                <View style={styles. sousContainers}>
                   
                
                    <Field 
                        placeholder="Choisir un point de départ"
                        defaultValue={originPlace}
                        onChangeText={text => setOriginPlace(text)}
                        placeholderTextColor="#05375a"
                    >
                        <MaterialIcons
                            name="my-location"
                            color='#05375a'
                            size={20}
                            style={{ paddingBottom: 12, paddingVertical: 10 }}
                        />
                    </Field>
                    <Field 
                        placeholder="Choisir une destination"
                        defaultValue={destinationPlace}
                        onChangeText={text => setDestinationPlace(text)}
                        placeholderTextColor="#05375a"
                    >
                        <Icon
                            name="md-location-outline"
                            color="#05375a"
                            size={20}
                            style={{ paddingVertical: 16 }}
                        />
                    </Field>
                </View>
                {/*<ScrollView>
                    {(onSubmitRebu && <RebuTypes/> ) || (
                        <View/>
                    )}
            </ScrollView>*/}
             {/*<View style={styles.icon}>
                        <MaterialIcons
                            name="my-location"
                            color='#05375a'
                            size={20}
                            style={{ paddingBottom: 12, paddingVertical: 10 }}
                        />
                        <Icon
                            name="md-location-outline"
                            color="#05375a"
                            size={20}
                            style={{ paddingVertical: 16 }}
                        />
                    </View>
                    <View style={styles.flexRow}>
                    <GooglePlacesAutocomplete
                        enablePoweredByContainer={false}
                        currentLocationLabel={"Current Location"}
                        styles={{
                            textInput: styles.textInput,
                            listView: { position: "absolute", top: 130 },
                            container: {
                                flex: 0,
                                zIndex: 2,
                            },
                        }}
                        placeholder='Choisir un point de départ'
                        fetchDetails={true}
                        onPress={({ data }) => setOriginPlace(data) }
                        query={{
                            key: PLACE_KEY,
                            language: 'en',
                        }}
                        renderRow={(data) => <PlaceRow data={data} />}
                        renderDescription={(data) => data.description || data.vicinity}
                        predefinedPlaces={[homePlace, workPlace]}
                        onFail={(error) => console.error(error)}
                    />
                     
                    <GooglePlacesAutocomplete
                        enablePoweredByContainer={false}
                        currentLocationLabel={"Current Location"}
                        styles={{
                            textInput: styles.textInput,
                            listView: { position: "absolute", top: 80 },
                            container: {
                                flex: 0,
                            }
                        }}
                        placeholder='Choisir une destination'
                        fetchDetails={true}
                        onPress={({ data }) => setDestinationPlace(data) }
                        query={{
                            key: PLACE_KEY,
                            language: 'en',
                        }}
                        renderRow={(data) => <PlaceRow data={data} />}
                        renderDescription={(data) => data.description || data.vicinity}
                        predefinedPlaces={[homePlace, workPlace]}
                        onFail={(error) => console.error(error)}
                    />
                    </View>
                </View>*/}
                <CustomButton label="Continuer" buttonColor={ThemeStyles.color.tint} onPress= {onSubmitEdit} />
            </RenderFooter>
        </SafeAreaView>
    );
}
 
export default DestinationScreen;