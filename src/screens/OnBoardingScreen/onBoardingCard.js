import React, { useEffect } from "react";
import { View,Text,Image, TouchableOpacity, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { AppScreenWidth } from "../../constants/sacling";
import { colors, fonts } from "../../constants/theme";
import { textStyles } from "../../styles";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const OnBoardingCard = ({item, onPress=null}) => {
 
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={styles.main}>
             <View style={{marginHorizontal:scale(5),width:AppScreenWidth-scale(55)}}>
                <Text  
                    numberOfLines={1} 
                    style={{
                        ...textStyles.Label,
                        fontSize:scale(12), 
                        fontFamily:fonts.Bold,
                        color:"rgba(0,0,0,.7)"
                    }}>
                        {item.candidate_name} - {item.job_title}
                </Text>
              
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <FontAwesome5 
                            name="building" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(12)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item?.job_title}</Text>
                </View>

                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <FontAwesome5 
                            name="user-alt" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(12)} 
                        />
                    </View>
                    <Text  numberOfLines={1} style={styles.text} >{item.candidate_name}</Text>
                </View>

                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <FontAwesome5 
                            name="user-alt" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(12)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.company_name}</Text>
                </View>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <FontAwesome5 
                            name="user-alt" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(12)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.owner_name}</Text>
                </View>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <Ionicons 
                            name="calendar" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(14)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.due_date}</Text>
                </View>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <FontAwesome5 
                            name="user-alt" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(12)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.updateed_by_name}</Text>
                </View>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <Ionicons 
                            name="calendar" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(14)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.update_date}</Text>
                </View>
                

                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <FontAwesome5 
                            name="bolt" 
                            color={"rgba(0,0,0,.5)"} 
                            size={scale(14)} 
                        />
                    </View>
                    <Text 
                        numberOfLines={1} 
                        style={{
                            ...styles.text, 
                            color:"#fff", 
                            paddingVertical:scale(2), 
                            borderRadius:3, 
                            backgroundColor:item.color,paddingHorizontal:scale(5)
                        }}>
                            {item.status}
                    </Text>
                </View>

            </View>
            
        </TouchableOpacity>
    )
}

export default OnBoardingCard

const styles = StyleSheet.create({
    main:{
        width:AppScreenWidth,
        elevation:2,
        marginHorizontal:scale(2),
        marginTop:scale(5),
        backgroundColor:"#fff",
        padding:scale(5),
        justifyContent:"space-between",
        flexDirection:"row",
        borderRadius:scale(5),
    },
    row_icon:{
        flexDirection:"row",
       // justifyContent:"center",
        alignItems:"center",
        marginTop:scale(2)
    },
    text:{
        ...textStyles.smallheading,
        includeFontPadding:false, 
        fontSize:scale(10),
        color:"rgba(0,0,0,.5)",
        marginLeft:scale(5)
    },
    box_text:{
        ...textStyles.smallheading,
        includeFontPadding:false, 
        fontSize:scale(6),
        color:"#FFF",
        marginLeft:scale(5)
    },
    box:{
        width:scale(30),
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:scale(4), 
        height:scale(15), 
        backgroundColor:"#F3A4B1"
    },
    icon_box:{
        width:scale(15), 
        height:scale(15), 
        alignItems:"center", 
        justifyContent:"center"
    }
})