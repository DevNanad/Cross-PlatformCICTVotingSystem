import { StyleSheet, Text, SafeAreaView, useColorScheme, ScrollView, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const NumberScreen = () => {
  const [number, setNumber] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onSubmitPressed = () => {
    console.warn('Number', number);
  };

  return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
      >
        <View style={styles.keyContainer}>
          <View style={styles.keyCircle}>
            <MaterialCommunityIcons name='key' size={70} color='#0081C9' />
          </View>
        </View>
        <Text
          style={[styles.codeHeading, isDarkMode ? styles.codeHeadingDark : styles.codeHeadingLight]}
        >
          Provide the details below to begin the process
        </Text>

        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <CustomInput
              placeholder="ex. 09123456789"
              value={number}
              keyType="numeric"
              setValue={setNumber}
              maxLength={11}
            />
          </View>

          <CustomButton title="Submit" onPress={onSubmitPressed} type={'PRIMARY'} />
        </View>
      </ScrollView>
  )
}

export default NumberScreen

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
    color: '#1b1c27',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#1b1c27',
  },
  phone: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 170,
  },
  keyContainer: {
    flex: 1,
    maxHeight: 160,
    alignItems: 'center',
    marginVertical: 50
  },
  keyCircle: {
    backgroundColor: '#EDEEF2',
    borderRadius: 100,
    padding: 15,
    
  }

});