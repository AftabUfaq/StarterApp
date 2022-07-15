import React, {useState } from 'react';
import {SafeAreaView,StatusBar, Text,TouchableOpacity,View} from 'react-native';
import { colors, fonts } from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo'
import { textStyles } from '../../styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
    const RangeCalendar = ({initialDate, setInitialDate}) => {
        const DateChange = (date) => {
           // setInitialDate(moment(date).format('YYYY-MM-DD'));
        }
        return (
            <CalendarPicker
                initialDate={initialDate}
                minDate={'2010-01-01'}
                onDateChange={DateChange}
                maxDate={moment().format('YYYY-MM-DD')}
                monthFormat={'MM/yyyy'}
                showDayStragglers={true}
                dayLabelsWrapper={{
                    backgroundColor:colors.dark_primary_color, 
                    borderWidth:1,
                    borderColor:"#0001",
                   
                    paddingTop:scale(5),
                    paddingBottom:scale(5),
                    borderRadius:scale(100),
                }}
                todayBackgroundColor={colors.default_primary_color}
                todayTextStyle={{
                    backgroundColor:colors.default_primary_color,
                    color:"#fff",
                    fontFamily:fonts.Medium,
                    includeFontPadding:false
                }}
                selectedDayStyle={{
                    backgroundColor:colors.dark_primary_color,
                    
                }}
                selectedDayTextStyle={{
                    color:"#fff",
                    fontFamily:fonts.Medium,
                    includeFontPadding:false
                }}
                selectedRangeStyle={{
                    backgroundColor:colors.dark_primary_color,
                    color:"#fff",
                    fontFamily:fonts.Medium
                }}
                headerWrapperStyle={{
                    backgroundColor:colors.dark_primary_color, 
                    flexDirection:"column",
                    alignItems:"flex-start",
                    
                    paddingTop:scale(5),
                    paddingBottom:scale(10),
                   
                }}
                monthTitleStyle={{
                    ...textStyles.heading, fontSize:scale(14), color:"#fff",
                    marginTop:scale(18),
                    width:wp(30),

                    textAlign:"left"
                }}
                yearTitleStyle={{
                    ...textStyles.skills_text, color:"#fff",
                    position:"absolute",
                    left:-wp(31.5),
                    top:-scale(15),
                   
                    textAlign:"left",
                    width:wp(30),
                    
                }}
                previousComponent={
                    <TouchableOpacity 
                        onPress={() => {
                            setInitialDate(moment(initialDate).add(-1,"month").format('YYYY-MM-DD'))
                        }}
                        style={{position:"absolute",top:15,  right:-wp(80),zIndex:1000, }}
                    >
                        <Entypo color={"#fff"} name="chevron-left" size={scale(24)}  />
                    </TouchableOpacity>
                }
                nextComponent={
                    <TouchableOpacity 
                        onPress={() => {
                            setInitialDate(moment(initialDate).add(1,"month").format('YYYY-MM-DD'))
                        }}
                        style={{position:"absolute",bottom:0, left:wp(85)}}
                    >
                        <Entypo color={"#fff"} name="chevron-right" size={scale(24)}  />
                    </TouchableOpacity>
                }
                customDayHeaderStyles={() => {
                    return{
                          textStyle: {
                            color: '#fff',
                            fontFamily:fonts.Medium,
                            includeFontPadding:false
                          }
                    }
                }}
                textStyle={{
                    color: 'rgba(0,0,0,.7)',
                    fontFamily:fonts.Medium,
                    includeFontPadding:false  
                }}
                allowRangeSelection={true}
            />
        );
    };


export default RangeCalendar;

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
