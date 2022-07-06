import React from 'react';
import {View,StyleSheet,Text, TextInput} from 'react-native';
import { textStyles } from '../../styles';
import { width } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
import { colors, fonts } from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
const PaginationView = () => {
  return (
    <View style={styles.row}>
        <AntDesign name={"left"}  size={scale(22)} color={colors.dark_primary_color} />
        <View style={styles.info_View}>
                
                <TextInput 
                    keyboardType={"numeric"}
                    caretHidden={true}
                    placeholder={"0"}
                    inlineImageLeft='search_icon'
                    style={{
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
                       
                    }} 
                />
                <Text style={{...textStyles.smallheading,color:"rgba(0,0,0,.5)", fontSize:scale(16)}}>out of 7</Text>
            </View>
        <AntDesign name={"right"}  size={scale(22)} color={colors.dark_primary_color} />
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
    info_View:{
        flexDirection:"row",
     
        alignItems:"center",
        marginHorizontal:scale(10),
        borderWidth:0,
        backgroundColor:"#0000",
        borderRadius:scale(5),
    },
   
  })