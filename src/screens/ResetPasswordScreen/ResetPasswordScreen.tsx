import { Image, ScrollView, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onConfirmPressed = () => {
    console.warn('Password confirmed', newPassword, confirmNewPassword);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
    >
      <View style={styles.phoneContainer}>
        <Image
          style={styles.phone}
          source={require('../../../assets/images/resetpass.png')}
          resizeMode="contain"
        />
      </View>
      <Text
        style={[styles.codeHeading, isDarkMode ? styles.codeHeadingDark : styles.codeHeadingLight]}
      >
        Reset Your Password?
      </Text>

      <View>
        <View style={styles.inputContainer}>
          <View
            style={[
              styles.containerInput,
              isDarkMode ? styles.containerInputDark : styles.containerInputLight,
            ]}
          >
            <TextInput
              value={newPassword}
              onChangeText={(pass) => setNewPassword(pass)}
              placeholder={'New Password'}
              placeholderTextColor={'gray'}
              style={[
                styles.input,
                styles.bottomLine,
                isDarkMode ? styles.inputDark : styles.inputLight,
              ]}
            />
            <TextInput
              value={confirmNewPassword}
              onChangeText={(pass) => setConfirmNewPassword(pass)}
              placeholder={'Confirm New Password'}
              placeholderTextColor={'gray'}
              style={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
            />
          </View>
        </View>

        <CustomButton title="Confirm" onPress={onConfirmPressed} type={'PRIMARY'} />
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;

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
    marginTop: 10,
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
  input: {
    color: '#1b1c27',
    fontSize: 17,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  inputDark: {
    color: 'white',
  },
  containerInput: {
    backgroundColor: '#e8e8e8',
    width: '100%',

    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 30,
  },
  containerInputDark: {
    backgroundColor: '#31323C',
  },
  containerInputLight: {
    backgroundColor: '#e8e8e8',
  },
  inputLight: {
    color: '#1b1c27',
  },

  bottomLine: {
    borderBottomWidth: 1,
  },
});