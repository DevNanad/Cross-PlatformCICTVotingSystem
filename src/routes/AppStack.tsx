import { useColorScheme } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/HomeScreen';
import CastVoteScreen from '../screens/CastVoteScreen';
import ElectionHistoryScreen from '../screens/ElectionHistoryScreen';
import DevelopersScreen from '../screens/DevelopersScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContent from "./DrawerContent";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'



const Drawer = createDrawerNavigator();
const AppStack = () => {
    
    const colorScheme = useColorScheme();
    // Define the header tint color based on the device appearance
    //const headerTintColor = colorScheme === 'dark' ? 'white' : '#1b1c27';
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} initialRouteName='DashboarScreen'>
            <Drawer.Screen 
            name="Home" 
            component={DashboardScreen}
            options={{
                title: 'Home',
                headerTransparent: true,
                headerTintColor: '#4C7CE5',
                headerTitleAlign: 'center',
                drawerIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home-variant" size={size} color={color} />
                )
            }} />
            <Drawer.Screen 
            name="Cast Vote" 
            component={CastVoteScreen}
            options={{
                title: 'Cast Vote',
                headerTransparent: true,
                headerTintColor: '#4C7CE5',
                headerTitleAlign: 'center',
                drawerIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="vote" size={size} color={color} />
                )
            }} />
            <Drawer.Screen 
            name="Election History" 
            component={ElectionHistoryScreen}
            options={{
                title: 'Election History',
                headerTransparent: true,
                headerTintColor: '#4C7CE5',
                headerTitleAlign: 'center',
                drawerIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="history" size={size} color={color} />
                )
            }} />
            <Drawer.Screen 
            name="Developers" 
            component={DevelopersScreen}
            options={{
                title: 'Developers',
                headerTransparent: true,
                headerTintColor: '#4C7CE5',
                headerTitleAlign: 'center',
                drawerIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="account-group" size={size} color={color} />
                )
            }} />
            <Drawer.Screen 
            name="Privacy Policy" 
            component={PrivacyPolicyScreen}
            options={{
                title: 'Privacy Policy',
                headerTransparent: true,
                headerTintColor: '#4C7CE5',
                headerTitleAlign: 'center',
                drawerIcon: ({color, size}) => (
                    <MaterialIcons name="privacy-tip" size={size} color={color} />
                )
            }} />
            <Drawer.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
                title: 'Setings',
                headerTransparent: true,
                headerTintColor: '#4C7CE5',
                headerTitleAlign: 'center',
                drawerIcon: ({color, size}) => (
                    <Ionicons name="settings" size={size} color={color} />
                )
            }} />
        </Drawer.Navigator>
    )
}

export default AppStack