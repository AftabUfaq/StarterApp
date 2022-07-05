import React from 'react';
import {FlatList,SafeAreaView,StatusBar,TouchableOpacity,View,} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import ExpensesCard from './ExpensesCard'
import {faker} from '@faker-js/faker';
import { scale } from 'react-native-size-matters';
import { MainRoutes } from '../../constants/routes';
import moment from 'moment';

 faker.seed(10);
    
    const ExpensesScreen = ({navigation}) => {

        const DATA = [...Array(10).keys()].map((_, i) => {
            return {
                expense_title:`Expenses Title ${faker.name.jobTitle()}`,
                status:faker.helpers.arrayElement(['Approved', 'Draft', 'Submitted']), // `Active`,
                candidate_name: faker.name.findName(),
                company_name: faker.company.companyName(),
                job_title:faker.name.jobTitle(),
                approver_name: faker.name.findName(),
                amount:`$${faker.datatype.number({
                    min:2,
                    max:80,
                })}`,
                color:faker.helpers.arrayElement(['#990f00', '#057d05', '#1CAF9A']),
                created_by:faker.name.findName(),
                updateed_by_name:faker.name.findName(),
                update_date:moment(faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')).format("DD-MM-YYYY"),
              
            };
        });
       
        const renderItem = ({item, index}) => {
            return(
                <ExpensesCard 
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
                        title={"Expenses"}
                    />
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    
                    />
                    
                    <TouchableOpacity 
                        onPress={() => navigation.navigate(MainRoutes.ExpensesAddScreen)}
                        style={commonStyles.AddButton}>
                        <AntDesign name={"pluscircle"} size={scale(35)} color={colors.dark_primary_color} />
                    </TouchableOpacity>
                  
                </View>
            </SafeAreaView>
            
        );
    };



export default ExpensesScreen;

