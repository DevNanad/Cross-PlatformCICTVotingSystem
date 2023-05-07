import { useColorScheme } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/HomeScreen';
import CastVoteScreen from '../screens/CastVoteScreen';
import ElectionHistoryScreen from '../screens/ElectionHistoryScreen';
import DevelopersScreen from '../screens/DevelopersScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SettingsScreen from '../screens/SettingsScreen';




const Drawer = createDrawerNavigator();
const AppStack = () => {
    
    const colorScheme = useColorScheme();
    // Define the header tint color based on the device appearance
    //const headerTintColor = colorScheme === 'dark' ? 'white' : '#1b1c27';
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
    )
}

export default AppStack