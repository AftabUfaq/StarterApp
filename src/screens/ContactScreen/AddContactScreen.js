import React, { useEffect, useState } from 'react';
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

import { company_names_data, company_owner_list_data, company_status_data, contactAddScreenInitialState, country_data, preferred_contact_data, reports_to_data, socail_links_data, state_data } from '../../data/data';
import AddContactModal from '../../components/AddContactModal';
    const AddContactScreen = ({navigation}) => { 

        const [companies, setCompanies] = useState(company_names_data);
        const [selected_company, setSelectCompany] = useState("")
        const [companies_modal_visible, setCompaniesModalVisibe] = useState(false)
        const [company_name, setCompanyName] = useState("")
         
       

        const [company_status, setCompaniesStatus] = useState(company_status_data);
        const [selected_company_status, setSelectedCompanyStatus] = useState("")
        const [company_status_visible, setCompanStatusModalVisible] = useState(false)
        
     

        const [company_own_list, setCompanyOwnerList] = useState(company_owner_list_data);
        const [selected_contact, setSelectContact] = useState("")
        const [contacts_modal_visible, setContactsModalVisibe] = useState(false)
        const [contact_name, setContactName] = useState("")

    
        const [socail_links, setSocialLinks] = useState(socail_links_data);
        const [mobile_code, setMobileCode] = useState("US")
        const [mobile_code_modal_visible, setMobileCodeModalVisibe] = useState(false)

      

        const [preferred_contact, setpreferred_contacts] = useState(preferred_contact_data);
        const [selected_preferred_contact, setSelectpreferred_contact] = useState("")
        const [preferred_contact_modal_visible, setpreferred_contactsModalVisibe] = useState(false)
        const [preferred_contact_name, setpreferred_contactName] = useState("")

     

   
        const [ReportsTo, setReportsTo] = useState(reports_to_data);
        const [selected_reports_to, setSelectReports] = useState("")
        const [Industry_modal_visible, setReportsToModalVisibe] = useState(false)
        const [reports_to_name, setIndustryName] = useState("")
   

      

       //// State Data

        const [states, setstates] = useState(state_data);
        const [selected_state, setSelectstate] = useState("")
        const [state_modal_visible, setstatesModalVisibe] = useState(false)
      
        const [countrys, setcountrys] = useState(country_data);
        const [selected_country, setSelectcountry] = useState("")
        const [country_modal_visible, setcountrysModalVisibe] = useState(false)
   
        const [contact_profile, setContactProfile] = useState(contactAddScreenInitialState)
       

        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Add Contact"}
                    />
                    <ScrollView 
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false} >
                       <CustomTextInput
                          placeholder={'First name'}
                          value={contact_profile.first_name}
                          borderWidth={1}
                          lableColor={colors.dark_primary_color}
                          borderRadius={scale(5)}
                          onChangeText={text => {
                            setContactProfile({...contact_profile, first_name:text})
                          }}
                          errorMessage={""}
                      />
                   
                    <CustomTextInput
                        placeholder={'Last name'}
                        value={contact_profile.last_name}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                          setContactProfile({...contact_profile, last_name:text})
                        }}
                        errorMessage={""}
                    />
                    <CustomTextInput
                        placeholder={'Primary email'}
                        value={contact_profile.primary_email}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                          setContactProfile({...contact_profile, primary_email:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Secondary email'}
                        value={contact_profile.secondary_email}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                          setContactProfile({...contact_profile, secondary_email:text})
                        }}
                        errorMessage={""}
                    />
                        <DropdownAddComponent 
                            show_add_button={false}
                            width={wp(96)}
                            AddButtonPress={() => alert("status")}
                            placeholder={"status"}
                            items={company_status}
                            setItems={setCompaniesStatus}
                            selectedItems={selected_company_status}
                            setSelectItems={setSelectedCompanyStatus}
                            isVisible={company_status_visible}
                            setIsVisible={setCompanStatusModalVisible}
                            company_name={company_name}
                            setCompanyName={setCompanyName}
                        />
                        
                        <DropdownAddComponent 
                            show_add_button={true}
                            width={wp(84)}
                            AddButtonPress={() => alert("Owner")}
                            placeholder={"Company"}
                            items={companies}
                            setItems={setCompanies}
                            selectedItems={selected_company}
                            setSelectItems={setSelectCompany}
                            isVisible={companies_modal_visible}
                            setIsVisible={setCompaniesModalVisibe}
                            company_name={company_name}
                            setCompanyName={setCompanyName}
                        />
                        <DropdownAddComponent 
                            show_add_button={false}
                            width={wp(96)}
                            AddButtonPress={() => alert("Owner")}
                            placeholder={"Account Owner"}
                            items={company_own_list}
                            setItems={setCompanyOwnerList}
                            selectedItems={selected_contact}
                            setSelectItems={setSelectContact}
                            isVisible={contacts_modal_visible}
                            setIsVisible={setContactsModalVisibe}
                            company_name={contact_name}
                            setCompanyName={setContactName}
                        />

                        <DropdownAddComponent 
                            show_add_button={false}
                            width={wp(96)} 
                            AddButtonPress={() => alert("company")}
                            placeholder={"Reoport to"}
                            items={ReportsTo}
                            setItems={setReportsTo}
                            selectedItems={selected_reports_to}
                            setSelectItems={setSelectReports}
                            isVisible={Industry_modal_visible}
                            setIsVisible={setReportsToModalVisibe}
                            company_name={reports_to_name}
                            setCompanyName={setIndustryName}
                        />
                          <DropdownAddComponent 
                            AddButtonPress={() => alert("Preferred Contact")}
                            placeholder={"Preferred Contact"}
                            items={preferred_contact}
                            setItems={setpreferred_contacts}
                            selectedItems={selected_preferred_contact}
                            setSelectItems={setSelectpreferred_contact}
                            isVisible={preferred_contact_modal_visible}
                            setIsVisible={setpreferred_contactsModalVisibe}
                            company_name={preferred_contact_name}
                            setCompanyName={setpreferred_contactName}
                            show_add_button={false}
                            width={wp(96)}
                            
                        />
                        <View style={{width:wp(96),marginLeft:scale(5), marginTop:scale(5)}} > 
                              <Text style={{...textStyles.Label, color:colors.dark_primary_color}} >Company HQ Phone</Text>
                        </View>  
                        <View style={styles.Row} > 
                          <CountryModal 
                              placeholder={"code"}
                              items={countires}
                              selectedItems={mobile_code}
                              setSelectItems={setMobileCode}
                              isVisible={mobile_code_modal_visible}
                              setIsVisible={setMobileCodeModalVisibe}
                            
                          />  
                          <MobileNumberInput
                              placeholder={'Company HQ Phone'}
                              value={contact_profile.job_title}
                              borderWidth={1}
                              TextInputwidth={wp(76)}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  setJobData({...contact_profile,job_title:text })
                              }}
                              errorMessage={""}
                          />
                        </View>  
                        <View style={{width:wp(96),marginLeft:scale(5), marginTop:scale(5)}} > 
                              <Text style={{...textStyles.Label, color:colors.dark_primary_color}} >Phone (Direct)</Text>
                        </View>  
                        <View style={styles.Row} > 
                          <CountryModal 
                              placeholder={"code"}
                              items={countires}
                              selectedItems={mobile_code}
                              setSelectItems={setMobileCode}
                              isVisible={mobile_code_modal_visible}
                              setIsVisible={setMobileCodeModalVisibe}
                            
                          />  
                          <MobileNumberInput
                              placeholder={'Phone (Direct)'}
                              value={contact_profile.job_title}
                              borderWidth={1}
                              TextInputwidth={wp(76)}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  setJobData({...contact_profile,job_title:text })
                              }}
                              errorMessage={""}
                          />
                        </View> 

                        <View style={{width:wp(96),marginLeft:scale(5), marginTop:scale(5)}} > 
                              <Text style={{...textStyles.Label, color:colors.dark_primary_color}} >Phone (Mobile)</Text>
                        </View>  
                        <View style={styles.Row} > 
                          <CountryModal 
                              placeholder={"code"}
                              items={countires}
                              selectedItems={mobile_code}
                              setSelectItems={setMobileCode}
                              isVisible={mobile_code_modal_visible}
                              setIsVisible={setMobileCodeModalVisibe}
                            
                          />  
                          <MobileNumberInput
                              placeholder={'Phone (Mobile)'}
                              value={contact_profile.job_title}
                              borderWidth={1}
                              TextInputwidth={wp(76)}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  setJobData({...contact_profile,job_title:text })
                              }}
                              errorMessage={""}
                          />
                        </View> 

                        <View style={{width:wp(96),marginLeft:scale(5), marginTop:scale(5)}} > 
                              <Text style={{...textStyles.Label, color:colors.dark_primary_color}} >Fax</Text>
                        </View>  
                        <View style={styles.Row} > 
                          <CountryModal 
                              placeholder={"code"}
                              items={countires}
                              selectedItems={mobile_code}
                              setSelectItems={setMobileCode}
                              isVisible={mobile_code_modal_visible}
                              setIsVisible={setMobileCodeModalVisibe}
                            
                          />  
                          <MobileNumberInput
                              placeholder={'Fax'}
                              value={contact_profile.job_title}
                              borderWidth={1}
                              TextInputwidth={wp(76)}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  setJobData({...contact_profile,job_title:text })
                              }}
                              errorMessage={""}
                          />
                        </View>  
                        
                       
                        <CustomTextInput
                            placeholder={'Address'}
                            value={contact_profile.address}
                            borderWidth={1}
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...contact_profile,address:text })
                            }}
                            errorMessage={""}
                        />
                         
                         <CustomTextInput
                            placeholder={'City'}
                            value={contact_profile.city}
                            borderWidth={1}
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...contact_profile,city:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Zip'}
                            value={contact_profile.zip}
                            borderWidth={1}
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...contact_profile,zip:text })
                            }}
                            errorMessage={""}
                        />
                        
                        <DropdownAddComponent 
                            show_add_button={false}
                            width={wp(96)}
                            AddButtonPress={() => alert("company")}
                            placeholder={"country"}
                            items={countrys}
                            setItems={setcountrys}
                            selectedItems={selected_country}
                            setSelectItems={setSelectcountry}
                            isVisible={country_modal_visible}
                            setIsVisible={setcountrysModalVisibe}
                           
                        />

                      <DropdownAddComponent 
                            show_add_button={false}
                            width={wp(96)}
                            AddButtonPress={() => alert("company")}
                            placeholder={"state"}
                            items={states}
                            setItems={setstates}
                            selectedItems={selected_state}
                            setSelectItems={setSelectstate}
                            isVisible={state_modal_visible}
                            setIsVisible={setstatesModalVisibe}
                          
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
               <AddContactModal />
            </SafeAreaView> 
        );
    };



export default AddContactScreen;


const styles= StyleSheet.create({
  Row:{
    flexDirection:"row", 
    borderWidth:1,
    borderColor:colors.divide_color,
    borderRadius:scale(5),
   
  
    alignSelf:"center",
    width:wp(96), 
    alignItems:"center",
    justifyContent:"space-between"
  }
})