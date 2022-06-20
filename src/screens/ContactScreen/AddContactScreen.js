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
    const AddContactScreen = ({navigation}) => { 

      const [companies, setCompanies] = useState([
        {
          value: 1,
          label: 'Zoobi Apps',
        },
        {
          value: 2,
          label: 'IFuture',
        },
        {
          value: 3,
          label: 'Codefreaks',
        },
        {
          value: 4,
          label: 'MetaFurture',
        },
        {
          value: 5,
          label: 'Right Source',
        },
       
    ]);
    const [selected_company, setSelectCompany] = useState("")
    const [companies_modal_visible, setCompaniesModalVisibe] = useState(false)
    const [company_name, setCompanyName] = useState("")
         ///// ******        Companies  Status Data             ****** /////

         const [company_status, setCompaniesStatus] = useState([
          {
            value: 1,
            label: 'Active',
          },
          {
            value: 2,
            label: 'DNS',
          },
          {
            value: 3,
            label: 'Inactive',
          },
          {
            value: 4,
            label: 'Lead',
          },
          {
            value: 5,
            label: 'Paking Lot',
          },
          {
            value: 6,
            label: 'Passive',
          },
          {
            value: 7,
            label: 'Past',
          },
          {
            value: 8,
            label: 'Prospecting',
          },
          {
            value: 9,
            label: 'Compaign',
          },

         
      ]);
      const [selected_company_status, setSelectedCompanyStatus] = useState("")
      const [company_status_visible, setCompanStatusModalVisible] = useState(false)
      //////******        Contacts Data             ****** //////////

      const [company_own_list, setCompanyOwnerList] = useState([
          {
            value: 1,
            label: 'Aftab Ameen',
          },
          {
            value: 2,
            label: 'Sajjad Ameen',
          },
          {
            value: 3,
            label: 'Abbas Ameen',
          },
          {
            value: 4,
            label: 'Tajul Amin',
          },
          {
            value: 5,
            label: 'Faryal Amin',
          },
         
      ]);
      const [selected_contact, setSelectContact] = useState("")
      const [contacts_modal_visible, setContactsModalVisibe] = useState(false)
      const [contact_name, setContactName] = useState("")

      //////******        Socila Links             ****** //////////
      const [socail_links, setSocialLinks] = useState([
          {
            value: "Disqus",
            label: 'Disqus',
          },
          {
            value: "Facebook",
            label: 'Facebook',
          },
          {
            value: "Google+",
            label: 'Google+',
          },
          {
            value: "LinkedIn",
            label: 'LinkedIn',
          },
          {
            value: "Pinterest",
            label: 'Pinterest',
          },
          {
            value: "Renren",
            label: 'Renren',
          },
          {
            value: "Skype",
            label: 'Skype',
          },
          {
            value: "Snapchat",
            label: 'Snapchat',
          },
          {
            value: "Tumblr",
            label: 'Tumblr',
          },
          {
            value: "Twitter",
            label: 'Twitter',
          },
          {
            value: "Vine",
            label: 'Vine',
          },
          {
            value: "Whatsapp",
            label: 'Whatsapp',
          },
         
          {
            value: "Youtube",
            label: 'Youtube',
          },
         
      ]);
    
      const [mobile_code, setMobileCode] = useState("US")
      const [mobile_code_modal_visible, setMobileCodeModalVisibe] = useState(false)
        //////******        Periorty Data             ****** //////////

      const [preferred_contact, setpreferred_contacts] = useState([
        {
          value: 1,
          label: 'Home',
        },
        {
          value: 2,
          label: 'Work',
        },
        {
          value: 3,
          label: 'Cell',
        },
        {
          value: 4,
          label: 'Email',
        },
        {
          value: 5,
          label: 'Fax',
        },
      
      ]);
      const [selected_preferred_contact, setSelectpreferred_contact] = useState("")
      const [preferred_contact_modal_visible, setpreferred_contactsModalVisibe] = useState(false)
      const [preferred_contact_name, setpreferred_contactName] = useState("")

      //////******        Techology Data             ****** //////////


      //////******        Reports To Data             ****** //////////
      const [ReportsTo, setReportsTo] = useState([
        {
          value: 1,
          label: 'Numan Ghauri',
        },
        {
          value: 2,
          label: 'Choudary Ahtar',
        },
        {
          value: 3,
          label: 'Mark zack',
        },
        {
          value: 4,
          label: 'Sohaib Latif',
        },
        
      
      ]);
      const [selected_reports_to, setSelectReports] = useState("")
      const [Industry_modal_visible, setReportsToModalVisibe] = useState(false)
      const [reports_to_name, setIndustryName] = useState("")


      ////// Country data 

      const [countrys, setcountrys] = useState([
        {
          value: 1,
          label: 'Pakistan',
        },
        {
          value: 2,
          label: 'Iran',
        },
        {
          value: 3,
          label: 'India',
        },
        {
          value: 4,
          label: 'Afghanistan',
        },
        {
          value: 5,
          label: 'Russia',
        },
       ]);

       //// State DATa

       const [states, setstates] = useState([
        {
          value: 1,
          label: 'Panjab',
        },
        {
          value: 2,
          label: 'KPK',
        },
        {
            value: 6,
            label: 'Baloch',
          },
        {
          value: 3,
          label: 'Sindh',
        },
        {
          value: 4,
          label: 'Gilgithh',
        },
        {
          value: 5,
          label: 'Kashmir',
        },
    ]);
    const [selected_state, setSelectstate] = useState("")
    const [state_modal_visible, setstatesModalVisibe] = useState(false)
    const [state_name, setstateName] = useState("")


    const [selected_country, setSelectcountry] = useState("")
    const [country_modal_visible, setcountrysModalVisibe] = useState(false)
    const [country_name, setcountryName] = useState("")


    const [contact_profile, setContactProfile] = useState({
      first_name:"",
      first_name_error:"",
      last_name:"",
      last_name_error:"",
      primary_email:"",
      primary_email_error:"",
      secondary_email:"",
      secondary_email_error:"",
      status:"",
      status_error:"",
      mobile:"",
      mobile_error:"",
      skills:["React-Native" , "React", "BlockChain","DB", "Data Analysis", "Content Writer SEO Specilist"],
      profile_summary:"",
      candidate_owner:"",
      attach_resume:"",
      phone_home:"",
      phone_home_error:"",
      phone_work:"",
      phone_work_error:"",
      phone_direct:"",
      phone_direct_error:"",
      fax:"",
      fax_error:"",
      emergency_contact:"",
      emergency_contact_error:"",
      emergency_no:"",
      emergency_no_error:"",
      socail_media:"",
      socail_media_error:"",
      address:"",
      address_error:"",
      city:"",
      city_error:"",
      zip:"",
      zip_error:""
  })
       

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
                            show_add_button={false}
                            width={wp(96)}
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
                            company_name={country_name}
                            setCompanyName={setcountryName}
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
                            company_name={state_name}
                            setCompanyName={setstateName}
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



export default AddContactScreen;


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