import React, { useEffect, useState } from 'react';
import {
    FlatList, 
    SafeAreaView,
    StatusBar,
    StyleSheet, 
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
import AntDesign from 'react-native-vector-icons/AntDesign'
import widget_data from './widgetData.json'
import Modal from 'react-native-modal';
import { textStyles } from '../../styles';
import { wp } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
    const renderScene = SceneMap({
        DashboardAnaylyticsScreen: DashboardAnaylyticsScreen,
        ReportsScreen: ReportsScreen,
        BulkMailScreen:BulkMailScreen
    });
    const DashBoardScreen = ({navigation}) => {
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
            "Yesterday", "Last 7 Days", "Last 14 Days", "Last Week", "Last 2 Week", "This Month", "Last 3 Months", "Last 6 Months", "Last 9 Months", "Last 12 Months", "Custom Range",
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
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
                <Modal 
                    useNativeDriver={true}
                    animationIn={"bounceIn"}
                    hideModalContentWhileAnimating={true}
                    animationInTiming={300}
                    animationOut={"bounceOut"}
                    animationOutTiming={300}
                    onBackButtonPress={() => setShowWidgetModal(false)}
                    style={{
                        margin:0,
                       
                    }}
                    isVisible={show_widget_modal}
                >
                    <View style={styles.mainView}>
                        <View style={styles.HeaderView}>
                            <Text style={styles.headerText}>
                            Add Widget
                            </Text> 
                            <TouchableOpacity onPress={() => setShowWidgetModal(false)} >
                                <AntDesign name='closesquare'  size={scale(22)} color={"#000"} />
                            </TouchableOpacity>
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
                                                    console.log(temp[index].selected);
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
                    animationIn={"bounceIn"}
                    hideModalContentWhileAnimating={true}
                    animationInTiming={300}
                    animationOut={"bounceOut"}
                    animationOutTiming={300}
                    onBackButtonPress={() => setShowFilterModal(false)}
                    style={{
                        margin:0
                    }}
                    isVisible={show_filter_modal}
                >
                    <View style={styles.mainView}>
                        <View style={styles.HeaderView}>
                            <Text style={styles.headerText}>
                            Custom Filter
                            </Text> 
                            <TouchableOpacity onPress={() => setShowFilterModal(false)} >
                                <AntDesign name='closesquare'  size={scale(22)} color={"#000"} />
                            </TouchableOpacity>
                        </View>
                        <FlatList 
                            data={filters}
                            renderItem={({item,index}) => {
                                return(
                                    <TouchableOpacity style={{...styles.ItemMainView,backgroundColor:"#e3e3e6", flexDirection:"column", padding:scale(5)}}>
                                        <Text style={{...textStyles.Label,color:colors.dark_primary_color, textAlign:"center"}}>
                                            {item}
                                        </Text> 
                                    </TouchableOpacity>
                                )
                            }}
                        />
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
        justifyContent:"space-between",
        borderBottomWidth:2,   
        borderColor:"rgba(0,0,0,.8)",
        flexDirection:"row"
    },
    headerText:{
        ...textStyles.heading, 
        fontSize:scale(14),
        color:colors.dark_primary_color,
        textAlign:"left"
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