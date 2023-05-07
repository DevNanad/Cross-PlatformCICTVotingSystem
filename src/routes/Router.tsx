import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuthStore } from '../store/AuthStore';


export const Router = () => {

    const { authData, isLoggedIn } = useAuthStore((state)=> state)
    console.log(authData);
    

    return (
    <NavigationContainer>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
    );
};