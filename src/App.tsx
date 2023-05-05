import React from 'react';

//Navigation imports
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import ChooseLoginScreen from './screens/ChooseLoginScreen';
import ChooseRegisterScreen from './screens/ChooseRegisterScreen';
import IdLoginScreen from './screens/IdLoginScreen';
import IdRegisterScreen from './screens/IdRegisterScreen';
import LandingScreen from './screens/LandingScreen';
import OtpScreen from './screens/OtpScreen';
import QrLoginScreen from './screens/QrLoginScreen';
import QrRegisterScreen from './screens/QrRegisterScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import { useColorScheme } from 'react-native';
import NumberScreen from './screens/NumberScreen';
import PinCreateScreen from './screens/PinCreateScreen';

export type RootStackParamList = {
  LandingScreen: undefined;
  ChooseLoginScreen: undefined;
  IdLoginScreen: undefined;
  IdRegisterScreen: undefined;
  OtpScreen: { where: string};
  QrLoginScreen: undefined;
  QrRegisterScreen: undefined;
  ResetPasswordScreen: undefined;
  NumberScreen: undefined;
  PinCreateScreen: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {

  const colorScheme = useColorScheme();

  // Define the header tint color based on the device appearance
  const headerTintColor = colorScheme === 'dark' ? 'white' : '#1b1c27';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen'>
        
        <Stack.Screen 
        name='LandingScreen'
        component={LandingScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />

        <Stack.Screen 
        name="ChooseLoginScreen"
        component={ChooseLoginScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />
        
        <Stack.Screen 
        name='IdLoginScreen'
        component={IdLoginScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />

        <Stack.Screen 
        name='IdRegisterScreen'
        component={IdRegisterScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />

        <Stack.Screen 
        name='OtpScreen'
        component={OtpScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />

        <Stack.Screen 
        name='QrLoginScreen'
        component={QrLoginScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />
        <Stack.Screen 
        name='QrRegisterScreen'
        component={QrRegisterScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />
        <Stack.Screen 
        name='ResetPasswordScreen'
        component={ResetPasswordScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />
        <Stack.Screen 
        name='NumberScreen'
        component={NumberScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />
        <Stack.Screen 
        name='PinCreateScreen'
        component={PinCreateScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;