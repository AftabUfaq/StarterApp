import React, { useEffect, useState } from 'react';
import {
    FlatList, 
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    ActivityIndicator,
    Text,TouchableOpacity,
    useWindowDimensions,View 
} from 'react-native';
import { NativeBaseProvider, Switch} from "native-base";
import CustomHeader from '../../components/SearchHeader';
import { colors, fonts } from '../../constants/theme';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import DashboardAnaylyticsScreen from './DashboardAnaylyticsScreen';
import ReportsScreen from './ReportsScreen';
import BulkMailScreen from './BulkMailScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import widget_data from './widgetData.json'
import Modal from 'react-native-modal';
import { textStyles } from '../../styles';
import { hp, wp } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
import useIsReady from '../../hooks/useIsReady';
import moment from 'moment';
import CustomCalendar from './RangeCalendar';
import MultipleDropDownSelect from './MultipleDropDownSelect';
import * as Animatable from "react-native-animatable";
import CustomButton from '../../components/Button';
    const renderScene = SceneMap({
        DashboardAnaylyticsScreen: DashboardAnaylyticsScreen,
        ReportsScreen: ReportsScreen,
        BulkMailScreen:BulkMailScreen
    });
    const DashBoardScreen = ({navigation}) => {
      
        const isReady = useIsReady()
        const [initialDate, setInitialDate] = useState(moment().format('YYYY-MM-DD'))
        const layout = useWindowDimensions();
        const [index, setIndex] = React.useState(0);
        const [show_filter_modal, setShowFilterModal] = useState(false)
        const [show_widget_modal , setShowWidgetModal] = useState(false)
        const [widgetData,  setWidgetData] = useState(widget_data)
        const [iscustomRange , setIsCustomRange] = useState(false)
        const [routes] = React.useState([
            {
                key: 'DashboardAnaylyticsScreen', 
                title: 'Analytics'
            },
            { 
                key: 'ReportsScreen', 
                title: 'Reports' 
            },
            {   
                key: 'BulkMailScreen', 
                title: 'Bulk Mail'
            },
        ]);
        const [filters, setFilter] = useState([
            {
                name:"Yesterday",
                duration:1,
                type:"days"
            },
            {
                name:"Last Week",
                duration:1,
                type:"week"
            },
            {
                name:"Last 14 Days",
                duration:14,
                type:"days"
            },
            {
                name:"Last 2 Week",
                duration:2,
                type:"weeks"
            },
            
            {
                name:"This Month",
                duration:1,
                type:"months"
            },

            {
                name:"Last 3 Months",
                duration:3,
                type:"months"
            },
            {
                name:"Last 6 Months",
                duration:6,
                type:"months"
            },
            {
                name:"Last 9 Months",
                duration:9,
                type:"months"
            },

            {
                name:"Last 12 Months",
                duration:12,
                type:"months"
            },
        ])
        const [rangeStartDate, setRangeStartDate ] = useState(null)
        const [rangeEndDate, setRangeEndDate] = useState(null)
        const renderTabBar = props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              getLabelText={({ route }) => route.title}
              renderLabel={({ route, focused, color }) => (
                <Text 
                    numberOfLines={1}
                    style={{ color:colors.white,fontFamily:fonts.Medium, }}>
                  {route.title}
                </Text>
              )}
              style={{ backgroundColor:colors.dark_primary_color }}
            />
        );

        const SelectRangefromFilter = (value, type) => {
            setRangeStartDate(moment().format('YYYY-MM-DD'))
          
            setRangeEndDate(moment().add(-value, type).format('YYYY-MM-DD'))
        }
        useEffect(() => {

        },[rangeStartDate,rangeEndDate])
        if(!isReady){
                return(
                    <View style={{flex:1,justifyContent:"center", alignItems:"center",}} >
                        <ActivityIndicator  size={"large"} color={colors.dark_primary_color} />
                    </View>
            )
        }
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <CustomHeader 
                    show_backButton={true}
                    isdrawer={false}
                    onPress={() => navigation.goBack()}
                    title={"Dashboard"}
                    FilterPress={() => setShowFilterModal(!show_filter_modal)}
                    NotificationPress={() => setShowWidgetModal(!show_widget_modal)}
                />
               
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    scrollEnabled={true}
                    lazy={true}
                    optimizationsEnabled={true}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
                <Modal 
                    useNativeDriver={true}
                    animationIn={"fadeInUp"}
                    hideModalContentWhileAnimating={true}
                    animationInTiming={300}
                    animationOut={"fadeOutDown"}
                    animationOutTiming={300}
                    onBackButtonPress={() => setShowWidgetModal(false)}
                    style={{
                        margin:0,
                       
                    }}
                    isVisible={show_widget_modal}
                >
                    <View style={styles.mainView}>
                        <View style={styles.HeaderView}>
                             <TouchableOpacity onPress={() => setShowWidgetModal(false)} >
                                <Entypo color={"#fff"} name="chevron-thin-left" size={scale(24)}  />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>
                                Add Widget
                            </Text> 
                           
                        </View>
                        <FlatList 
                            data={widgetData}
                            renderItem={({item,index}) => {
                                return(
                                    <View style={styles.ItemMainView}>
                                        <View  style={styles.textView}>
                                            <Text style={textStyles.Label}>
                                                {item.title}
                                            </Text> 
                                            <Text style={styles.Description}>
                                                {item.Description}
                                            </Text> 
                                        </View>
                                        <NativeBaseProvider>
                                            <Switch 
                                                onToggle={() => {
                                                    let temp = [...widgetData]
                                           
                                                    temp[index].selected = !temp[index].selected
                                                    setWidgetData(temp)
                                                }}
                                                isChecked={item.selected} 
                                            />
                                        </NativeBaseProvider>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </Modal>
                <Modal 
                    useNativeDriver={true}
                    animationIn={"fadeInUp"}
                    hideModalContentWhileAnimating={true}
                    animationInTiming={300}
                    animationOut={"fadeOutDown"}
                    animationOutTiming={300}
                    onBackButtonPress={() => setShowFilterModal(false)}
                    style={{
                        margin:0
                    }}
                    isVisible={show_filter_modal}
                    //isVisible={true}
                >
                    <View style={styles.mainView}>
                        <View style={styles.HeaderView}>
                            <TouchableOpacity onPress={() => setShowFilterModal(false)} >
                                <Entypo color={"#fff"} name="chevron-thin-left" size={scale(24)}  />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>
                                Custom Filter
                            </Text> 
                        </View>
                        <FlatList 
                            data={filters}
                            numColumns={3}
                            style={{maxHeight:hp(21)}}
                            columnWrapperStyle={{
                                justifyContent:"space-between",
                                width:wp(96)
                            }}
                            renderItem={({item,index}) => {
                                return(
                                    <TouchableOpacity 
                                    onPress={() => {SelectRangefromFilter(item.duration, item.type)}}
                                        key={`${index}`}
                                        style={styles.FilteritemVew}>
                                        <Text 
                                            style={{
                                                ...textStyles.Label,
                                                color:colors.text_primary_color,
                                                textAlign:"center"
                                            }}>
                                            {item.name}
                                        </Text> 
                                    </TouchableOpacity>
                                )
                            }}
                            ListFooterComponent={() => {
                                return(
                                    <TouchableOpacity 
                                        onPress={() => setIsCustomRange(!iscustomRange)}
                                        style={{
                                            ...styles.FilteritemVew, 
                                            paddingVertical:scale(10),
                                            backgroundColor:colors.dark_primary_color,
                                            width:wp(96)
                                        }}>
                                        <Text 
                                            style={{
                                                ...textStyles.Label,
                                                color:colors.white,
                                                textAlign:"center"
                                            }}>
                                            Custom range
                                        </Text> 
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        {rangeStartDate && rangeEndDate  && 
                            <TouchableOpacity 
                                onPress={() => setIsCustomRange(!iscustomRange)}
                                style={{
                                    ...styles.FilteritemVew, 
                                    width:wp(96),
                                    marginTop:scale(0), 
                                    alignItems:"flex-start",
                                }}>
                                     <Text 
                                            style={{
                                                ...textStyles.Label,
                                                color:colors.text_primary_color,
                                                textAlign:"center"
                                            }}>
                                          Selected Range
                                        </Text> 
                            <Text 
                                style={{
                                    ...textStyles.Label,
                                    color:colors.dark_primary_color,
                                    textAlign:"center"
                                }}>
                                From   {rangeStartDate}   to   {rangeEndDate}
                            </Text> 
                        </TouchableOpacity>}
                        <MultipleDropDownSelect />
                        {
                            iscustomRange &&
                                <Animatable.View 
                                    animation={"fadeInUpBig"}
                                    iterationCount={1}
                                    useNativeDriver={true}
                                    // animationIn={"fadeInUpBig"}
                                    // animationOut={"fadeOutDown"}
                                    style={{position:"absolute",top:hp(20), backgroundColor:"#fff"}}>
                                    <CustomCalendar 
                                        initialDate={initialDate} 
                                        setInitialDate={setInitialDate}
                                        setRangeStartDate={setRangeStartDate} 
                                       
                                        setRangeEndDate={setRangeEndDate}
                                        setIsCustomRange={() => setIsCustomRange(!iscustomRange)}
                                    />
                                </Animatable.View>
                        }
                       
                        {!iscustomRange && 
                            <View style={{position:"absolute", bottom:10}}>
                                <CustomButton text={"Filter Results"} /> 
                            </View>   
                        }
                    </View>
                </Modal>
            </SafeAreaView>
            
        );
    };


export default DashBoardScreen;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:"#fff",
        paddingBottom:scale(10),
        alignItems:"center",
       
    },
    HeaderView:{
        width:wp(100),
        padding:scale(5),
        alignSelf:"center", 
        alignItems:"center",
       
      
        backgroundColor:colors.dark_primary_color,
        flexDirection:"row"
    },
    headerText:{
        fontFamily:fonts.Medium,
        fontSize: scale(15),
        color:colors.white,
        marginLeft:scale(90)
    },
    ItemMainView:{ 
        width:wp(98),
        borderRadius:scale(5),
        alignSelf:"center", 
        marginTop:scale(5), 
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:1,   
        borderColor:"rgba(0,0,0,.1)",
        flexDirection:"row"
    },
    FilteritemVew:{ 
        width:wp(30),
        borderRadius:scale(5),
        alignSelf:"center", 
        marginTop:scale(5), 
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:1,   
        borderColor:"rgba(0,0,0,.1)",
        flexDirection:"row",
        backgroundColor:"rgba(0,0,0,.01)", 
        flexDirection:"column", 
        padding:scale(5)
    },
    textView:{ 
        width:wp(85),
        padding:scale(5),
        alignSelf:"center",  
    },
    Description:{
        ...textStyles.disabletext, 
        fontSize:scale(10),
        textAlign:"left"
    }
})