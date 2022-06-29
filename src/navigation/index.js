import React from 'react';
import AuthStack from './ReduxStack';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import  {colors} from '../constants/theme'
const MainApp = () => {
    return(
        <NavigationContainer >
            <StatusBar backgroundColor={colors.dark_primary_color} />
            <AuthStack />
        </NavigationContainer>
    )
};

export default MainApp


