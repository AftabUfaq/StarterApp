import React from 'react';
import {ScrollView,View,SafeAreaView} from 'react-native';
import CustomStatusBar from '../../components/StatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomHeader from '../../components/SearchHeader';
import { commonStyles} from '../../styles';
import FiltersComponent from './FiltersComponent';
import TableRow from './TableRow';

const UserActivityDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar />  
      <SafeAreaView style={commonStyles.container} >
        <CustomHeader 
            show_backButton={true}
            isdrawer={false}
            onPress={() =>  navigation.goBack()}
            title={"User Activity Details"}
            isfilter={false}
            iswidgets={false}
        />
         <FiltersComponent />
            <View style={{height:10}} />
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:"center",justifyContent:"center", }} >
               
               
              </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default UserActivityDetailsScreen