import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  useColorScheme,
} from 'react-native';

import ChooseLoginScreen from './src/screens/ChooseLoginScreen';
import ChooseRegisterScreen from './src/screens/ChooseRegisterScreen';
import IdLoginScreen from './src/screens/IdLoginScreen';
import IdRegisterScreen from './src/screens/IdRegisterScreen';
import LandingScreen from './src/screens/LandingScreen';
import QrLoginScreen from './src/screens/QrLoginScreen';
import QrRegisterScreen from './src/screens/QrRegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[styles.root, isDarkMode ? styles.rootDark : styles.rootLight]}>
       <ResetPasswordScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  rootDark: {
    backgroundColor: '#1b1c27',
  },
  rootLight: {
    backgroundColor: '#fff',
  },
});

export default App;