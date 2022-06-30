import React, { useState } from 'react';
import ReduxStack from './ReduxStack';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './LoginStack';
import { StatusBar } from 'react-native';
import  {colors} from '../constants/theme'
const MainApp = () => {
    const [is_logged_in, setIsLoggedIn] = useState(false)
    return(
        <NavigationContainer >
            <StatusBar backgroundColor={colors.dark_primary_color} />
           {
            is_logged_in 
            ? <ReduxStack />
            : <LoginStack />} 
        </NavigationContainer>
    )
};

export default MainApp


