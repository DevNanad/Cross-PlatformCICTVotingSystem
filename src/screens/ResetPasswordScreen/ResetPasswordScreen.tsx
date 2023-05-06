import { Image, ScrollView, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App';
type resetPasswordProps = NativeStackScreenProps<RootStackParamList, 'ResetPasswordScreen'>


const ResetPasswordScreen = ({navigation}: resetPasswordProps) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onConfirmPressed = () => {
    navigation.pop(3)
    //console.warn('Password confirmed', newPassword, confirmNewPassword);
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
        Reset Your Password
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
              placeholderTextColor={'#8C8C8C'}
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
              placeholderTextColor={'#8C8C8C'}
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
  inputContainer: {
    marginTop: 10,
  },
  codeHeading: {
    color: '#4C7CE5',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#4C7CE5',
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
    backgroundColor: '#d2cee6',
    width: '100%',

    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 30,
  },
  containerInputDark: {
    backgroundColor: '#31323C',
  },
  containerInputLight: {
    backgroundColor: '#d2cee6',
  },
  inputLight: {
    color: '#1b1c27',
    fontWeight: '600'
  },

  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#5A5A5A'
  },
});