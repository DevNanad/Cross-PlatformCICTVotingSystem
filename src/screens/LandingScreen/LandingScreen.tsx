import { View, Text, Image, StyleSheet, ScrollView, useColorScheme, ImageSourcePropType, StatusBar } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../../src/components/CustomButton';
import LandingImage from '../../../assets/images/vote.png'

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/AuthStack';
import CustomImage from '../../components/CustomImage/CustomImage';

type LandingProps = NativeStackScreenProps<RootStackParamList, 'LandingScreen'>

const LandingScreen = ({navigation}: LandingProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [landing_img, setLanding_Img] = useState<ImageSourcePropType>(LandingImage)

  const onLoginInPressed = () => {
    navigation.navigate('ChooseLoginScreen')
    //console.warn('Login');
  };
  const onRegisterPressed = () => {
    navigation.navigate("IdRegisterScreen")
    //console.warn('Register');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}>
        <CustomImage img_style={styles.logo} imageUrl={landing_img}/>
        <View style={styles.greetings}>
          <Text style={[styles.heading, isDarkMode ? styles.headingDark : styles.headingLight]}>
            Welcome
          </Text>

          <Text style={[styles.moto, isDarkMode ? styles.motoDark : styles.motoLight]}>
            You are the leaders of tomorrow! Use our student voting platform to lead the way and
            vote for the future you want to see in our Department.
          </Text>
        </View>
        <CustomButton title={'Login'} onPress={onLoginInPressed} type={'PRIMARY'} />
        <CustomButton title={'Register'} onPress={onRegisterPressed} type={'SECONDARY'} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e0ff',
    alignItems: 'center',
    padding: 10,
  },
  containerDark: {
    backgroundColor: '#1b1c27',
  },
  containerLight: {
    backgroundColor: '#e5e0ff',
  },
  moto: {
    color: '#3F3D56',
    fontWeight: '400',
    fontFamily: 'Helvetica',
  },
  motoDark: {
    color: '#e1e1e1',
  },
  motoLight: {
    color: '#3F3D56',
  },
  greetings: {
    marginVertical: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1b1c27',
    letterSpacing: 3,
  },
  headingDark: {
    color: '#fff',
  },
  headingLight: {
    color: '#1b1c27',
  },
  logo: {
    width: '90%',
    maxWidth: 300,
    maxHeight: 300,
    resizeMode: 'contain'
  },
});
export default LandingScreen;