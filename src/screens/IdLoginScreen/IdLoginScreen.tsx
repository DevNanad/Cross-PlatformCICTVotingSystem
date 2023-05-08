import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

//Login Validation
const loginSchema = Yup.object().shape({
  voterId: Yup.number()
  .min(1000000, "ID should be 7 digits")
  .max(9999999, "ID should be 7 digits")
  .required("ID is required"),
  voterPassword: Yup.string()
  .required("Password is required")
})

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/AuthStack';
import { useAuthStore } from '../../store/AuthStore';

type idLogProps = NativeStackScreenProps<RootStackParamList, 'IdLoginScreen'>

const IdLoginScreen = ({navigation}: idLogProps) => {
  const { logIn, authData, loginError } = useAuthStore((state)=> state) 

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if(authData != undefined){
      navigation.navigate("PinLoginScreen");
    }
  }, [authData])

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
    <ImageBackground
      style={styles.ImageBackground}
      source={require('../../../assets/images/bg.png')}
    ></ImageBackground>
    <View style={[styles.login, isDarkMode ? styles.loginDark : styles.loginLight]}>
      <View style={styles.log}>
        <Text style={[styles.loginText, isDarkMode ? styles.loginTextDark : styles.loginTextLight]}>
          Login
        </Text>
      </View>
      <Formik
        initialValues={{ voterId: '', voterPassword: '' }}
        validationSchema={loginSchema}
        onSubmit={ async (values, { setSubmitting }) => {
          await logIn(values.voterId, values.voterPassword);
          setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View style={styles.inputForm}>
            <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
              Student ID (Required)
            </Text>
            <CustomInput
              placeholder="ex. 0123456"
              value={values.voterId}
              setValue={handleChange('voterId')}
              onBlur={handleBlur('voterId')}
              keyType="numeric"
              maxLength={7}
            />
            {touched.voterId && errors.voterId ? (
              <Text style={styles.errorMessage}>{errors.voterId}</Text>
            ) : null}
            <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
              Password (Required)
            </Text>
            <CustomInput
              placeholder="* * * * * *"
              value={values.voterPassword}
              setValue={handleChange('voterPassword')}
              onBlur={handleBlur('voterPassword')}
              secureTextEntry
            />
            {touched.voterPassword && errors.voterPassword ? (
              <Text style={styles.errorMessage}>{errors.voterPassword}</Text>
            ) : null}
            {loginError ? (
              <Text style={styles.errorMessage}>{loginError}</Text>
            ) : null}
            <CustomButton
              title="Login"
              onPress={handleSubmit}
              disabled={isSubmitting}
              type={'PRIMARY'}
            />
            <View style={styles.action}>
              <Text style={styles.actionChoice} onPress={onForgotPasswordPressed}>
                Forgot Password?
              </Text>
              <Text style={styles.actionChoice} onPress={onRegisterPressed}>
                Register
              </Text>
            </View>
          </View>
        )}
      </Formik>
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
  errorMessage: {
    color: '#ED4337',
    textAlign: 'center'
  }
});