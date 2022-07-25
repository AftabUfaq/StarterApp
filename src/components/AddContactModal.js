import React, {useReducer, useState} from 'react'
import { country_data,company_status_data, state_data } from '../data/data';
import FormModal from './FormModal'
import CustomTextInput from './TextInput';
import DropdownAddComponent from './DropdownAddComponent';
import CustomButton from './Button';
import {View,ScrollView} from 'react-native'
import { colors } from '../constants/theme';
import { scale } from 'react-native-size-matters';
import { commonStyles } from '../styles';
import { width, wp } from '../constants/sacling';
  const initialState = {
      firstname:"",
      secondname:"",
      company:"",
      jobtitle:"",
      status:"",
      primaryemail:"",
      phonedirect:"",
      city:"",
      country:"",
      state:""
     
  }
 
  function AddContactModal() {
      const [compayformdata, dispatch] = useReducer(reducer , initialState)
      const [status_modal_visible , setStatusModalVisible] = useState(false)
      const [status,  setStatus] = useState(company_status_data)
      const [state_modal_visible , setStateModalVisible] = useState(false)
      const [state, setState] = useState(state_data)
      const [country_modal_visible , setCountryModalVisible] = useState(false)
      const [country, setCountry] = useState(country_data)
      function reducer(state, action) {
          switch (action.type) {
              case "companyname":
                return { ...state, companyname:action.payload };
              default:
                  return initialState
          }
      }
  return (
    <FormModal isVisible={true} title={"Add Contact"} onClose={() => null}>
       
        <ScrollView 
            keyboardShouldPersistTaps="always"
         
            contentContainerStyle={{alignItems:"center",width:width, justifyContent:"center"}}
            showsVerticalScrollIndicator={false} >
            <CustomTextInput
                placeholder={'Company name'}
                value={compayformdata.companyname}
                borderWidth={1}
                lableColor={colors.dark_primary_color}
                borderRadius={scale(5)}
                onChangeText={text => {
                  dispatch({type:"companyname", payload:text})
                }}
                errorMessage={""}
            />
             <DropdownAddComponent 
                show_add_button={false}
                width={wp(96)}
              
                placeholder={"Status*"}
                items={status}
                setItems={setStatus}
                selectedItems={compayformdata.status}
                setSelectItems={(text) => console.log(text) }
                isVisible={status_modal_visible}
                setIsVisible={setStatusModalVisible}
               
            />
            <DropdownAddComponent 
                show_add_button={false}
                width={wp(96)}
               
                placeholder={"State"}
                items={state}
                setItems={setState}
                selectedItems={compayformdata.state}
                setSelectItems={(text) => console.log(text) }
                isVisible={state_modal_visible}
                setIsVisible={setStateModalVisible}
                
            />
            <DropdownAddComponent 
                show_add_button={false}
                width={wp(96)}
                placeholder={"Country"}
                items={country}
                setItems={setCountry}
                selectedItems={compayformdata.country}
                setSelectItems={(text) => console.log(text) }
                isVisible={country_modal_visible}
                setIsVisible={setCountryModalVisible}
               
            />
           
              <View style={{marginVertical:scale(10), alignSelf:"center"}}>
                  <CustomButton 
                      loading={false}
                      loadingText={"Submitting"}
                      onPress={() => alert("false")}
                      text={"Save"}
                  />
              </View>
          
        </ScrollView>
        
    </FormModal>
  )
}

export default AddContactModal