import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useColorScheme } from 'react-native';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App';

type ChooseLogProps = NativeStackScreenProps<RootStackParamList, 'LandingScreen'>

const ChooseLoginScreen = ({navigation}: ChooseLogProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const onQrcodePressed = () => {
    navigation.navigate("QrLoginScreen")
    //console.warn('QR Code');
  };
  const onStudentIdPressed = () => {
    navigation.navigate("IdLoginScreen")
    //console.warn('Student ID');
  };
  return (
    <View style={[styles.wrapper, isDarkMode ? styles.wrapperDark : styles.wrapperLight]}>
      <Text style={[styles.choose, isDarkMode ? styles.chooseDark : styles.chooseLight]}>
        Choose
      </Text>
      <View style={styles.mover}>
        <CustomButton type={'PRIMARY'} title={'Login with QR Code'} onPress={onQrcodePressed} />
        <Text style={styles.or}>or</Text>
        <CustomButton
          type={'PRIMARY'}
          title={'Login with Student ID'}
          onPress={onStudentIdPressed}
        />
      </View>
    </View>
  );
};

export default ChooseLoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: 'white',
  },
  wrapperLight: {
    backgroundColor: 'white',
  },
  wrapperDark: {
    backgroundColor: '#1b1c27',
  },
  mover: {
    alignItems: 'center',
    gap: 6,
  },
  or: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '700',
  },
  choose: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 70,
    color: '#1b1c27',
  },
  chooseDark: {
    color: '#fff',
  },
  chooseLight: {
    color: '#1b1c27',
  },
});