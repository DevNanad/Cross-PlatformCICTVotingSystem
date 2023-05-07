import {createNativeStackNavigator} from '@react-navigation/native-stack'



import ChooseLoginScreen from '../screens/ChooseLoginScreen';
import IdLoginScreen from '../screens/IdLoginScreen';
import IdRegisterScreen from '../screens/IdRegisterScreen';
import LandingScreen from '../screens/LandingScreen';
import OtpScreen from '../screens/OtpScreen';
import QrLoginScreen from '../screens/QrLoginScreen';
import QrRegisterScreen from '../screens/QrRegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import NumberScreen from '../screens/NumberScreen';
import PinCreateScreen from '../screens/PinCreateScreen';
import PinLoginScreen from '../screens/PinLoginScreen';
import { useColorScheme } from 'react-native';


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
    PinLoginScreen: undefined;
  };


const Stack = createNativeStackNavigator<RootStackParamList>()


const AuthStack = () => {
    const colorScheme = useColorScheme();

    // Define the header tint color based on the device appearance
    const headerTintColor = colorScheme === 'dark' ? 'white' : '#1b1c27';

    return (
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
        <Stack.Screen 
        name='PinLoginScreen'
        component={PinLoginScreen}
        options={{
            title: '',
            headerTransparent: true,
            headerTintColor: headerTintColor
        }}
        />

        </Stack.Navigator>
    )
    }

export default AuthStack