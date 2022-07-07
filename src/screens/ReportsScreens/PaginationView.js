import React, { useEffect } from 'react';
import {View,StyleSheet,Text,TouchableOpacity, TextInput} from 'react-native';
import { textStyles } from '../../styles';

import { scale } from 'react-native-size-matters';
import { colors, fonts } from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
const PaginationView = ({page_number,setPageNumber,total_pages,records_done,result_per_page}) => {
    useEffect(() => {

    },[page_number])
  return (
    <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          if(page_number> 0){
            setPageNumber(page_number => page_number-1)
          }
        }}>
          <AntDesign name={"left"}  size={scale(22)} color={colors.dark_primary_color} />
        </TouchableOpacity>
       
           
            <Text style={{...textStyles.smallheading,color:"rgba(0,0,0,.5)", fontSize:scale(16)}}>{page_number+1} out of {Math.ceil(total_pages)}</Text>
       
            <TouchableOpacity 
              onPress={() => {setPageNumber(parseInt(page_number)+1)}}>
              <AntDesign name={"right"}  size={scale(22)} color={colors.dark_primary_color} />
            </TouchableOpacity>
    </View>
  )
}

export default PaginationView
const styles = StyleSheet.create({
    row:{
      flexDirection:"row",
        borderRadius:scale(5),
      justifyContent:"space-between",
      alignItems:"center",
      alignSelf:"flex-end",
      paddingHorizontal:scale(10),
       padding:scale(5),
      borderBottomWidth:1,
      borderBottomColor:"rgba(0,0,0,.2)",
      backgroundColor:"rgba(0,0,0,.05)"
    },
    TextInput:{
      width:scale(30),
      marginHorizontal:scale(5),
      padding:0, 
      backgroundColor:"#fff",
      borderColor:"rgba(0,0,0,.1)",
      borderRadius:scale(5),
      fontFamily:fonts.Medium,
      fontSize:scale(12),
      textAlign:"center",
      includeFontPadding:false,
      color:"rgba(0,0,0,.6)",
      borderWidth:1,
      height:scale(30),
     
  },
    info_View:{
        flexDirection:"row",
     
        alignItems:"center",
        marginHorizontal:scale(10),
        borderWidth:0,
        backgroundColor:"#0000",
        borderRadius:scale(5),
    },
   
  })