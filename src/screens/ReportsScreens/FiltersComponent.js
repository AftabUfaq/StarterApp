import React from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import { scale } from 'react-native-size-matters'
import { AppScreenWidth } from '../../constants/sacling'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { colors, fonts } from '../../constants/theme'
import { textStyles } from '../../styles'
const WIDTH = AppScreenWidth+scale(20)
const FiltersComponent = () => {
  return (
    <View style={{alignSelf:"center",justifyContent:"center", alignItems:"center", paddingVertical:scale(5), width:WIDTH, backgroundColor:"rgba(0,0,0,.1)"}}>
        <View style={{width:WIDTH-scale(12), flexDirection:"row",justifyContent:"space-between" }} >
            <TouchableOpacity style={styles.button}>
                <Ionicons 
                    name='options-sharp' 
                    style={{marginRight:scale(5)}} 
                    size={scale(18)} 
                    color={colors.text_primary_color} 
                />
               <Text style={{...textStyles.smallheading, fontSize:scale(13)}}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Ionicons 
                    name='filter' 
                    style={{marginRight:scale(5)}} 
                    size={scale(18)} 
                    color={colors.text_primary_color}
                />
                <Text style={{...textStyles.smallheading, fontSize:scale(13)}}>Sort</Text>
            </TouchableOpacity>
        </View>
        <View style={{width:WIDTH, marginTop:scale(5), flexDirection:"row",justifyContent:"space-around" }} >
            <TouchableOpacity style={styles.tab}>
                <Ionicons 
                    name='options-sharp' 
                    style={{marginRight:scale(5)}} 
                    size={scale(14)} 
                    color={colors.text_primary_color} 
                />
               <Text style={styles.tab_text}>All</Text>
               <Text style={styles.count_text}>60</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Ionicons 
                    name='filter' 
                    style={{marginRight:scale(5)}} 
                    size={scale(14)} 
                    color={colors.text_primary_color}
                />
                <Text style={styles.tab_text}>Active</Text>
                <Text  style={styles.count_text}>35</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Ionicons 
                    name='filter' 
                    style={{marginRight:scale(5)}} 
                    size={scale(14)} 
                    color={colors.text_primary_color}
                />
                <Text style={styles.tab_text}>UnActive</Text>
                <Text style={styles.count_text}>25</Text>
            </TouchableOpacity>
        </View>
        <View style={{width:WIDTH, marginTop:scale(5), flexDirection:"row",justifyContent:"space-around" }} >
            
            <View style={styles.info_View}>
                <Text  style={{...textStyles.smallheading, fontSize:scale(11)}}>11 - 14 of 64 results</Text>
            </View>
            <View style={styles.info_View}>
                <Text style={{...textStyles.smallheading, fontSize:scale(11)}}>Results per page:</Text>
                <TextInput 
                    keyboardType={"numeric"}
                    caretHidden={true}
                    placeholder={"0"}
                    inlineImageLeft='search_icon'
                    style={{
                        width:scale(70),
                        marginLeft:scale(5),
                        padding:0, 
                        borderColor:"rgba(0,0,0,.3)",
                        borderRadius:scale(5),
                        fontFamily:fonts.Medium,
                        fontSize:scale(12),

                        includeFontPadding:false,
                        color:"rgba(0,0,0,.6)",
                        borderWidth:1,
                        height:scale(30),
                        paddingLeft:scale(5)
                    }} 
                />
            </View>
        </View>
    </View>
  )
}

export default FiltersComponent

const styles = StyleSheet.create({
    button:{
        width:WIDTH/2.15, 
        flexDirection:"row",
        justifyContent:"center", 
        alignItems:"center",
        padding:scale(8),
        borderWidth:0,
        backgroundColor:"#fff",
        borderRadius:scale(5),
        borderColor:"rgba(0,0,0,.3)",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
    info_View:{
        flexDirection:"row",
       // justifyContent:"center", 
        alignItems:"center",
        padding:scale(8),
        borderWidth:0,
        backgroundColor:"#0000",
        borderRadius:scale(5),
    },
    tab:{
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"center", 
        alignItems:"center",
        padding:scale(8),
        //paddingBottom:scale(4),
        borderBottomWidth:2,
        borderRadius:scale(5),
        borderColor:colors.dark_primary_color,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.53,
        // shadowRadius: 13.97,
        // elevation: 21,
        
    },
    tab_text:{
        ...textStyles.smallheading, 
        fontFamily:fonts.Bold,
        fontSize:scale(11)
    },
    count_text:{
        color:"#fff", 
        backgroundColor:colors.dark_primary_color,
        borderRadius:scale(5),
        marginHorizontal:scale(5),
        fontFamily:fonts.Bold,
        padding:scale(3),  
        fontSize:scale(10),
        width:scale(25),
        textAlign:"center",
        includeFontPadding:false
    }
})