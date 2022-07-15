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
import { wp } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
import useIsReady from '../../hooks/useIsReady';
import moment from 'moment';
import CustomCalendar from './RangeCalendar';

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
            "Yesterday", "Last 7 Days", "Last 14 Days", "Last Week", "Last 2 Week", "This Month", "Last 3 Months", "Last 6 Months", "Last 9 Months", "Last 12 Months",
        ])
       
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
                <View style={{backgroundColor:"#fff", paddingVertical:20, borderWidth:2, }}>
                    <CustomCalendar initialDate={initialDate} setInitialDate={setInitialDate} />
                   
                </View>
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
                            numColumns={2}
                            columnWrapperStyle={{
                                justifyContent:"space-evenly",
                             
                               
                            }}
                            renderItem={({item,index}) => {
                                return(
                                    <TouchableOpacity 
                                        style={styles.FilteritemVew}>
                                        <Text 
                                            style={{
                                                ...textStyles.Label,
                                                color:colors.dark_primary_color,
                                                textAlign:"center"
                                            }}>
                                            {item}
                                        </Text> 
                                    </TouchableOpacity>
                                )
                            }}
                            ListFooterComponent={() => {
                                return(
                                    <TouchableOpacity 
                                        style={{...styles.FilteritemVew, width:wp(94)}}>
                                        <Text 
                                            style={{
                                                ...textStyles.Label,
                                                color:colors.dark_primary_color,
                                                textAlign:"center"
                                            }}>
                                            Custom range
                                        </Text> 
                                    </TouchableOpacity>
                                )
                            }}
                        />
                          <CustomCalendar initialDate={initialDate} setInitialDate={setInitialDate} />
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
        paddingBottom:scale(10)
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
        width:wp(45),
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
        padding:scale(10)
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