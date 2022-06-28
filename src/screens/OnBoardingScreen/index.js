import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { commonStyles,textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import { AppScreenWidth, hp, width } from '../../constants/sacling';
import Swiptbutton from './SwipeButton';
    const OnBoardingScreen = ({navigation}) => {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"OnBoarding"}
                    />
                    <Swiptbutton 
                        title={"Button 1"}
                        onPress={() => alert("Button 1")}
                    />
                    <Swiptbutton 
                        title={"Button 2"}
                        onPress={() => alert("Button 2")}
                    />
                        <Swiptbutton 
                        title={"Button 3"}
                        onPress={() => alert("Button 3")}
                    />
                        <Swiptbutton 
                        title={"Button 4"}
                        onPress={() => alert("Button 4")}
                    />

                </View>
            </SafeAreaView>
            
        );
    };


export default OnBoardingScreen;

