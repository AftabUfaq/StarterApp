import React, {useEffect, useState} from 'react';
import {ScrollView,View,StyleSheet,Platform,SafeAreaView, Text,Image, TouchableOpacity} from 'react-native';
import CustomStatusBar from '../../components/StatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import moment from 'moment';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/FontAwesome'
import { commonStyles,selectStyles, textStyles } from '../../styles';
import {NativeBaseProvider, Select } from "native-base";
import CustomButton from '../../components/Button';
import CalenderInput from '../../components/CalenderInput';
import CustomHeader from '../../components/CustomHeader';
import { scale, verticalScale} from 'react-native-size-matters';
import UpLoadComponent from "../../components/Uploadcomponent"
import WeeklySummary from './AddSummary';
import Spacer from '../../components/Spacer';
import DrawLine from '../../components/DrawLine';
import { AppScreenWidth } from '../../constants/sacling';
import { colors, fonts } from '../../constants/theme';
import BlockLoading from '../../components/BlockLoading';
import AlertModal from '../../components/AlertModal';
import { wp } from '../../constants/sacling';
import CustomTextInput from '../../components/TextInput';
import { jobs } from '../ExpensesScreen/data';
import {working_days_config, job_time_types} from './data'
const MODULE_ID = '52'

    const AddTimesheetScreen = ({navigation}) => { 
      const {user} = useSelector(state => state.LoginReducer)
      const {status} = useSelector(state => state.StatusReducer)
      const [submit , setSubmit] = useState(false)
      const [draft, setDraft] = useState(false)
      const [startDate, setStartDate] = useState("")
      const [api_error, setApiError]=useState(false)
      const [loading, setLoading ] = useState(false)
      const [comments, setComments] = useState("")
      const [filepath, setFilePath] = useState({
          path:null, ext:null, name:null
      })
      const [timesheet_status , setTimeSheetStatus] = useState(status.filter(obj => obj.module_id === MODULE_ID )) 
       // Data from API
      const [job_working_days , set_job_working_days] = useState([])  // get this from API
    
     
      /*
      //  when user tap on ta this will chnage with this we will 
          reset the following 
          alldata
          week_days
          time_type
      */
      const [time_sheet_type , set_time_sheet_type] = useState("Week")
      const [selected_job,set_selected_job] = useState(null) // user  select job
      const [week_days , setWeekDays] = useState([])
     
      // these both are reset with tab chnages
      const [alldata, setAlldata] = useState([])
      const [time_type , setTimeType] = useState([])
      const [date_error_message , setDateErrorMessage] = useState(null)
      const [error_messaage , set_error_messsage] = useState(null)
      const [visible, setVisible] = useState(false);
       
      useEffect(() => {
       
           let arr2 = Object.entries(JSON.parse(working_days_config))
          //   // convert twodmnentional arra to one dimentional array
           set_job_working_days(arr2.map(([day, value]) => ({day, value })));
      },[])
      function getISOWeekDates(isoWeekNum = 1, year = new Date().getFullYear()) {
        let d = moment().isoWeek(0).startOf('isoWeek').add(isoWeekNum - 1, 'weeks');
        for (var dates=[], i=0; i < 7; i++) {
          dates.push({date:d.format('ddd DD MMM'),insert_date:d.format('YYYY-MM-DD'), hours:null});
          d.add(1, 'day');
        }
     
        return dates;
    }

    const localTimeType = (val,index) => {
            let temp  = [...time_type] ;
            temp[index].name = val
            setTimeType(temp)
    }

    // call this function when user change StartDate 
    const getNumberofdays = async (date) => {
        setDateErrorMessage(null)
        setTimeType([{name:null, error:false}])
        setStartDate(date)
        if(time_sheet_type === "Week"){
            const weekNumber = moment(date).format("w");
            let weekdays =  await getISOWeekDates(weekNumber)
            setWeekDays(weekdays)
            setAlldata([[...weekdays]])
        }else{
            let weekdays = moment(date).format('ddd DD MMM');
           
            setWeekDays([{date:weekdays,insert_date:weekdays.format('YYYY-MM-DD'), hours:null}])
            setAlldata([[...weekdays]])
        }
       
      
    }

    const FunsetHours = (i,text, index) => {
      
        let temparray = alldata // [...alldata]
      
        temparray[index][i].hours = text
        setAlldata(temparray)
        
    }

    const addButton = () => {
           
      if(startDate == ""){
          setDateErrorMessage("Please select date first")
          return;
      }
      setDateErrorMessage(null)
      if(time_sheet_type === "Week"){
       
          let t_type = [...time_type]
          t_type.push({name:null, error:false})
          setTimeType(t_type)
          let temp  = [...alldata]
          temp.push(week_days)
          console.log(temp);
          setAlldata(temp)
      }else{
          let t_type = [...time_type]
          t_type.push({name:null, error:false})
          setTimeType(t_type)
          let temp  = alldata
          
          temp.push(week_days)
          setAlldata(temp)
      }
     
  }

  const deleteItem = (index) => {
      if(alldata.length > 1){
          let temp  = [...alldata]
          temp.splice(index, 1)
          setAlldata(temp)
          let t_type = [...time_type]
          t_type.splice(index, 1)
          setTimeType(t_type)
      }else{
          alert("Must have a least one item")
      }
  }

  const changeTab = async (value) => {
      if(startDate == ""){
          setDateErrorMessage("Please select date first")
          return;
      }
      set_time_sheet_type(value)
      setDateErrorMessage(null)
      setAlldata([])
      setTimeType([])
      if(value === "Week"){
          const weekNumber = moment(startDate).format("w");
          let wdays =  await getISOWeekDates(weekNumber)
          setWeekDays(wdays)
      }else{
          let wdays = moment(startDate).format('ddd DD MMM');
          setWeekDays([{date:wdays,insert_date:moment(startDate).format('YYYY-MM-DD'), hours:null}])
      }
     
  }
    return (
      <SafeAreaProvider>
          <CustomStatusBar />
          <NativeBaseProvider>
              <SafeAreaView style={commonStyles.container} >
                  <CustomHeader 
                      show_backButton={true}
                      isdrawer={false}
                      onPress={() =>  navigation.goBack()}
                      title={"Add TimeSheet"}
                  />
                  <View style={styles.Row} >
                      <View>
                          <Text
                              style={styles.label}>
                              Select Job
                          </Text>
                          <Spacer height={scale(3)} />
                          <Select
                              selectedValue={selected_job}
                              width={AppScreenWidth/2-scale(5)}
                              placeholderTextColor={colors.text_primary_color}
                              fontFamily={fonts.Regular}
                              maxHeight={"10"}
                              accessibilityLabel="Please select type"
                              placeholder="Please select  type"
                              _item={selectStyles._item}
                              _selectedItem={selectStyles._selectedItem}
                              onValueChange={(itemValue) => {
                                  set_selected_job(itemValue)
                                 
                                  }}>
                              {
                                  jobs.map((item, index) => {
                                      return(
                                          <Select.Item key={`${item.job_id}`} label={item.job_title} value={item.job_id} />
                                      )
                                  })
                              }
                          </Select>
                      </View>
                      <View>
                          <Text
                              style={styles.label}>
                              Select Date
                          </Text>
                      
                          <CalenderInput 
                              placeholder={"Start Date"}
                              value={startDate}
                              errorMessage={""}
                              w={AppScreenWidth/2-scale(5)}
                              show_label={false}
                              hght={scale(40)}
                              onChangeText={(data) => getNumberofdays(data) }
                          />
                      </View>
                      
                  </View>
                  <Spacer />
                  <View> 
                      <Text
                          style={styles.label}>
                          Select TimeSheet Type
                      </Text>
                      <Spacer height={scale(3)} />
                      <View style={{...styles.tabview,}} >
                          <TouchableOpacity 
                              onPress={() => changeTab("Day")}
                              style={{
                                  ...styles.tabitem,
                                  backgroundColor:time_sheet_type === "Day"?colors.dark_primary_color:"#fff",
                                  borderRightWidth:1}} >
                                  <Text  style={{...styles.label,color:time_sheet_type === "Day"?"#fff":"#000"}}>Day</Text>
                          </TouchableOpacity>
                          <TouchableOpacity 
                              onPress={() => changeTab("Week")}
                              style={{
                                  ...styles.tabitem,
                                  backgroundColor:time_sheet_type === "Week"?colors.dark_primary_color:"#fff",
                                  }} >
                              <Text  style={{...styles.label,color:time_sheet_type === "Week"?"#fff":"#000"}}>Week</Text>
                          </TouchableOpacity>
                      </View>
                      {
                          date_error_message !== null &&
                          <Text
                              style={{...textStyles.errorText, marginTop:scale(3)}}>
                              {date_error_message}
                          </Text>
                      }
                  </View>
                  
                  <ScrollView 
                      showsVerticalScrollIndicator={false} 
                      contentContainerStyle={{paddingBottom:scale(100)}} >
                  
                      <Spacer />
                          <WeeklySummary 
                              editable={true}
                              job_time_types={job_time_types}
                              alldata={alldata}
                              setHours={(i, text ,index) => FunsetHours(i, text,index)}                
                              
                              time_type={time_type}
                              job_working_days={job_working_days}
                              deleteItem={(i) => deleteItem(i)}
                              localTimeType={(val,i) => localTimeType(val,i)}
                          />  
                      <Spacer />  
                      <TouchableOpacity 
                          onPress={() => addButton()}
                          style={styles.button} >
                              <AntDesign name={"plus"} size={scale(16)} color={"#fff"} />
                          
                      </TouchableOpacity>
                  
                      <Spacer />
                      <DrawLine />
                      <View>
                          <CustomTextInput
                              placeholder={'Comments'}
                              value={comments}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  setComments(text)
                              }}
                              errorMessage={""}
                          />
                      </View>
                                      
                      <UpLoadComponent
                          filepath={filepath}
                          setFilePath={(file) => setFilePath(file)}
                      />
                    
                  <View style={styles.bottomButtons}> 
                      <CustomButton
                          loading={submit}
                          loadingText={"Submitting"}
                          onPress={() => ValidateData(false)}
                          backgroundColor={"#0073B4"}
                          text={"Submit"}
                          marginTop={scale(10)}
                      />
                      <Spacer />
                      <CustomButton
                          loading={draft}
                          loadingText={"Saving"}
                          onPress={() =>ValidateData(true) }
                          text={"Save as a Draft"}
                          marginTop={scale(10)}
                      />
                  </View>
                  </ScrollView>
              
              </SafeAreaView>
              {
                  loading && 
                  <BlockLoading/>
              }
              { 
                  visible && 
                      <AlertModal 
                          is_error={true}
                          visible={visible}
                          setVisible={() => setVisible(false)}
                          error_messaage={error_messaage}
                          title={"Form Submission Error"} 
                      />
              }
          </NativeBaseProvider>
      </SafeAreaProvider>
  );
    };



export default AddTimesheetScreen;

const styles = StyleSheet.create({
  Row:{
      flexDirection:"row",
      width:AppScreenWidth, 
      alignItems:"flex-end",
      justifyContent:"space-between",
      marginTop:5
  },
  button:{
      backgroundColor:"green",
      padding:scale(10),
      width:scale(50),
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"center",
      alignSelf:"flex-start",
      borderWidth:1,
      
      borderColor:"rgba(0,0,0,.3)",
      borderRadius:scale(5)
  }, 
  text:{
      ...textStyles.smallheading,
      backgroundColor:"#0000",
      alignSelf:"flex-start", 
      includeFontPadding:false,
      color:"#fff",
      marginLeft:scale(5),
      textAlign:"left"
  },
  label:{
      ...textStyles.smallheading , 
      fontSize:scale(12),
      color:colors.text_primary_color,
     
  },
  bottomButtons:{
      position:"absolute", 
      width:AppScreenWidth,
      flex:1,
      bottom:0, 
      height:scale(100)
  },
 
  tabview:{
     
      flexDirection:"row",
      width:AppScreenWidth, 
      alignItems:"flex-end",
      justifyContent:"space-between",
      height:42, 
      borderRadius:5,
      borderWidth:1,
      overflow:"hidden",
      borderColor:colors.divide_color,
      backgroundColor:"#fff" 
  },
  tabitem:{
      width:AppScreenWidth/2, 
      justifyContent:"center",
      alignItems:"center",
      height:40, 
      borderRadius:0,
      borderWidth:0,
      borderColor:colors.divide_color,
      backgroundColor:"#fff"  
  }
})