import React, {useRef, useEffect, useState } from 'react';
import {SafeAreaView,StatusBar,AppState, Text,View} from 'react-native';
import { commonStyles,textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
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
                    
                </View>
            </SafeAreaView>
            
        );
    };


export default OnBoardingScreen;

