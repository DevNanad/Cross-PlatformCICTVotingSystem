

//Navigation imports
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';




import ChooseLoginScreen from './screens/ChooseLoginScreen';
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
import PinLoginScreen from './screens/PinLoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import CastVoteScreen from './screens/CastVoteScreen';
import ElectionHistoryScreen from './screens/ElectionHistoryScreen';
import DevelopersScreen from './screens/DevelopersScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import SettingsScreen from './screens/SettingsScreen';


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
  MyDrawer: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator();

function MyDrawer (){
  return (
    <Drawer.Navigator initialRouteName='DashboarScreen'>
      <Drawer.Screen 
      name="Home" 
      component={DashboardScreen}
      options={{
        title: 'Home',
        headerTransparent: true,
        headerTintColor: '#4C7CE5',
        headerTitleAlign: 'center',
      }} />
      <Drawer.Screen 
      name="Cast Vote" 
      component={CastVoteScreen}
      options={{
        title: 'Cast Vote',
        headerTransparent: true,
        headerTintColor: '#4C7CE5',
        headerTitleAlign: 'center',
      }} />
      <Drawer.Screen 
      name="Election History" 
      component={ElectionHistoryScreen}
      options={{
        title: 'Election History',
        headerTransparent: true,
        headerTintColor: '#4C7CE5',
        headerTitleAlign: 'center',
      }} />
      <Drawer.Screen 
      name="Developers" 
      component={DevelopersScreen}
      options={{
        title: 'Developers',
        headerTransparent: true,
        headerTintColor: '#4C7CE5',
        headerTitleAlign: 'center',
      }} />
      <Drawer.Screen 
      name="Privacy Policy" 
      component={PrivacyPolicyScreen}
      options={{
        title: 'Privacy Policy',
        headerTransparent: true,
        headerTintColor: '#4C7CE5',
        headerTitleAlign: 'center',
      }} />
      <Drawer.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={{
        title: 'Setings',
        headerTransparent: true,
        headerTintColor: '#4C7CE5',
        headerTitleAlign: 'center',
      }} />
    </Drawer.Navigator>
  );
}



function App () {

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
        <Stack.Screen 
        name='PinLoginScreen'
        component={PinLoginScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }}
        />

        <Stack.Screen 
        name="MyDrawer" 
        component={MyDrawer} 
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: headerTintColor
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App