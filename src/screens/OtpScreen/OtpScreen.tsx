import { Image, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import OtpInputs from 'react-native-otp-inputs';
import CustomButton from '../../components/CustomButton';

const OtpScreen = () => {
  const [otp, setOtp] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onVerifyPressed = () => {
    console.warn('Verified OTP ', otp);
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
        <Image
          style={styles.phone}
          source={require('../../../assets/images/otp.png')}
          resizeMode="contain"
        />
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
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    gap: 10,
  },
  containerDark: {
    backgroundColor: '#1b1c27',
  },
  containerLight: {
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#e8e8e8',
    textAlign: 'center',
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 8,
    color: '#1b1c27',
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputDark: {
    backgroundColor: '#31323C',
    color: '#ffffff',
  },
  inputLight: {
    backgroundColor: '#e8e8e8',
    color: '#1b1c27',
  },
  codeLabel: {
    color: 'gray',
    fontSize: 16,
    paddingVertical: 5,
    marginTop: 20,
  },
  codeHeading: {
    color: '#0081C9',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#0081C9',
  },
  inputResend: {
    color: 'lightblue',
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
  },
  phoneContainer: {
    flex: 1,
    maxHeight: 160,
    alignItems: 'center',
  },
});