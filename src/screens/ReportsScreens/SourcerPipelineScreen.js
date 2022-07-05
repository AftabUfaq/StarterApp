import React, {useEffect, useState} from 'react';
import {ScrollView,View,StyleSheet,Platform,SafeAreaView, Text,Image, TouchableOpacity} from 'react-native';
import CustomStatusBar from '../../components/StatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import { commonStyles,selectStyles, textStyles } from '../../styles';

const SourcerPipelineScreen = () => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar />  
      <SafeAreaView style={commonStyles.container} >
          <CustomHeader 
              show_backButton={true}
              isdrawer={false}
              onPress={() =>  navigation.goBack()}
              title={"Sourcer Pipeline"}
          />
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SourcerPipelineScreen