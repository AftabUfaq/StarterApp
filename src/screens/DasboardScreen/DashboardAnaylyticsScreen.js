import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { commonStyles,textStyles } from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors, fonts } from '../../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { width, wp } from '../../constants/sacling';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
    const DashboardAnaylyticsScreen = ({navigation}) => {
        const sales_slider = 
            {
                title:"Sale Slider",
                items:[
                    {
                        icon_name:"contacts",
                        icon:<AntDesign name='contacts' size={scale(20)} color={"#fff"} />,
                        title:"Contacts",
                        bgColor:"#007998",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    {
                       
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(20)} color={"#fff"} />,
                        title:"Meetings",
                        bgColor:"#8e7cc3",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    {
                       
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"Opportunities",
                        bgColor:"#fdd752",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#a94442"
                    },
                    {
                       
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"Job Orders",
                        bgColor:"#fa8564",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    {
                        
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"Placements",
                        bgColor:"#27b10c",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    
                ]
            }
            const recruiter_slider = 
            {
                title:"Recruiters Slider",
                items:[
                    {
                       
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"Assigned Jobs",
                        bgColor:"#fa8564",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    {
                       
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"Shortlisted",
                        bgColor:"#a64d79",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    {
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"Contact Submission",
                        bgColor:"#5bc0de",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#a94442"
                    },
                    {
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"InterView",
                        bgColor:"#f0ad4e",
                        count:"2",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    {
                        icon:<MaterialCommunityIcons name='calendar-clock' size={scale(22)} color={"#fff"} />,
                        title:"Placements",
                        bgColor:"#27b10c",
                        count:"1",
                        percentage:"10%",
                        arrow_icon:"arrow-up",
                        arrow_icon_color:"#17a08c"
                    },
                    
                ]
            }

        const ItemView = ({item}) => {
            return(
                <TouchableOpacity 
                    style={styles.ItemView}>
                    <View style={{...styles.IconBgView, backgroundColor:item.bgColor}}>
                        {/* <AntDesign name={item.icon_name} size={scale(20)} color={"#fff"} /> */}
                        {item.icon}
                    </View>
                    <View style={{marginLeft:scale(5)}}>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={styles.countText}>{item.count}</Text>
                            <View style={styles.ArrowPercentageRowView}>
                                <FontAwesome 
                                    name={item.arrow_icon} 
                                    color={item.arrow_icon_color} 
                                    size={scale(8)}
                                />
                                <Text style={styles.ItemViewPercentage} >
                                    {item.percentage}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.ItemViewTitle} >{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

        const CardView = ({title, items}) => {
            return(
                <View style={styles.CardView}>
                    <Text style={styles.CardViewTitle}>{title}</Text>
                    <ScrollView horizontal={true} >
                        {
                            items.map((item, index) => {
                                return(
                                    <ItemView  
                                        key={`${index}`} 
                                        item={item}
                                    />
                                )
                            })
                        }
                    </ScrollView>
                </View>
            )
        }

        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <View style={styles.container}>
                        <CardView 
                            title={sales_slider.title}
                            items={sales_slider.items}  
                        />
                         <CardView 
                            title={recruiter_slider.title}
                            items={recruiter_slider.items}  
                        />
                     
                    </View>
                </View>
            </SafeAreaView>
            
        );
    };
export default DashboardAnaylyticsScreen;

const styles = StyleSheet.create({
    container:{
        width:width,
        backgroundColor:"#fff", 
        alignSelf:"center"
    },
    CardView:{
        width:wp(98),
        alignSelf:"center", 
        marginTop:scale(5), 
        borderWidth:1,   
        borderRadius:scale(5),
        borderColor:"rgba(0,0,0,.1)"
    },
    CardViewTitle:{
        ...textStyles.Label,
        color:colors.dark_primary_color,
        includeFontPadding:false,
        borderBottomWidth:1,
        borderColor:"rgba(0,0,0,.1)",
        padding:scale(5),
        width:wp(98)-2
    },
    ItemView:{
        flexDirection:"row",
        elevation:2,
        paddingHorizontal:scale(8),
        borderRadius:scale(5),
        alignItems:"center", 
        margin:scale(5), 
        backgroundColor:"#fff", 
        height:scale(40)
    },
    IconBgView:{
        width:scale(30),
        height:scale(30),
        justifyContent:"center",
        alignItems:"center", 
        backgroundColor:"#1C264A",  
        borderRadius:scale(25)
    },
    countText:{
        ...textStyles.Label,
        fontFamily:fonts.Bold,
        color:colors.dark_primary_color,
        includeFontPadding:false,
        fontSize:scale(10),
    },
    ItemViewTitle:{
        ...textStyles.Label,
        color:colors.dark_primary_color,
        includeFontPadding:false,
        fontSize:scale(10)
    },
    ItemViewPercentage:{
        ...textStyles.Label,
        color:colors.dark_primary_color,
        includeFontPadding:false,
        marginLeft:scale(2),
        fontSize:scale(8)
    },
    ArrowPercentageRowView:{
        flexDirection:"row",
        flex:1,
        alignItems:"center", 
        marginLeft:scale(10), 
        justifyContent:"flex-start"
    }
})