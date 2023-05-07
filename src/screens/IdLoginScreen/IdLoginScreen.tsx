import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

import React, { useState } from 'react';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/AuthStack';
import { useAuthStore } from '../../store/AuthStore';

type idLogProps = NativeStackScreenProps<RootStackParamList, 'IdLoginScreen'>

const IdLoginScreen = ({navigation}: idLogProps) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useAuthStore((state)=> state) 

  const isDarkMode = useColorScheme() === 'dark';

  const onIdLoginPressed = () => {
    logIn(id, password)
    navigation.navigate("PinLoginScreen");
    //console.warn('Login using Id');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("NumberScreen");
    //console.warn('Forgot password');
  };
  const onRegisterPressed = () => {
    navigation.navigate("IdRegisterScreen")
    //console.warn('Register');
  };
  return (
    <ScrollView style={[styles.root, isDarkMode ? styles.rootDark : styles.rootLight]} showsVerticalScrollIndicator={false}>
      {/* TCU Background Image */}
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../../assets/images/bg.png')}
      ></ImageBackground>
      {/* end Background Image */}

      <View style={[styles.login, isDarkMode ? styles.loginDark : styles.loginLight]}>
        {/* Login Heading start*/}
        <View style={styles.log}>
          <Text
            style={[styles.loginText, isDarkMode ? styles.loginTextDark : styles.loginTextLight]}
          >
            Login
          </Text>
        </View>
        {/* TCU Background Image */}

        {/* Login Form */}
        <View style={styles.inputForm}>
          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Student ID
          </Text>
          <CustomInput placeholder="ex. 0123456" value={id} setValue={setId} keyType="numeric" maxLength={7} />
          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Password
          </Text>
          <CustomInput
            placeholder="* * * * * *"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

          <CustomButton title="Login" onPress={onIdLoginPressed} type={'PRIMARY'} />

          <View style={styles.action}>
            <Text style={styles.actionChoice} onPress={onForgotPasswordPressed}>
              Forgot Password?
            </Text>
            <Text style={styles.actionChoice} onPress={onRegisterPressed}>
              Register
            </Text>
          </View>
        </View>
        {/* end Login Form */}
      </View>
    </ScrollView>
  );
};

export default IdLoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E5E0FF'
  },
  rootDark: {
    backgroundColor: '#1b1c27',
  },
  rootLight: {
    backgroundColor: '#E5E0FF',
  },
  ImageBackground: {
    height: Dimensions.get('window').height / 2.5,
  },
  login: {
    flex: 1.5,
    backgroundColor: '#E5E0FF',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginDark: {
    backgroundColor: '#1b1c27',
  },
  loginLight: {
    backgroundColor: '#E5E0FF',
  },
  log: {
    padding: 20,
  },
  loginText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#4C7CE5',
    textAlign: 'center',
    letterSpacing: 5,
  },
  loginTextDark: {
    color: '#ffffff',
  },
  loginTextLight: {
    color: '#4C7CE5',
  },
  inputForm: {
    paddingHorizontal: 20,
  },
  label: {
    color: 'gray',
    letterSpacing: 1,
  },
  labelDark: {
    color: 'gray',
  },
  labelLight: {
    color: 'gray',
  },

  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionChoice: {
    paddingVertical: 5,
    fontWeight: '500',
    color: '#5E5E5E',
    textDecorationLine: 'underline',
  },
});