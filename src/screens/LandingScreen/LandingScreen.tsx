import { View, Text, Image, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import React from 'react';
import CustomButton from '../../../src/components/CustomButton/CustomButton';

const LandingScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const onLoginInPressed = () => {
    console.warn('Login');
  };
  const onRegisterPressed = () => {
    console.warn('Register');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../../assets/images/vote.png')}
        />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
  },
  containerDark: {
    backgroundColor: '#1b1c27',
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  moto: {
    color: 'gray',
    fontWeight: '400',
    fontFamily: 'Helvetica',
  },
  motoDark: {
    color: '#fff',
  },
  motoLight: {
    color: 'gray',
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
  },
});
export default LandingScreen;