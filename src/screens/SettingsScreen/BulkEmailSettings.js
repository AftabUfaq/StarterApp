import React from 'react';
import {SafeAreaView,StatusBar,View} from 'react-native';
import { commonStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { MainRoutes } from '../../constants/routes';
import { colors, fonts } from '../../constants/theme';
    const BulkEmailSettings = ({navigation}) => {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                       show_backButton={true}
                       isdrawer={false}
                       onPress={() => navigation.goBack()}
                       title={"Bulk Email"}
                    />
                  
                   
                
                </View>
            </SafeAreaView> 
        );
    };


export default BulkEmailSettings;

