import { Alert, Image, ScrollView, StyleSheet, Platform, Text, useColorScheme, View, StatusBar } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import OtpInputs from 'react-native-otp-inputs';
//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/AuthStack';
import { useAuthStore } from '../../store/AuthStore';
import { SafeAreaView } from 'react-native';

type PinLogProps = NativeStackScreenProps<RootStackParamList, 'PinLoginScreen'>


const PinLoginScreen = ({navigation}: PinLogProps) => {
  const [tries, setTries] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [mistakes, setMistakes] = useState(1);
  const { authData, setIsLoggedIn, setAuthData } = useAuthStore((state) => state)
  const [error, setError] = useState("")
  const [life, setLife] = useState(3)
  const isDarkMode = useColorScheme() === 'dark';


  const handleCodeChange = (code:any) => {
    if(timeRemaining > 0) {
      return
    }else{
      if (code.length === 4) {

        if (code === authData?.pin) {
          setIsLoggedIn(true)
        } else {
          setTries(tries + 1);
          setLife(life - 1)
          if (tries === 3) {
            setError("")
            setMistakes(mistakes + 1)
            if(mistakes > 0){
              console.log("here", mistakes);
              
              setTries(1) //this should be global state in zustand
              setTimeRemaining(60 * mistakes); // increment 1 minute every 3 wrong tries
              setLife(3)
            }else{
              
              setTries(1) //this should be global state in zustand
              setTimeRemaining(60); // Lock for 1 minute (60 seconds)
              setLife(3)
            }
          }else{
            setError("Invalid Pin number")
          }
        }
      }
    }
  };
  let interval: number;

  const isUnmounted = useRef(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!isUnmounted.current) {
        e.preventDefault();
        setAuthData(undefined);
        isUnmounted.current = true;
        navigation.goBack();
      }
    });
    return () => {
      unsubscribe();
      isUnmounted.current = true;
    };
  }, [navigation, setAuthData]);

  useEffect(() => {
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeRemaining, tries]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
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
          <Text style={styles.life}>Chances: {life}</Text>
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
        {error !== "" && (
          <Text style={styles.timerText}>
            {error}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PinLoginScreen;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#e5e0ff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  droidSafeAreaLight: {
    backgroundColor: "#e5e0ff",
  },
  droidSafeAreaDark: {
    backgroundColor: '#1b1c27',
  },
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
    marginTop: 10,
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
  life: {
    color: 'gray',
    paddingTop: 10,
    fontSize: 13
  },
  codeHeading: {
    marginTop: 10,
    marginBottom: 5,
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