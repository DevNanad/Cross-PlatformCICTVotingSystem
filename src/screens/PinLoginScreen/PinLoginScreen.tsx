import { Alert, Image, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import OtpInputs from 'react-native-otp-inputs';
//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/AuthStack';
import { useAuthStore } from '../../store/AuthStore';

type PinLogProps = NativeStackScreenProps<RootStackParamList, 'PinLoginScreen'>


const PinLoginScreen = ({navigation}: PinLogProps) => {
  const [tries, setTries] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const { authData, setIsLoggedIn } = useAuthStore((state) => state)

  const isDarkMode = useColorScheme() === 'dark';

  const pin = 1234;

  const handleCodeChange = (code:any) => {
    if (code.length === 4) {
    //   if (timeRemaining > 0) {
    //     Alert.alert(`Please wait ${timeRemaining} seconds before trying again.`);
    //     return;
    //   }

      if (code === authData?.pin) {
        setIsLoggedIn(true)
        //navigation.popToTop()
        //navigation.replace("MyDrawer")
        //console.warn('Pin is correct');
      } else {
        console.warn('Invalid pin');
        setTries(tries + 1);
        if (tries === 3) {
          setTimeRemaining(60); // lock for 5 minutes (300 seconds)
          setTries(0) //this should be global state in zustand
        }
      }
    }
  };
  let interval: number;

  useEffect(() => {
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
    >
      <View style={styles.phoneContainer}>
        <Image
          style={styles.phone}
          source={require('../../../assets/images/pincode.png')}
          resizeMode="contain"
        />
      </View>
      <Text
        style={[styles.codeHeading, isDarkMode ? styles.codeHeadingDark : styles.codeHeadingLight]}
      >
        Enter your Pin Code
      </Text>

      <View>
        <Text style={styles.codeLabel}>
          Keep your Pin code a secret, never share it to anyone
        </Text>
        <OtpInputs
          autofillFromClipboard={false}
          handleChange={(code) => {
                setTimeout(() => {
                    handleCodeChange(code)
                }, 500);
            }}
          numberOfInputs={4}
          style={styles.inputContainer}
          inputStyles={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
        />
      </View>
      {timeRemaining > 0 && (
        <Text style={styles.timerText}>
          Please wait {formatTime(timeRemaining)} before trying again.
        </Text>
      )}
    </ScrollView>
  );
};

export default PinLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e0ff',
    paddingHorizontal: 40,
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
    marginTop: 30,
  },
  input: {
    backgroundColor: '#D2CEE6',
    textAlign: 'center',
    paddingHorizontal: 12,
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
    color: '#3F3D56',
    fontSize: 16,
    paddingVertical: 5,
  },
  codeHeading: {
    marginTop: 10,
    color: '#0081C9',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#0081C9',
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
    marginTop: 20
  },
  timerText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    color: '#e57373',
  }
});