import React from 'react';
import {FlatList,SafeAreaView,StatusBar,TouchableOpacity,View,} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import TimesheetCard from './TimesheetCard'
import {faker} from '@faker-js/faker';
import { scale } from 'react-native-size-matters';
import { MainRoutes } from '../../constants/routes';
import moment from 'moment';

 faker.seed(10);
    
    const TimesheetScreen = ({navigation}) => {

        const DATA = [...Array(10).keys()].map((_, i) => {
            return {
                week_start:`Week start at ${moment(faker.date.between('2017-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')).format("DD-MM-YYYY")}`,
                company_name: faker.company.companyName(),
                candidate_name: faker.name.findName(),
                total_hours:faker.datatype.number({
                    min:2,
                    max:120,
                }),
                color:faker.helpers.arrayElement(['#1CAF9A', '#1CAF9A', '#1CAF9A']),
                job_title:faker.name.jobTitle(),
                approver_name: faker.name.findName(),
                updateed_by_name:faker.name.findName(),
                update_date:moment(faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')).format("DD-MM-YYYY"),
                status:faker.helpers.arrayElement(['Active', 'Close', 'Reject']), // `Active`,
            };
        });
       
        const renderItem = ({item, index}) => {
            return(
                <TimesheetCard 
                    item={item}
                    onPress={() => navigation.navigate(MainRoutes.OnBoardingDetailsScreen)}
                   
                />
            )
            
        }
        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"TimeSheet"}
                    />
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    
                    />
                    
                    <TouchableOpacity 
                        onPress={() => navigation.navigate(MainRoutes.AddTimesheetScreen)}
                        style={commonStyles.AddButton}>
                        <AntDesign name={"pluscircle"} size={scale(35)} color={colors.dark_primary_color} />
                    </TouchableOpacity>
                  
                </View>
            </SafeAreaView>
            
        );
    };



export default TimesheetScreen;

