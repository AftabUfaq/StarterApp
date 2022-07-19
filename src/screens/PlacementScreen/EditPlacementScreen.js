import React, { useEffect, useReducer, useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet, Text,View} from 'react-native';
import { commonStyles, textStyles} from '../../styles';
import { colors } from '../../constants/theme';
import { scale } from 'react-native-size-matters';
import countires from '../../data/contries.json'
import CustomButton from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/TextInput';
import DropdownAddComponent from '../../components/DropdownAddComponent';
import Spacer from '../../components/Spacer';
import MobileNumberInput from '../../components/MobileNumberInput';
import CountryModal from '../../components/CountryModal'
import { wp } from '../../constants/sacling';
import UpLoadComponent from '../../components/Uploadcomponent';
  const initialState = {
      job_order:"",
      job_owner:"",
      company:"",
      contact:"",
      billing_contact:"",
      candidate_name:"",
      joining_date:"",
      release_date:"",
      extension_date:"",
      placed_by:"",
      employee_type:"",
      pay_type:"",
      pay_salary:"",
      bill_rate:"",
      overhead:"",
      per_diem:"",
      recruiter_commission:"",
      sales_commission:"",
      time_system:"",
      expenses_system:"",
      invoicing_system:"",
      expenses_paid:"",
      drug_test:"",
      benefits:"",
      background_check:"",
      comments:"",
      on_boarding_due_date:"",
      documents_recipient:""
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'job_order':
        return { ...state, job_order:action.payload };
      case 'job_owner':
        return { ...state, job_owner:action.payload };
      case 'company':
        return { ...state, company:action.payload };
      case 'contact':
        return { ...state, contact:action.payload };
      case 'billing_contact':
        return { ...state, billing_contact:action.payload };
      case 'candidate_name':
        return { ...state, candidate_name:action.payload };
      case 'joining_date':
        return { ...state, joining_date:action.payload };
      case 'release_date':
        return { ...state, release_date:action.payload };
      case 'extension_date':
        return { ...state, extension_date:action.payload };
      case 'placed_by':
        return { ...state, placed_by:action.payload };
      case 'employee_type':
        return { ...state, employee_type:action.payload };
      case 'pay_type':
        return{...state,pay_type:action.payload}
      case 'pay_salary':
        return{...state,pay_salary:action.payload }
      case 'bill_rate':
        return{...state,bill_rate:action.payload}
      case 'overhead':
        return{...state,overhead:action.payload}
      case 'per_diem':
        return{...state,per_diem:action.payload}
      case 'recruiter_commission':
        return { ...state, recruiter_commission:action.payload };
      case 'sales_commission':
        return { ...state, sales_commission:action.payload };
      case 'time_system':
        return { ...state, time_system:action.payload };
      case 'expenses_system':
        return { ...state, expenses_system:action.payload };
      case 'invoicing_system':
        return { ...state, invoicing_system:action.payload };
      case 'expenses_paid':
        return { ...state, expenses_paid:action.payload };
      case 'drug_test':
        return { ...state, drug_test:action.payload };
      case 'benefits':
        return { ...state, benefits:action.payload };
      case 'background_check':
        return { ...state, background_check:action.payload };
      case 'comments':
        return { ...state, comments:action.payload };
      case 'on_boarding_due_date':
        return { ...state, on_boarding_due_date:action.payload };
      case 'documents_recipient':
        return { ...state, documents_recipient:action.payload };
      default:
            return initialState
    }
  }
    const EditPlacementScreen = ({navigation}) => { 
        const [onboarding_data, dispatch] = useReducer(reducer , initialState)
        
        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Edit Placement"}
                    />
                    <ScrollView 
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false} >
                          <CustomTextInput
                              placeholder={'Job Order'}
                              value={onboarding_data.job_order}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"job_order", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Job Owner'}
                              value={onboarding_data.job_owner}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"job_owner", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Company'}
                              value={onboarding_data.company}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"company", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Contact'}
                              value={onboarding_data.contact}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"contact", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Billing Contact'}
                              value={onboarding_data.billing_contact}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"billing_contact", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Candidate'}
                              value={onboarding_data.candidate_name}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"candidate_name", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Joining date'}
                              value={onboarding_data.joining_date}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"joining_date", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Release date'}
                              value={onboarding_data.release_date}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"release_date", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Extension date'}
                              value={onboarding_data.extension_date}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"extension_date", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Placed by'}
                              value={onboarding_data.placed_by}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"placed_by", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Employee type'}
                              value={onboarding_data.employee_type}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"employee_type", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Job Order'}
                              value={onboarding_data.job_order}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"job_order", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Pay type'}
                              value={onboarding_data.pay_type}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"pay_type", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Pay/Salary'}
                              value={onboarding_data.pay_salary}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"pay_salary", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Bill Rate'}
                              value={onboarding_data.bill_rate}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"", payload:text})
                              }}
                              errorMessage={"bill_rate"}
                          />
                          <CustomTextInput
                              placeholder={'Overhead'}
                              value={onboarding_data.overhead}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"overhead", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Per diem'}
                              value={onboarding_data.per_diem}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"per_diem", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Recruiter comission'}
                              value={onboarding_data.recruiter_commission}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"recruiter_commission", payload:text})
                              }}
                              errorMessage={""}
                          />

                          <CustomTextInput
                              placeholder={'Sales comission'}
                              value={onboarding_data.sales_commission}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"sales_commission", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Time system'}
                              value={onboarding_data.time_system}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"time_system", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Expenses system'}
                              value={onboarding_data.expenses_system}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"expenses_system", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Invoicing term'}
                              value={onboarding_data.invoicing_system}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"invoicing_system", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Expanses paid'}
                              value={onboarding_data.expenses_paid}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"expenses_paid", payload:text})
                              }}
                              errorMessage={""}
                          />
                          <CustomTextInput
                              placeholder={'Drug test'}
                              value={onboarding_data.drug_test}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"drug_test", payload:text})
                              }}
                              errorMessage={""}
                          />

                        <CustomTextInput
                              placeholder={'Comments'}
                              value={onboarding_data.comments}
                              borderWidth={1}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  dispatch({type:"comments", payload:text})
                              }}
                              errorMessage={""}
                        />
                          
                       

                        <Spacer height={scale(10)} />
                        <View style={{alignSelf:"center"}}>
                            <CustomButton 
                                loading={false}
                                loadingText={"Submitting"}
                                onPress={() => alert("false")}
                                text={"Save"}
                            />
                            
                        </View>
                        <Spacer height={scale(10)} />
                    </ScrollView>
                </View>
            </SafeAreaView> 
        );
    };

export default EditPlacementScreen;


const styles= StyleSheet.create({
  Row:{
    flexDirection:"row", 
    borderWidth:1,
    borderColor:colors.divide_color,
    borderRadius:scale(5),
    overflow:"hidden",
  
    alignSelf:"center",
    width:wp(96), 
    alignItems:"center",
    justifyContent:"space-between"
  }
})