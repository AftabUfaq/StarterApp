import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView, ScrollView,Platform} from 'react-native';
import CustomStatusBar from '../../components/StatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider, Select } from "native-base";
import { useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomTextInput from '../../components/TextInput';
import { commonStyles,selectStyles, textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { scale, verticalScale } from 'react-native-size-matters';
import { colors, fonts } from '../../constants/theme';
import { AppScreenWidth} from '../../constants/sacling';
import Spacer from '../../components/Spacer';
import CalenderInput from '../../components/CalenderInput';
import CustomButton from '../../components/Button';
import UpLoadComponent from "../../components/Uploadcomponent"


import Entypo from 'react-native-vector-icons/Entypo'
import moment from 'moment';
import ErrorModal from '../../components/ErrorModal';
import SuccessModal from '../../components/SuccessModal';
import BlockLoading from '../../components/BlockLoading';
import {jobs,categories,billtype,expensetype_data} from './data'

const MODULE_ID = '54'
    const ExpensesAddScreen = ({navigation}) => { 
       
        const {user} = useSelector(state => state.LoginReducer)
        const [expense_status , setExpenseStatus] = useState('192012') 
        const [submit , setSubmit] = useState(false)
        const [draft, setDraft] = useState(false)
        const [selected_job,set_selected_job] = useState(null)
        const [selected_job_error,set_selected_job_error] = useState(false)
        const [loading, setLoading ] = useState(false)
        const [expenses_report_title, setExpensesReportTitle] = useState(null);
        const [expenses_report_title_error, setExpensesReportTitle_error] = useState(false);

        const [bill_type , setBillType] = useState(billtype)
        const [caregory , setCategoryType] = useState(categories)
        const [expensetype , setExpenseType] = useState(expensetype_data)
        const [All_Done , setAllDone] = useState(false)
        const [submissionError , setsubmissionError] = useState(false)
        const [expense_list , setExpenseList] = useState([
            {
                date:"",
                date_error:false,
                expense_category:"",
                expense_category_error:false,
                expense_type:"",
                expense_type_error:false,
                expense_bill_type:"",
                expense_bill_type_error:false,
                comments:"",
                amount:null,
                amount_error:false,
                filepath:{
                    path:null, ext:null, name:null
                },
                filepath_error:false,
            }
        ])
        const addNewCard =  () => {
          const temp = [...expense_list]
          let obj =  {
              date:"",
              date_error:false,
              expense_category:"",
              expense_category_error:false,
              expense_type:"",
              expense_type_error:false,
              expense_bill_type:"",
              expense_bill_type_error:false,
              comments:"",
              amount:null,
              amount_error:false,
              filepath:{
                  path:null, ext:null, name:null
              },
              filepath_error:false,
          }
          temp.push(obj)
          setExpenseList(temp)
        }

        const deleteCard = (index) =>{
            if(expense_list.length> 1){
                let temp = [...expense_list]
                temp.splice(index, 1)
                setExpenseList(temp)
            }else{
                alert("Must have a least one item")
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
                          onPress={() => navigation.goBack()}
                          title={"Add Expense"}
                      />
                      <ScrollView 
                          showsVerticalScrollIndicator={false}
                          contentContainerStyle={{paddingBottom:verticalScale(115)}} >
                      
                              <View style={{marginTop:scale(10)}}>
                                  <Text
                                      style={{...styles.label, marginLeft:scale(5)}}>
                                      Select Job
                                  </Text>
                                  <Spacer height={scale(3)} />
                                  <Select
                                      isDisabled={jobs.length === 1 ? true :false}
                                      selectedValue={selected_job}
                                      width={AppScreenWidth}
                                      placeholderTextColor={colors.text_primary_color}
                                  
                                      maxHeight={"10"}
                                      alignSelf={"center"}
                                      fontFamily={fonts.Medium}
                                      fontSize={scale(13)}
                                      placeholder="Please select type"
                                      _item={selectStyles._item}
                                      _selectedItem={selectStyles._selectedItem}
                                      onValueChange={(itemValue) => {
                                          console.log(itemValue);
                                         
                                      }}>
                                      {
                                          jobs.map((item, index) => {
                                              return(
                                                  <Select.Item key={`${item.job_id}`} label={item.job_title} value={item.job_id} />
                                              )
                                          })
                                      }
                                  </Select>
                                  {selected_job_error && <Text style={{...textStyles.errorText, marginLeft:scale(5)}}>Please select job</Text>}
                                  <Spacer height={scale(3)} />
                                  <CustomTextInput
                                      placeholder={'Expenses Report Title'}
                                      value={expenses_report_title}
                                      borderWidth={1}
                                      lableColor={colors.dark_primary_color}
                                      borderRadius={scale(5)}
                                      onChangeText={text => setExpensesReportTitle(text)}
                                      errorMessage={""}
                                  />
                                  {expenses_report_title_error && <Text style={{...textStyles.errorText, marginLeft:scale(5)}}>Please enter title</Text> }
                              </View>
                              
                              <Spacer/>
                              {
                                  expense_list.map((item, index) => {
                                      return(
                                          <View key={`${index}`} style={styles.cardView} >
                                          <View style={styles.Row} >
                                          
                                              <View>
                                                  <Text
                                                      style={styles.label}>
                                                      Select Date
                                                  </Text>
                                          
                                                  <CalenderInput 
                                                      placeholder={"Expense Date"}
                                                      value={item.date}
                                                      errorMessage={""}
                                                      w={AppScreenWidth/2-scale(5)}
                                                      show_label={false}
                                                      hght={scale(40)}
                                                      onChangeText={(data) => {
                                                          let temp = [...expense_list]
                                                          temp[index].date = data
                                                          setExpenseList(temp)  
                                                      }}
                                                  />
                                                  {
                                                      item.date_error  &&
                                                      <Text
                                                          style={textStyles.errorText}>
                                                              Please select date
                                                      </Text>
                                                  }
                                              </View>
          
                                              <View>
                                                  <Text style={styles.label}>Expense type</Text>
                                                  <Spacer  height={scale(5)}  />
                                                  <Select
                                                      selectedValue={item.expense_type}
                                                      width={AppScreenWidth/2-scale(10)}
                                                      bg={"#fff"}
                                                      placeholderTextColor={colors.text_primary_color}
                                                  
                                                      fontFamily={fonts.Medium}
                                                      fontSize={scale(13)}
                                                      maxHeight={"10"}
                                                      accessibilityLabel="Select type"
                                                      placeholder="Select type"
                                                      _item={selectStyles._item}
                                                      _selectedItem={selectStyles._selectedItem}
                                                      onValueChange={(itemValue) => {
                                                          let temp = [...expense_list]
                                                          temp[index].expense_type = itemValue
                                                          setExpenseList(temp)  
                                                      }}>
                                                      {
                                                          expensetype.map((item, index) => {
                                                              return(
                                                                  <Select.Item key={`${index}`} label={item.name} value={item.id} />
                                                              )
                                                          })
                                                      }
                                                  </Select>
                                                  {
                                                      item.expense_type_error &&
                                                      <Text
                                                          style={textStyles.errorText}>
                                                              Please select expense type
                                                      </Text>
                                                  }
                                              </View>
                                          </View>
                                  
                                          <View style={styles.Row} >
                                              <View>
                                                  <Text
                                                      style={styles.label}>
                                                      Expense Bill type
                                                  </Text>
                                                  <Spacer  height={scale(5)}  />
                                                  <Select
                                                      selectedValue={item.expense_bill_type}
                                                      width={AppScreenWidth/2-scale(10)}
                                                      placeholderTextColor={colors.text_primary_color}
                                                      fontFamily={fonts.Medium}
                                                      fontSize={scale(13)}
                                                      maxHeight={"10"}
                                                      placeholder="Select type"
                                                      _item={selectStyles._item}
                                                      _selectedItem={selectStyles._selectedItem}
                                                      bg={"#fff"}
                                                      onValueChange={(itemValue) => { 
                                                          let temp = [...expense_list]
                                                          temp[index].expense_bill_type = itemValue
                                                          setExpenseList(temp)  
                                                              
                                                      }}>
                                                      {
                                                          bill_type.map((item, index) => {
                                                              return(
                                                                  <Select.Item key={`${index}`} label={item.name} value={item.id} />
                                                              )
                                                          })
                                                      }
                                                  </Select>
                                                  {
                                                      item.expense_bill_type_error &&
                                                      <Text
                                                          style={textStyles.errorText}>
                                                              Please select expense bill
                                                      </Text>
                                                  }
                                              </View>
                                              <View>
                                                  <Text
                                                      style={styles.label}>
                                                      Category type
                                                  </Text>
                                                  <Spacer  height={scale(5)}  />
                                                  <Select
                                                      selectedValue={item.expense_category}
                                                      width={AppScreenWidth/2-scale(10)}
                                                      placeholderTextColor={colors.text_primary_color}
                                                      fontFamily={fonts.Medium}
                                                      fontSize={scale(13)}
                                                      maxHeight={"10"}
                                                      bg={"#fff"}
                                                  
                                                      placeholder="Select category"
                                                      _item={selectStyles._item}
                                                      _selectedItem={selectStyles._selectedItem}
                                                  
                                                      onValueChange={(itemValue) => {                                                       
                                                              let temp = [...expense_list]
                                                              temp[index].expense_category = itemValue
                                                              setExpenseList(temp)
                                                          
                                                          }}>
                                                      {
                                                          caregory.map((item, index) => {
                                                              return(
                                                                  <Select.Item key={`${index}`} label={item.name} value={item.id} />
                                                              )
                                                          })
                                                      }
                                                  </Select>
                                                  {
                                                      item.expense_category_error &&
                                                      <Text
                                                          style={textStyles.errorText}>
                                                              Please select category
                                                      </Text>
                                                  }
                                              </View>
                                          </View>


                                          <View>
                                              <CustomTextInput
                                                  placeholder={'Amount'}
                                                  value={item.amount}
                                                  borderWidth={1}
                                                  lableColor={colors.dark_primary_color}
                                                  borderRadius={scale(5)}
                                                  onChangeText={text => {
                                                      let temp = [...expense_list]
                                                      temp[index].amount = text
                                                      setExpenseList(temp)
                                                  }}
                                                  errorMessage={""}
                                              />
                                              {
                                                  item.amount_error && 
                                                  <Text
                                                      style={textStyles.errorText}>
                                                          Please select Amount
                                                  </Text> 
                                              }
                                          </View>

                                          <View>
                                              <CustomTextInput
                                                  placeholder={'Comments'}
                                                  value={item.comments}
                                                  borderWidth={1}
                                                  lableColor={colors.dark_primary_color}
                                                  borderRadius={scale(5)}
                                                  onChangeText={text => {
                                                      let temp = [...expense_list]
                                                      temp[index].comments = text
                                                      setExpenseList(temp)
                                                  }}
                                                  errorMessage={""}
                                              />
                                          </View>
                                          <View style={styles.Row} >
                                              <UpLoadComponent 
                                                  filepath={item.filepath}
                                                  setFilePath={(file) => {
                                                      let temp = [...expense_list]
                                                      temp[index].filepath = file
                                                      setExpenseList(temp)
                                                  }}
                                                  wdt={AppScreenWidth/1.2} 
                                              />
                                              <TouchableOpacity 
                                              
                                                  onPress={() =>deleteCard(index)}           
                                                  style={styles.deletebutton}>
                                                  <Entypo 
                                                      name={'cross'} 
                                                      color={"#fff"} 
                                                      size={scale(40)} />
                                              </TouchableOpacity>
                                          </View>
                                          {
                                          item.filepath_error && 
                                          <Text
                                              style={textStyles.errorText}>
                                                  Please select attachment
                                          </Text> 
                                          }
                                      
                                      </View>
                                  )})
                              }
                          
                              <Spacer/>
                          
                              <TouchableOpacity 
                                  onPress={() => addNewCard()}
                                  style={styles.button} >
                                      <FontAwesome name={"plus"} size={scale(16)} color={"#fff"} />
                                  
                              </TouchableOpacity>
                              
                              <Spacer/>
                      
                      </ScrollView>
                      <View style={styles.bottomView} >
                          <CustomButton
                              loading={submit}
                              loadingText={"Submitting"}
                              onPress={() => Submit(false)}
                              backgroundColor={"#0073B4"}
                              text={"Submit"}
                              marginTop={scale(10)}
                          />
                          <Spacer />
                          <CustomButton
                              loading={draft}
                              loadingText={"Saving"}
                              onPress={() =>Submit(true) }
                              text={"Save as a Draft"}
                              marginTop={scale(10)}
                          />
                      </View>
                      {
                          loading && 
                          <BlockLoading/>
                      }
                  </SafeAreaView>
                  {
                      All_Done
                      ?
                      submissionError ? 
                              <ErrorModal 
                                  isVisible={All_Done}
                                  title='Some Error in Adding Expense'
                                  onClose={() =>  setAllDone(false)}
                              /> 
                          : 
                              <SuccessModal 
                                  isVisible={All_Done}
                                  title='Expense Added Successfully'
                                  onClose={() =>  setAllDone(false)}
                              /> 
                      :
                      null
                  }
              </NativeBaseProvider>
          </SafeAreaProvider>
      );
    };



export default ExpensesAddScreen;


const styles = StyleSheet.create({
  Row:{
      flexDirection:"row",
      width:AppScreenWidth, 
      alignItems:"flex-start",
      justifyContent:"space-between",
      marginTop:5
  },
  cardView:{
      elevation:5,
      padding:scale(2.5), 
      margin:3,
      borderColor:colors.divide_color, 
      borderWidth:0,
      borderRadius:scale(5),marginVertical:scale(10),
      backgroundColor:"#fff"
  },
  label:{
      ...textStyles.smallheading , 
      fontSize:scale(12),
      color:colors.dark_primary_color,
     
  },
  button:{
      backgroundColor:"green",
      padding:scale(10),
      width:scale(60),
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
  deletebutton:{
      width:scale(40), 
      marginRight:scale(5),
      height:scale(40),
      backgroundColor:colors.delete_icon,
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      borderWidth:0,
      marginTop:scale(30),
      marginBottom:scale(10)
      
  },
  bottomView:{
      position:"absolute", 
      justifyContent:"center", 
      alignItems:"center", 
      width:AppScreenWidth+scale(20),
      paddingVertical:10,
      backgroundColor:"#fff",
      alignSelf:"center", 
      bottom:10,
  }
})