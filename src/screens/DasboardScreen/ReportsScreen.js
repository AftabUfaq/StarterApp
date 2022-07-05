import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,StyleSheet,TouchableOpacity,useWindowDimensions, ScrollView } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { commonStyles,textStyles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from '../../constants/theme';
import { AppScreenWidth, hp, width, wp } from '../../constants/sacling';
import reports_data from './reports'
 const ReportsScreen = () => {
    const navigation = useNavigation();
 
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.white}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <ScrollView 
                        showsHorizontalScrollIndicator={false} 
                        showsVerticalScrollIndicator={false} 
                        style={styles.mainView}
                        >
                        {
                            reports_data.map((item_array, index) => {
                                return(
                                    <View key={`${index}`} style={styles.CardView}>
                                        <Text style={styles.CardViewTitle}>{item_array.title}</Text>
                                        <View>
                                            <ScrollView 
                                                showsHorizontalScrollIndicator={false} 
                                                showsVerticalScrollIndicator={false} 
                                                horizontal={true}
                                                >
                                                {
                                                    item_array.items.map((item, i) =>{
                                                        return(
                                                            <TouchableOpacity onPress={() => navigation.navigate(item.route_name)} key={`${i}`} style={styles.ItemView}>
                                                                  <View style={{...styles.IconBgView,        borderRadius:scale(25), overflow:"hidden", backgroundColor:item.bgColor}}>
                                                                        {item.icon}
                                                                    </View>
                                                                    <View style={{marginLeft:scale(5)}}>
                                                                        <Text key={`${i}`} style={styles.ItemViewTitle}>{item.title}</Text>
                                                                    </View>
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </ScrollView>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </SafeAreaView>
            
        );
    };


export default ReportsScreen;

const styles = StyleSheet.create({
    container:{
        width:width,
        backgroundColor:"#fff", 
        alignSelf:"center"
    },
    CardView:{
        width:wp(98),
        alignSelf:"center", 
        marginTop:scale(20), 
        borderWidth:1,   
        overflow:"hidden",
        borderRadius:scale(5),
        borderColor:"rgba(0,0,0,.1)"
    },
    CardViewTitle:{
        ...textStyles.Label,
        color:colors.secondary_text_color,
        includeFontPadding:false,
        borderBottomWidth:1,
        fontSize:scale(11),
        fontFamily:fonts.Bold,
        borderColor:"rgba(0,0,0,.1)",
        padding:scale(5),
        width:wp(98)-2
    },
    ItemView:{
        flexDirection:"row",
        elevation:5,
        paddingHorizontal:scale(8),
        borderRadius:scale(5),
        borderRightColor:"rgba(0,0,0,.1)",
        alignItems:"center", 
        margin:scale(5),
        marginRight:scale(15), 
        backgroundColor:"#fff", 
        height:scale(40)
    },
    IconBgView:{
        width:scale(30),
        height:scale(30),
        justifyContent:"center",
        alignItems:"center", 
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