import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import CustomButton from '../../components/forms/CustomButton';
import { ThemeStyles, globalStyles, SIZES } from '../../ThemeStyles';
import RenderFooter from '../../components/layouts/RenderFooter';
import RenderHeader from '../../components/layouts/RenderHeader';
import Field from '../../components/forms/Field';
import { useTheme } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';




const PaymentScreen = ({ navigation }) => {

    //const [ number, setNumber] = useState('');https://stripe.com/docs/payments/accept-a-payment?platform=react-native
    //const [ name, setName ] = useState('');
    //const [ expiry, setExpiry ] = useState('');
    //const [ cvc, setCvc ] = useState('');
    //const [ focus, setFocus ] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        cardNumber: '',
        expiry: '',
        cvc: '', 
    });

    const { colors } = useTheme();

    const handleChange = ( text ) => {
        const { name, value } = text;
        setFormData({ [name]: value })
    }

    const onSubmit =  async event => {
         event.preventDefault();

         console.log(formData)
     }
    return ( 
        <View style={styles.container}>
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
            <RenderHeader label="Paiement par CB" />
            <RenderFooter style={globalStyles.footer}>
                 <View style={styles.constainer}> 
                    <Field 
                        placeholderTextColor="#666666"
                        value={formData.cardNumber}
                        keyboardType="number-pad"
                        placeholder=" 1234 5678 9012 3456" 
                        onChangeText={handleChange}
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                    >
                        <AntDesign 
                            name="creditcard"calendar
                            color={colors.text} 
                            size={20}
                        />
                    </Field>

                    <Field
                        placeholder="MM/AA"
                        placeholderTextColor="#666666" 
                        value={formData.expiry} 
                        keyboardType="number-pad" 
                        onChangeText={handleChange}
                        style={[styles.textInput, {
                            color: colors.text, width: '50%'
                        }]}
                    >
                        <AntDesign 
                            name="calendar"
                            color={colors.text} 
                            size={20}
                        />
                    </Field>
                    <Field
                        placeholder="123" 
                        placeholderTextColor="#666666"
                        value={formData.cvc} 
                        keyboardType="number-pad"
                        onChangeText={handleChange}
                        style={[styles.textInput, {
                            color: colors.text, width: '50%'
                        }]}
                    >
                        <MaterialCommunityIcons 
                            name="numeric"
                            color={colors.text} 
                            size={20}
                        />

                    </Field>
                    <CustomButton label="Valider" buttonColor={ThemeStyles.color.tint} onPress= {onSubmit} />
                </View>
            </RenderFooter>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeStyles.color.tint
    },
    row: {
        flexDirection: 'row',
    },
    textFieldWrap: {
        
    },
    buttonContainer: {
        width: 200,
        backgroundColor: ThemeStyles.color.tint,
        borderRadius: ThemeStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -12,
        marginLeft: 10,
        color: '#05375a'
    },
    arrowleft:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2   
    }
})
 
export default PaymentScreen;