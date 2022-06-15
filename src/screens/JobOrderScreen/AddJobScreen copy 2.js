import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,ScrollView} from 'react-native';
import { commonStyles,textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import UpLoadComponent from "../../components/Uploadcomponent"
import CustomButton from '../../components/Button'
import DrawLine from '../../components/DrawLine';
import { scale } from 'react-native-size-matters';
import CustomTextInput from '../../components/TextInput';
import ArrayInput from '../../components/ArrayInput';
import Spacer from '../../components/Spacer';
    const AddJobScreen = ({navigation}) => {
        const [Industrys, setIndustrys] = useState([
            {
              id: 1,
              name: 'IT',
            },
            {
              id: 2,
              name: 'Telecommunication',
            },
            {
              id: 3,
              name: 'Engineering',
            },
            {
              id: 4,
              name: 'Medical',
            },
            
           
        ]);
        const [selected_Industry, setSelectIndustry] = useState("")
        const [Industry_modal_visible, setIndustrysModalVisibe] = useState(false)
        const [Industry_name, setIndustryName] = useState("")
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Add Job Order"}
                    />
                  
                    <ScrollView 
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false} >
                        
                        <Spacer height={scale(10)} />

                        <DropdownAddComponent 
                            placeholder={"Industry"}
                            items={Industrys}
                            setItems={setIndustrys}
                            selectedItems={selected_Industry}
                            setSelectItems={setSelectIndustry}
                            isVisible={Industry_modal_visible}
                            setIsVisible={setIndustrysModalVisibe}
                            company_name={Industry_name}
                            setCompanyName={setIndustryName}
                        />
                        <CustomButton 
                            loading={false}
                            loadingText={"Submitting"}
                            onPress={() => alert("false")}
                            text={"Save"}
                        />
                        <Spacer height={scale(10)} />
                    </ScrollView>
                </View>
            </SafeAreaView>
            
        );
    };


export default AddJobScreen;


