import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import OtpInputs from 'react-native-otp-inputs';
import CustomButton from '../../components/CustomButton';
import PhoneImage from '../../../assets/images/otp.png'

//navigation
import {NativeStackScreenProps, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/AuthStack';
import {useNavigation} from '@react-navigation/native'
import CustomImage from '../../components/CustomImage/CustomImage';
type OTPProps = NativeStackScreenProps<RootStackParamList, 'OtpScreen'>


const OtpScreen = ({route}: OTPProps) => {
  const [otp, setOtp] = useState('');
  const [phoneImage, setPhoneImage] = useState<ImageSourcePropType>(PhoneImage)
  const isDarkMode = useColorScheme() === 'dark';
  const { where } = route.params
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


  const onVerifyPressed = () => {
    if(otp.length === 6){
      if(where === "register"){
        navigation.replace("PinCreateScreen")
        //console.warn("Registered")
      }else if (where === "resetpassword"){
        navigation.pop(1)
        navigation.replace("ResetPasswordScreen")
      }else{
        //console.warn('Verified OTP ', otp);
      }
    }else{
      console.warn("Please enter a valid code")
    }


    
  };
  const onResendPressed = () => {
    console.warn('OTP Resent');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
    >
      <View style={styles.phoneContainer}>
        <CustomImage img_style={styles.phone} imageUrl={phoneImage}/>
      </View>
      <Text
        style={[styles.codeHeading, isDarkMode ? styles.codeHeadingDark : styles.codeHeadingLight]}
      >
        Have you recieved a verification code ?
      </Text>

      <View>
        <Text style={styles.codeLabel}>Enter 6 digits code</Text>
        <OtpInputs
          autofillFromClipboard={true}
          handleChange={(code) => {
            if (code.length === 6) {
              setTimeout(() => {
                setOtp(code);
              }, 500);
            }
          }}
          numberOfInputs={6}
          style={styles.inputContainer}
          inputStyles={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
        />
        <View style={styles.inputResendCont}>
          <Text onPress={onResendPressed} style={styles.inputResend}>
            Resend code
          </Text>
        </View>
        <CustomButton title="Verify OTP" onPress={onVerifyPressed} type={'PRIMARY'} />
      </View>
    </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e0ff',
    paddingHorizontal: 20,
    gap: 10,
  },
  containerDark: {
    backgroundColor: '#1b1c27',
  },
  containerLight: {
    backgroundColor: '#e5e0ff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#D2CEE6',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 8,
    color: '#1b1c27',
    fontWeight: 'bold',
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'gray',
  },
  inputDark: {
    backgroundColor: '#31323C',
    color: '#ffffff',
  },
  inputLight: {
    backgroundColor: '#D2CEE6',
    color: '#1b1c27',
  },
  codeLabel: {
    color: '#5E5E5E',
    fontSize: 16,
    paddingVertical: 5,
    marginTop: 20,
  },
  codeHeading: {
    color: '#4C7CE5',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#4C7CE5',
  },
  inputResend: {
    color: '#4C7CE5',
    fontSize: 16,
    padding: 6,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  inputResendCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'flex-end',
  },

  phone: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 170,
    resizeMode: 'contain'
  },
  phoneContainer: {
    flex: 1,
    maxHeight: 160,
    alignItems: 'center',
    marginTop: 20
  },
});