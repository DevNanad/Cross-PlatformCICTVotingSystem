import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  useColorScheme,
} from 'react-native';

import ChooseLoginScreen from './src/screens/ChooseLoginScreen';
import ChooseRegisterScreen from './src/screens/ChooseRegisterScreen';
import LandingScreen from './src/screens/LandingScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[styles.root, isDarkMode ? styles.rootDark : styles.rootLight]}>
       <ChooseRegisterScreen/>
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