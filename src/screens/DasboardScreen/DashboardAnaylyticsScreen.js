import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { 
    VictoryBar, VictoryChart,VictoryContainer, 
    VictoryTheme,VictoryAxis,VictoryLabel,
    LineSegment, VictoryPie  
} from "victory-native";
import { scale, verticalScale } from 'react-native-size-matters';
import { commonStyles,textStyles } from '../../styles';
import { colors, fonts } from '../../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { width, wp } from '../../constants/sacling';
import {sales_slider, recruiter_slider} from './sales_slider'
    const DashboardAnaylyticsScreen = ({navigation}) => {
        const data = [
            { quarter:"Companies", earnings: .3 },
            { quarter:"Contacts", earnings: .6 },
            { quarter:"Meetings", earnings: .4 },
            { quarter:"Opportunities", earnings: .5 },
            { quarter:"Job Orders", earnings: .13 },
            { quarter:"Candidates", earnings: .16 },
            { quarter:"Interviews", earnings: .14 },
            { quarter:"Placements", earnings: .19 },
        ];
        const colors = ["tomato", "orange", "gold", "cyan", "navy", "pink", "gray","red" ]
        

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
                    <ScrollView style={styles.container}>
                        <CardView 
                            title={sales_slider.title}
                            items={sales_slider.items}  
                        />
                         <CardView 
                            title={recruiter_slider.title}
                            items={recruiter_slider.items}  
                        />
                        <View style={styles.CardView}>
                            <Text style={styles.CardViewTitle}>General</Text>
                            <VictoryChart
                               
                                height={wp(60)}
                                width={wp(100)} 
                                animate={{ 
                                    duration: 1000,
                                    onLoad: { duration: 1000 }
                                }}
                                theme={VictoryTheme.material}
                            >
                                <VictoryBar  
                                    alignment={"start"}
                                    data={data}
                                    labels={({ datum }) => `${datum.earnings}`}
                                    labelComponent={
                                        <VictoryLabel 
                                            style={{
                                                fontFamily:fonts.Medium,
                                                fontSize:scale(8),
                                               
                                            }} 
                                           
                                            dx={scale(6)}
                                            dy={scale(-1)}
                                        />
                                  
                                    }
                                    style={{ 
                                        data:{ 
                                            fill: "#007998" 
                                        },
                                        labels: { fill: "white" }
                                    }} 
                                    x="quarter" 
                                    y="earnings"
                                />
                                <VictoryAxis 
                                    dependentAxis
                                    gridComponent={<LineSegment type={"fill"} />}
                                    tickValues={[.1, .2, .3, .4,.5,.6,.7,.8,.9,1]}
                                    style={{  
                                        axis: {
                                            stroke:"rgba(0,0,0,.1)"
                                        },
                                        grid: {
                                            stroke:"rgba(0,0,0,.1)", 
                                            strokeWidth: 1, 
                                            strokeDasharray:false
                                        },
                                        ticks: {stroke: "#0000", size:1},
                                        tickLabels:{
                                           
                                            fontSize:scale(8),
                                            fontFamily:fonts.Medium,
                                        }
                                    }}
                                />
                                <VictoryAxis
                                    style={{ 
                                        axis: {
                                            stroke:"rgba(0,0,0,.1)"
                                        }, 
                                        grid: {
                                            stroke:"#0000", 
                                            strokeWidth: 1, 
                                            strokeDasharray:false
                                        },
                                        ticks: {stroke: "#0000", size:10},
                                        tickLabels:{
                                            angle :-45,
                                            fontSize:scale(8),
                                            fontFamily:fonts.Medium,
                                        }
                                    }}
                                />
                            </VictoryChart>
                        </View>
                        
                        <View style={styles.CardView}>
                            <Text style={styles.CardViewTitle}>Activities</Text>
                            <View style={{flexDirection:"row", flex:1,justifyContent:"space-between"}}>
                              <View style={{width:wp(60),height:wp(60), backgroundColor:"#0000"}}>
                                <VictoryPie   
                                    data={data}
                                    colorScale={colors}
                                    height={wp(60)} 
                                    padding={{ top:scale(10), bottom:scale(10), right:scale(10),left:scale(10) }}
                                    width={wp(60)}
                                    labels={() => null}
                                    innerRadius={scale(30)} 
                                    labelRadius={0}
                                    x="quarter" 
                                    style={{ labels: {display: "none" } }}
                                    y="earnings"
                                    
                                >
                                    <VictoryLabel active={false}/>
                                </VictoryPie>
                             </View>
                             <View style={{width:wp(36), justifyContent:"space-evenly",  backgroundColor:"rgba(0,0,0,.02)"}}>
                                {data.map((item, index) => {
                                    return(
                                        <View key={`${index}`} style={{flexDirection:"row", alignItems:"center"}}>
                                            <View style={{width:wp(5),marginRight:wp(1), height:wp(5), borderRadius:wp(5), backgroundColor:colors[index]}} />
                                            <Text style={{...styles.ItemViewTitle, fontFamily:fonts.Bold}} >{item.quarter}: </Text>
                                            <Text style={styles.ItemViewTitle} >{item.earnings}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                            </View>
                        </View>
                        <View style={{height:scale(100)}} />
                    </ScrollView>
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
        overflow:"hidden",
        borderRadius:scale(5),
        borderColor:"rgba(0,0,0,.1)"
    },
    CardViewTitle:{
        ...textStyles.Label,
        color:colors.text_primary_color,
        includeFontPadding:false,
        borderBottomWidth:1,
        fontFamily:fonts.Bold,
        borderColor:"rgba(0,0,0,.1)",
        padding:scale(5),
        width:wp(98)-2
    },
    ItemView:{
        flexDirection:"row",
        elevation:2,
       
        paddingHorizontal:scale(8),
        borderRadius:scale(5),
        borderRightColor:"rgba(0,0,0,.1)",
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
        color:colors.text_primary_color,
        includeFontPadding:false,
        fontSize:scale(10),
    },
    ItemViewTitle:{
        ...textStyles.Label,
        color:colors.text_primary_color,
        includeFontPadding:false,
        fontSize:scale(10)
    },
    ItemViewPercentage:{
        ...textStyles.Label,
        color:colors.text_primary_color,
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