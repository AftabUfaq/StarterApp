import React from 'react';
import {ScrollView,View,SafeAreaView} from 'react-native';
import CustomStatusBar from '../../components/StatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomHeader from '../../components/SearchHeader';
import { commonStyles} from '../../styles';
import FiltersComponent from './FiltersComponent';
import TableRow from './TableRow';

const JobOrdersActivityScreen =  ({navigation})  => {
  return (
    <SafeAreaProvider>
        <CustomStatusBar />  
        <SafeAreaView style={commonStyles.container} >
            <CustomHeader 
                show_backButton={true}
                isdrawer={false}
                onPress={() =>  navigation.goBack()}
                title={"Job Orders Activity"}
            />
             <FiltersComponent />
            <View style={{height:10}} />
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:"center",justifyContent:"center", }} >
                <TableRow  />
                <View style={{height:10}} />
                <TableRow />
                <View style={{height:10}} />
                <TableRow />
                <View style={{height:10}} />

                <TableRow />
                <View style={{height:10}} />
                <TableRow />
                <View style={{height:10}} />
               
              </ScrollView>
            </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default JobOrdersActivityScreen