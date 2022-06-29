import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors, fonts } from "../constants/theme";
export const textStyles = StyleSheet.create({
    heading:{
        fontFamily:fonts.Bold,
        fontSize:scale(18),
        color:colors.text_primary_color,
        backgroundColor:"#0000",
    },
    mediumheading:{
        fontFamily:fonts.Medium,
        fontSize:scale(16),
        color:colors.text_primary_color,
        backgroundColor:"#0000",
    },
    smallheading:{
        fontFamily:fonts.Medium,
        fontSize:scale(14),
        color:colors.text_primary_color,
        backgroundColor:"#0000",
    },
    title:{
        fontFamily:fonts.Medium,
        fontSize:scale(12),
        color:"rgba(0,0,0,.8)",
        backgroundColor:"#0000",
    },
    paragraph:{
        fontFamily:fonts.Regular,
        fontSize:scale(14),
        color:colors.text_primary_color,
        backgroundColor:"#0000",
    },
    Label:{
        fontFamily:fonts.Medium,
        fontSize:scale(12),
        color:colors.text_primary_color,
        backgroundColor:"#0000",
    },
    small:{
        fontFamily:fonts.Light,
        fontSize:scale(12),
        color:colors.text_primary_color,
        backgroundColor:"#0000",
    },
    skills_text:{
        fontFamily:fonts.Medium,
        fontSize:scale(11),
        includeFontPadding:false,
        color:colors.text_primary_color,
        backgroundColor:"#0000",
    },
    errorText:{
        fontFamily:fonts.Medium,
        fontSize:scale(10),
        color:colors.error_text,
        backgroundColor:"#0000",
    },
    disabletext:{
        fontFamily:fonts.Regular,
        fontSize:scale(14),
        textAlign:"center",
        color:"rgba(0,0,0,.5)",
        backgroundColor:"#0000",
    }
})