import React, {memo, useMemo,Suspense, useEffect, useState } from 'react';
import {SafeAreaView,StatusBar,ActivityIndicator, Text,View,StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { commonStyles,textStyles } from '../../styles';
import { colors, fonts } from '../../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { hp, width, wp } from '../../constants/sacling';
import {sales_slider, recruiter_slider} from './sales_slider'
const BarChart  = React.lazy(() => import('./BarChart')) 
const PieChart = React.lazy(() => import('./PieChart'))
const HalfPieChart = React.lazy(() => import('./HalfPieChart'))


    const ItemView = memo(({item}) => {
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
    })

    const CardView = memo(({title, items}) => {
        return(
            <View style={styles.CardView}>
                <Text style={styles.CardViewTitle}>{title}</Text>
                <ScrollView 
                    showsHorizontalScrollIndicator={false} 
                    showsVerticalScrollIndicator={false}
                    horizontal={true} >
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
    })

    const LoadingView = () => {
        return(
            <View style={{flex:1,height:hp(20), justifyContent:"center", alignItems:"center",}} >
                <ActivityIndicator  size={"large"} color={colors.dark_primary_color} />
            </View>
        )
    }

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
        const user_sales_actvites = [
            { quarter:"General Notes", earnings: .3 },
            { quarter:"Live Connect", earnings: .6 },
            { quarter:"Recieeved Email", earnings: .4 },
            { quarter:"Send Mails", earnings: .5 },
            { quarter:"Job Orders", earnings: .13 },
            { quarter:"Candidates", earnings: .16 },
            { quarter:"Interviews", earnings: .14 },
            { quarter:"Placements", earnings: .19 },
        ];
        const colors = ["tomato", "orange", "gold", "cyan", "navy", "pink", "gray","red" ]
        const RenderPieChart = useMemo(() => {
            return(
                <>
                    <Suspense fallback={<LoadingView />} >
                        <BarChart data={data} title={"General"} />
                    </Suspense>
                    <Suspense fallback={<LoadingView />} >
                        <PieChart data={data} colors={colors} />
                    </Suspense>
                    <Suspense fallback={<LoadingView />} >
                        <HalfPieChart data={data}  colors={colors} tilte={"Recruiter Performance"}/>
                    </Suspense>
                    {/* <Suspense fallback={<LoadingView />} >
                        <BarChart data={data} title={"Candidates in Stage"} />
                    </Suspense>
                     <Suspense fallback={<LoadingView />} >
                        <HalfPieChart data={data}  colors={colors} title={"Sales Performance"} />
                    </Suspense>
                  <Suspense fallback={<LoadingView />} >
                        <BarChart data={data} title={"Sales Activities"} />
                    </Suspense>
                      <Suspense fallback={<LoadingView />} >
                        <BarChart data={data} title={"Users Activities"} />
                    </Suspense> */}
                    {/*<Suspense fallback={<LoadingView />} >
                        <BarChart data={user_sales_actvites} title={"Sales Users Activities"} />
                    </Suspense> */}

                </>
            )
        },[data, colors])
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <ScrollView 
                        showsHorizontalScrollIndicator={false} 
                        showsVerticalScrollIndicator={false}
                        style={styles.container}>
                        <CardView 
                            title={sales_slider.title}
                            items={sales_slider.items}  
                        />
                         <CardView 
                            title={recruiter_slider.title}
                            items={recruiter_slider.items}  
                        />
                       {RenderPieChart}
                        <View style={{height:scale(100)}} />
                    </ScrollView>
                </View>
            </SafeAreaView>
            
        );
    };
    const areEqual = (prevProps, nextProps) => {
       
          return true
      }
export default memo(DashboardAnaylyticsScreen,areEqual);

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
        elevation:5,
       
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