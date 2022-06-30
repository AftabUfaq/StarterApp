import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import SplashScreen from '../screens/WelcomeScreens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreens/WelcomeScreen';
import SignInScreen from '../screens/AuthFlow/SignInScreen';
import SignUpScreen from '../screens/AuthFlow/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthFlow/ForgotPassword';
import { scale } from 'react-native-size-matters';
import { colors, fonts } from '../constants/theme';
const Stack = createNativeStackNavigator();
const options = { 
    title: 'Welcome',
    
    headerStyle: {
        backgroundColor:colors.dark_primary_color,
    },
    headerTintColor:colors.text_primary_color,
        headerTitleStyle: {
            fontSize:scale(18),
            color:colors.white,
            
            fontFamily:fonts.Bold
        }, 
}
const LoginStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='SignInScreen'
        >
           
            <Stack.Screen 
                name="SignInScreen" 
                component={SignInScreen} 
                options={{headerShown:false}}
            />
           

        </Stack.Navigator>
    )
}

export default LoginStack