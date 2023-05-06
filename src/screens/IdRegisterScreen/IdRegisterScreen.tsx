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
import { RootStackParamList } from '../../App';

type idRegProps = NativeStackScreenProps<RootStackParamList, 'IdRegisterScreen'>


const IdRegisterScreen = ({navigation}: idRegProps) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mNumber, setMNumber] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onLoginPressed = () => {
    navigation.navigate("ChooseLoginScreen")
    //console.warn('Register using Id');
  };
  // const onForgotPasswordPressed = () => {
  //   console.warn('Forgot password');
  // };
  const onRegisterPressed = () => {
    navigation.navigate("OtpScreen", {where: "register"})
    //console.warn('Login');
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
        {/* Register Heading start*/}
        <View style={styles.log}>
          <Text
            style={[styles.loginText, isDarkMode ? styles.loginTextDark : styles.loginTextLight]}
          >
            Register
          </Text>
        </View>
        {/* TCU Background Image */}

        {/* Register Form */}
        <View style={styles.inputForm}>
          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Student ID (Required)
          </Text>
          <CustomInput
            placeholder="ex. 0123456"
            value={id}
            setValue={setId}
            keyType="numeric"
            maxLength={7}
          />
          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Password (Required)
          </Text>
          <CustomInput
            placeholder="* * * * * *"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Confirm Password (Required)
          </Text>
          <CustomInput
            placeholder="* * * * * *"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry
          />

          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Enter Mobile Number (Required)
          </Text>

          <CustomInput
            placeholder="ex. 09123456789"
            value={mNumber}
            keyType="numeric"
            setValue={setMNumber}
            maxLength={11}
          />

          <CustomButton title="Register" onPress={onRegisterPressed} type={'PRIMARY'} />

          <View style={styles.action}>
            {/* <Text style={styles.actionChoice} onPress={onForgotPasswordPressed}>
              Forgot Password?
            </Text> */}
            <Text style={styles.actionChoice} onPress={onLoginPressed}>
              Login
            </Text>
          </View>
        </View>
        {/* end Register Form */}
      </View>
    </ScrollView>
  );
};

export default IdRegisterScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#e5e0ff'
  },
  rootDark: {
    backgroundColor: '#1b1c27',
  },
  rootLight: {
    backgroundColor: '#e5e0ff',
  },
  ImageBackground: {
    height: Dimensions.get('window').height / 2.5,
  },
  login: {
    flex: 1.5,
    backgroundColor: '#e5e0ff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginDark: {
    backgroundColor: '#1b1c27',
  },
  loginLight: {
    backgroundColor: '#e5e0ff',
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
    justifyContent: 'flex-end',
  },
  actionChoice: {
    paddingVertical: 5,
    color: '#5E5E5E',
    fontWeight: "500",
    textDecorationLine: 'underline',
  },
});