import React from 'react';
import {FlatList,SafeAreaView,StatusBar,TouchableOpacity,View,} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import PlacementCard from './PlacementCard'
import {faker} from '@faker-js/faker';
import { scale } from 'react-native-size-matters';
import { MainRoutes } from '../../constants/routes';
import moment from 'moment';

 faker.seed(10);
    
    const PlacementsScreen = ({navigation}) => {

        const DATA = [...Array(10).keys()].map((_, i) => {
            return {
                company_name: faker.company.companyName(),
                candidate_name: faker.name.findName(),
                color:faker.helpers.arrayElement(['#4a741d', '#d9534f', '#1CAF9A']),
                job_title:faker.name.jobTitle(),
                contact_name: faker.name.findName(),
                owner_name: faker.name.findName(),
                join_date:moment(faker.date.between('2017-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')).format("DD-MM-YYYY"),
                release_date:moment(faker.date.between('2017-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')).format("DD-MM-YYYY"),
                expense_report_manager: faker.name.findName(),
                placed_by: faker.name.findName(),
                time_report_manager: faker.name.findName(),
                updateed_by_name:faker.name.findName(),
                update_date:moment(faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')).format("DD-MM-YYYY"),
                status:faker.helpers.arrayElement(['Active', 'Canceled', 'Completed']), // `Active`,
            };
        });
       
        const renderItem = ({item, index}) => {
            return(
                <PlacementCard 
                    item={item}
                    onPress={() => navigation.navigate(MainRoutes.EditPlacementScreen)}
                   
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
                        title={"Placements"}
                    />
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    
                    />
                    
                    <TouchableOpacity 
                        onPress={() => navigation.navigate(MainRoutes.AddPlacementScreen)}
                        style={commonStyles.AddButton}>
                        <AntDesign name={"pluscircle"} size={scale(35)} color={colors.dark_primary_color} />
                    </TouchableOpacity>
                  
                </View>
            </SafeAreaView>
            
        );
    };



export default PlacementsScreen;

