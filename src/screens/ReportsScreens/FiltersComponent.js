import React from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import { scale } from 'react-native-size-matters'
import { AppScreenWidth } from '../../constants/sacling'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { colors, fonts } from '../../constants/theme'
import { textStyles } from '../../styles'
const WIDTH = AppScreenWidth+scale(20)
const FiltersComponent = ({result_per_page,total_records,page_number,page_start, setResultPerPage}) => {
  return (
    <View style={styles.mainView}>
        <View style={styles.FilterMainView} >
            <TouchableOpacity style={styles.FilterButton}>
                <Ionicons 
                    name='options-sharp' 
                    style={{marginRight:scale(5)}} 
                    size={scale(18)} 
                    color={colors.text_primary_color} 
                />
               <Text style={{...textStyles.smallheading, fontSize:scale(13)}}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FilterButton}>
                <Ionicons 
                    name='filter' 
                    style={{marginRight:scale(5)}} 
                    size={scale(18)} 
                    color={colors.text_primary_color}
                />
                <Text style={{...textStyles.smallheading, fontSize:scale(13)}}>Sort</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.FilterMainView} >
            <TouchableOpacity style={styles.tab}>
                <Ionicons 
                    name='options-sharp' 
                    style={{marginRight:scale(5)}} 
                    size={scale(14)} 
                    color={colors.text_primary_color} 
                />
               <Text style={styles.tab_text}>All</Text>
               <Text style={styles.count_text}>{total_records}</Text>
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

        <View style={styles.FilterMainView} >
            <View style={styles.info_View}>
                <Text  style={{...textStyles.smallheading,color:colors.white, fontFamily:fonts.Bold, fontSize:scale(11)}}>{parseInt(page_start)+1} - {parseInt(page_start)+ parseInt(result_per_page)} of {total_records} results</Text>
            </View>

            <View style={styles.info_View}>
                <Text style={{...textStyles.smallheading,color:colors.white, fontFamily:fonts.Bold,  fontSize:scale(11)}}>Results per page:</Text>
                <TextInput 
                    keyboardType={"numeric"}
                    caretHidden={true}
                    value={result_per_page}
                    onChangeText={(text) => setResultPerPage(text)}
                    placeholder={"0"}
                    style={styles.TextInput} 
                />
            </View>
        </View>
    </View>
  )
}

export default FiltersComponent

const styles = StyleSheet.create({
    mainView:{
        alignSelf:"center",
        justifyContent:"center", 
        alignItems:"center", 
        paddingBottom:scale(5), 
        width:WIDTH, 
        backgroundColor:colors.dark_primary_color //"rgba(0,0,0,.1)"
    },
    FilterMainView:{
        width:WIDTH-scale(12), 
        flexDirection:"row",
        marginTop:scale(5),
        justifyContent:"space-between"
    },
    FilterButton:{
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
    TextInput:{
        width:scale(70),
        marginLeft:scale(5),
        padding:0, 
        borderColor:"rgba(255,255,255,.3)",
        borderRadius:scale(5),
        fontFamily:fonts.Medium,
        fontSize:scale(12),
        includeFontPadding:false,
        color:"#fff",
        borderWidth:1,
        height:scale(30),
        paddingLeft:scale(5)
    },
    info_View:{
        flexDirection:"row",
        alignItems:"center",
       
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
        borderBottomWidth:2,
        borderRadius:scale(5),
        borderColor:colors.dark_primary_color,
       
        
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
        minWidth:scale(25),
        textAlign:"center",
        includeFontPadding:false
    }
})