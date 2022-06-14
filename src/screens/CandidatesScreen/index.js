import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,FlatList} from 'react-native';
import { commonStyles,textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import CandidateProfileCard from './CandidateProfileCard'
import {faker} from '@faker-js/faker';
 faker.seed(10);
    
    const CandidatesScreen = ({navigation}) => {

        const DATA = [...Array(50).keys()].map((_, i) => {
            return {
               
                image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1}.jpg`,
                name: faker.name.findName(),
                jobTitle: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                job_description: `${faker.address.cityName()} ${faker.address.country()}`,
                status: `Active Canddidate`,
            };
        });
       
        const renderItem = ({item, index}) => {
                return(
                    <CandidateProfileCard 
                        item={item}
                    />
                )
            
        }
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Candidates"}
                    />
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                    
                    />
                </View>
            </SafeAreaView>
            
        );
    };


export default CandidatesScreen;

