import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,Text,View} from 'react-native';
import { commonStyles} from '../../styles';
import { colors } from '../../constants/theme';
import { scale } from 'react-native-size-matters';
import ArrayInput from '../../components/ArrayInput';
import CustomButton from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/TextInput';
import DropdownAddComponent from '../../components/DropdownAddComponent';
import Spacer from '../../components/Spacer';
import { MainRoutes } from '../../constants/routes';
    const AddJobScreen = ({navigation}) => { 
        
       ///// ******        Companies Data             ****** /////

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
        
        //////******        Contacts Data             ****** //////////

        const [contacts, setContacts] = useState([
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

        //////******        Periorty Data             ****** //////////

        const [priority, setPrioritys] = useState([
            {
              value: 1,
              label: 'Very High',
            },
            {
              value: 2,
              label: 'high',
            },
            {
              value: 3,
              label: 'Medium',
            },
            {
              value: 4,
              label: 'Low',
            },
            {
              value: 5,
              label: 'very low',
            },
           
        ]);
        const [selected_priority, setSelectPriority] = useState("")
        const [priority_modal_visible, setPrioritysModalVisibe] = useState(false)
        const [priority_name, setPriorityName] = useState("")

        //////******        Techology Data             ****** //////////
        const [technologys, setTechnologys] = useState([
            {
              value: 1,
              label: 'React-Native',
            },
            {
              value: 2,
              label: 'MongoDB',
            },
            {
              value: 3,
              label: 'VS Code',
            },
            {
              value: 4,
              label: 'XCode',
            },
            {
              value: 5,
              label: 'Data Analysis',
            },
           
        ]);
        const [selected_Technology, setSelectTechnology] = useState("")
        const [Technology_modal_visible, setTechnologysModalVisibe] = useState(false)
        const [Technology_name, setTechnologyName] = useState("")

        //////******        Industry Data             ****** //////////
        const [Industrys, setIndustrys] = useState([
            {
              value: 1,
              label: 'IT',
            },
            {
              value: 2,
              label: 'Telecommunication',
            },
            {
              value: 3,
              label: 'Engineering',
            },
            {
              value: 4,
              label: 'Medical',
            },
            
           
        ]);
        const [selected_Industry, setSelectIndustry] = useState("")
        const [Industry_modal_visible, setIndustrysModalVisibe] = useState(false)
        const [Industry_name, setIndustryName] = useState("")

        /////////****** Job Data *////////////////////

        const [job_data, setJobData] = useState({
            job_id:"",
            job_id_error:"",
            job_title:"",
            job_title_error:"",
            priority:"",
            priority_error:"",
            status:"",
            status_error:"",
            job_type:"",
            job_type_error:"",
            pay_type:"",
            pay_type_error:"",
            bill_rate:"",
            bill_rate_error:"",
            pay_salary:"",
            pay_salary_error:"",
            duration:"",
            duration_error:"",
            no_of_openings:"",
            no_of_openings_error:"",
            skills:["React-Native" , "React", "BlockChain","DB", "Data Analysis", "Content Writer SEO Specilist"],
            description:"",
            description_error:"",
            job_owner:"",
            job_owner_error:"",
            assigned_recruter:"",
            assigned_recruter_error:"",
                        
        })

        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Add Job"}
                    />
                    <ScrollView 
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false} >
                       <CustomTextInput
                            placeholder={'Job Id'}
                            value={job_data.job_id}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,job_id:text })
                            }}
                            errorMessage={""}
                        />
                         <CustomTextInput
                            placeholder={'Job title'}
                            value={job_data.job_title}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,job_title:text })
                            }}
                            errorMessage={""}
                        />
                        <DropdownAddComponent 
                            AddButtonPress={() => navigation.navigate(MainRoutes.AddCompanyScreen)}
                            placeholder={"company"}
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
                            AddButtonPress={() => alert("contact")}
                            placeholder={"contact"}
                            items={contacts}
                            setItems={setContacts}
                            selectedItems={selected_contact}
                            setSelectItems={setSelectContact}
                            isVisible={contacts_modal_visible}
                            setIsVisible={setContactsModalVisibe}
                            company_name={contact_name}
                            setCompanyName={setContactName}
                        />
                        <DropdownAddComponent 
                            AddButtonPress={() => alert("company")}
                            placeholder={"priority"}
                            items={priority}
                            setItems={setPrioritys}
                            selectedItems={selected_priority}
                            setSelectItems={setSelectPriority}
                            isVisible={priority_modal_visible}
                            setIsVisible={setPrioritysModalVisibe}
                            company_name={priority_name}
                            setCompanyName={setPriorityName}
                        />

                        <CustomTextInput
                            placeholder={'Status'}
                            value={job_data.status}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data, status:text})
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Job type'}
                            value={job_data.job_type}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,job_type:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Pay type'}
                            value={job_data.pay_type}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,pay_type:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Bill rate'}
                            value={job_data.bill_rate}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,bill_rate:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Pay/Salary'}
                            value={job_data.pay_salary}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,pay_salary:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Duration'}
                            value={job_data.duration}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,duration:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'No. of Openings'}
                            value={job_data.no_of_openings}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,no_of_openings:text })
                            }}
                            errorMessage={""}
                        />
                        <ArrayInput
                            placeholder={'Add Skills'}
                            skills={job_data.skills}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onAdd={(skill) => {
                                let temp_skills = job_data.skills
                                temp_skills.push(skill)
                                setJobData({...job_data, skills:temp_skills})
                            }}
                            onChangeText={index => {
                                let temp_skills = job_data.skills
                                delete temp_skills[index]
                                setJobData({...job_data, skills:temp_skills})
                            }}
                            errorMessage={""}
                        />
                        
                        <CustomTextInput
                            placeholder={'Description'}
                            value={job_data.description}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,description:text })
                            }}
                            errorMessage={""}
                        />

                        <CustomTextInput
                            placeholder={'Job Owner'}
                            value={job_data.job_owner}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,job_owner:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Assigned Recruiter'}
                            value={job_data.assigned_recruter}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...job_data,assigned_recruter:text })
                            }}
                            errorMessage={""}
                        />
                        <DropdownAddComponent 
                            AddButtonPress={() => alert("company")}
                            placeholder={"technology"}
                            items={technologys}
                            setItems={setTechnologys}
                            selectedItems={selected_Technology}
                            setSelectItems={setSelectTechnology}
                            isVisible={Technology_modal_visible}
                            setIsVisible={setTechnologysModalVisibe}
                            company_name={Technology_name}
                            setCompanyName={setTechnologyName}
                        />

                        <DropdownAddComponent 
                            AddButtonPress={() => alert("company")}
                            placeholder={"industry"}
                            items={Industrys}
                            setItems={setIndustrys}
                            selectedItems={selected_Industry}
                            setSelectItems={setSelectIndustry}
                            isVisible={Industry_modal_visible}
                            setIsVisible={setIndustrysModalVisibe}
                            company_name={Industry_name}
                            setCompanyName={setIndustryName}
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



export default AddJobScreen;

