import { StyleSheet, Text, useColorScheme, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import Octicons from 'react-native-vector-icons/Octicons';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/AuthStack';

type CreatePinProps = NativeStackScreenProps<RootStackParamList, 'PinCreateScreen'>


const PinCreateScreen = ({navigation}: CreatePinProps) => {
  const [pin, setPin] = useState('');
  const [confirmpin, setConfirmPin] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onSubmitPressed = () => {
    navigation.navigate("IdLoginScreen")
  };

  return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
      >
        <View style={styles.keyContainer}>
          <View style={styles.keyCircle}>
            <Octicons name='shield-lock' size={70} color='#0081C9' />
          </View>
          <Text
            style={[styles.heading, isDarkMode ? styles.headingDark : styles.headingLight]}
            >
             Create your PIN Code
          </Text>
        </View>
        <Text
          style={[styles.codeHeading, isDarkMode ? styles.codeHeadingDark : styles.codeHeadingLight]}
        >
          Protect your account from unauthorized access with a PIN
        </Text>

        <View>
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="ex. 1234"
              value={pin}
              keyType="numeric"
              setValue={setPin}
              maxLength={4}
            />
            <CustomInput
              placeholder="ex. 1234"
              value={confirmpin}
              keyType="numeric"
              setValue={setConfirmPin}
              maxLength={4}
            />
          </View>

          <CustomButton title="Confirm" onPress={onSubmitPressed} type={'PRIMARY'} />
        </View>
      </ScrollView>
  )
}

export default PinCreateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E0FF',
    paddingHorizontal: 20,
    gap: 10,
  },
  containerDark: {
    backgroundColor: '#1b1c27',
  },
  containerLight: {
    backgroundColor: '#E5E0FF',
  },
  inputLabel: {
    color: '#5e5e5e',
    fontWeight: "600"
  },
  inputContainer: {
    marginVertical: 30,
    gap: 2
  },
  codeHeading: {
    color: '#3F3D56',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#3F3D56',
  },
  heading: {
    color: '#4C7CE5',
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'left',
  },
  headingDark: {
    color: '#ffffff',
  },
  headingLight: {
    color: '#4C7CE5',
  },
  phone: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 170,
  },
  keyContainer: {
    flex: 1,
    gap: 4,
    maxHeight: 160,
    alignItems: 'center',
    marginVertical: 50
  },
  keyCircle: {
    backgroundColor: '#EDEEF2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20
    
  }

});