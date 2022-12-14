import React from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {colors} from '../constants/theme';
import {useSelector} from 'react-redux';
const MainApp = () => {
  const {is_logged_in} = useSelector(state => state.LoginReducer);

  return (
    <NavigationContainer>
      <StatusBar
        // backgroundColor="#61dafb"
        backgroundColor={colors.dark_primary_color}
        barStyle={'dark-content'}
      />
      {!is_logged_in ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainApp;
