import React, {useState } from 'react';
import {SafeAreaView,StatusBar, Text,TouchableOpacity,View} from 'react-native';
import { colors, fonts } from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo'
import { textStyles } from '../../styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
    const CustomCalendar = ({initialDate, setInitialDate}) => {
    
        return (
            <Calendar
                initialDate={initialDate}
                minDate={'2010-01-01'}
            
                maxDate={moment().format('YYYY-MM-DD')}
                monthFormat={'MM/yyyy'}
                hideArrows={false}
                markingType={"period"}
                markedDates={{
                    '2022-07-10': {selected: true, marked: true, selectedColor: 'blue'},
                    '2022-07-11': {marked: true},
                   
                  }}
                style={{
                    width:wp(98),
                    alignSelf:"center",
                    overflow:"hidden",
                    borderColor:"#0001",
                    borderRadius:10,
                    borderWidth:1,
                    paddingRight:0,
                    paddingLeft:0,
                }}
                displayLoadingIndicator={false}
                hideExtraDays={false}
                renderHeader={(date) => { 
                    return(
                        <View style={{width:wp(98),marginLeft:0, padding:scale(10), backgroundColor:colors.dark_primary_color,  }}>
                            <Text style={{...textStyles.skills_text, color:"#fff"}}>{moment(initialDate).format("YYYY")}</Text>
                            <Text style={{...textStyles.heading, fontSize:scale(14), color:"#fff"}}>{moment(initialDate).format("MMMM")}</Text>
                        </View>
                    )
                }}
                theme={theme}
                renderArrow={(direction) => {
                    if(direction === "left"){
                        return(
                            <TouchableOpacity 
                                onPress={() => {setInitialDate(moment(initialDate).add(-1,"month").format('YYYY-MM-DD'))}}
                                style={{position:"absolute",right:-wp(85),bottom:0,  zIndex:1000, }}>
                                    <Entypo color={"#fff"} name="chevron-left" size={scale(24)}  />
                            </TouchableOpacity>
                        )
                    }else{
                        return(
                            <TouchableOpacity 
                                onPress={() => {setInitialDate(moment(initialDate).add(1,"month").format('YYYY-MM-DD'))}}
                                style={{position:"absolute",right:-wp(95),bottom:0,  zIndex:100 }}>
                                <Entypo color={"#fff"} name="chevron-right" size={scale(24)}  />
                            </TouchableOpacity>
                        )
                    } 
                }}
               
                hideDayNames={false}
                showWeekNumbers={false}
                enableSwipeMonths={true}
                
            />
        );
    };


export default CustomCalendar;

const theme = {
    dayTextColor:"#000",
    'stylesheet.calendar.header': {
        header:{
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: 0,
            flexDirection: 'row',
            alignSelf:"center",
            justifyContent: 'space-between',
        },
        
        partialHeader:{
            backgroundColor:"yellow",
            height:scale(100)
        },
        dayHeader:{
            marginVertical : 3,
            textAlign: 'center',
            color:"#fff",
            includeFontPadding:false,
            fontFamily:fonts.Medium,
            
        },
        arrow:{
            position:"absolute",
            zIndex:1000,
            bottom:10,
        },
        week: {
            flexDirection: 'row',
            backgroundColor:colors.dark_primary_color,
            alignSelf:"center",
            width:wp(97),
            marginTop: 7,
            paddingHorizontal:wp(2),
            borderWidth:1,
            borderColor:"#0001",
            borderRadius:scale(100),
            justifyContent: 'space-between'
        },
    },
    selectedDayBackgroundColor: '#000',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
}
