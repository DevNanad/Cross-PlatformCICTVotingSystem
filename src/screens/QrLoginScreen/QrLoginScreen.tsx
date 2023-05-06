import React, { useState } from 'react';

import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import CustomButton from '../../components/CustomButton';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App';

type qrLogProps = NativeStackScreenProps<RootStackParamList, 'QrLoginScreen'>

const QrLoginScreen = ({navigation}: qrLogProps) => {
  const [on, setOn] = useState(false);

  const ScreenHeight = Dimensions.get('window').height;

  const onSuccess = (e:any) => {
    Alert.alert(e.data);
    navigation.popToTop()
    navigation.replace("MyDrawer")
    //navigation.replace("PinLoginScreen")
    // Linking.openURL(e.data).catch((err) => console.error('An error occured', err));
  };

  const torchControll = () => {
    RNCamera.Constants.FlashMode.on;
  };

  return (
    <View style={styles.root}>
      <QRCodeScanner
        cameraStyle={{ height: ScreenHeight }}
        onRead={onSuccess}
        fadeIn={true}
        reactivate={true}
        showMarker={true}
      />

      <View style={styles.bottomContent}>
        <Text style={styles.qrText}>Scan QR Code</Text>

        <CustomButton type={'SECONDARY'} title="Torch" onPress={torchControll} />
      </View>
    </View>
  );
};

export default QrLoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'coral',
  },
  cameraStyle: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  qrText: {
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  bottomContent: {
    padding: 10,
    alignItems: 'center',
  },
  markerStyle: {
    color: 'coral',
  },
});