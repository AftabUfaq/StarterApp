import React, {memo } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {VictoryLabel,VictoryPie  } from "victory-native";
import { scale } from 'react-native-size-matters';
import {textStyles } from '../../styles';
import { colors, fonts } from '../../constants/theme';
import { width, wp } from '../../constants/sacling';
const HalfPieChart = ({data, colors}) => {
   
        return (
            <View style={styles.CardView}>
            <Text style={styles.CardViewTitle}>Recruiter Performance</Text>
            <View style={{ flex:1, alignItems:"center", justifyContent:"space-between"}}>
             
                <VictoryPie   
                    startAngle={-90}
                    endAngle={90}
                    data={data}
                    colorScale={colors}
                    height={wp(60)} 
                    padding={{ top:scale(10), bottom:scale(10), right:scale(10),left:scale(10) }}
                    width={wp(60)}
                    labels={() => null}
                    innerRadius={scale(30)} 
                    labelRadius={0}
                    x="quarter" 
                    style={{ labels: {display: "none" } }}
                    y="earnings"
                    
                >
                    <VictoryLabel active={false}/>
                </VictoryPie>
           
             <View style={{width:wp(97),position:"absolute",top:wp(40),paddingHorizontal:wp(1), flexDirection:"row", flexWrap:"wrap",  backgroundColor:"rgba(0,0,0,0)"}}>
                {data.map((item, index) => {
                 
                    return(
                        <View key={`${index}`} style={{flexDirection:"row",width:wp(29), marginRight:wp(2), alignItems:"center"}}>
                            <View style={{width:wp(2),marginRight:wp(1), height:wp(2), borderRadius:wp(5), backgroundColor:colors[index]}} />
                            <Text style={{...styles.ItemViewTitle, fontFamily:fonts.Bold}} >{item.quarter}: </Text>
                            <Text style={styles.ItemViewTitle} >{item.earnings}</Text>
                        </View>
                    )
                })}
            </View>
            </View>
        </View>
    )
}

const areEqual = (prevProps, nextProps) => {
   
    if (prevProps.data === nextProps.data && prevProps.colors === nextProps.colors) {
      return true                                    // donot re-render
    }
    return false                                     // will re-render
  }
  
export default memo(HalfPieChart,areEqual);


const styles = StyleSheet.create({
    container:{
        width:width,
        backgroundColor:"#fff", 
        alignSelf:"center"
    },
    CardView:{
        width:wp(98),
        alignSelf:"center", 
        marginTop:scale(5), 
        borderWidth:1,   
        overflow:"hidden",
        borderRadius:scale(5),
        borderColor:"rgba(0,0,0,.1)"
    },
    CardViewTitle:{
        ...textStyles.Label,
        color:colors.text_primary_color,
        includeFontPadding:false,
        borderBottomWidth:1,
        fontFamily:fonts.Bold,
        borderColor:"rgba(0,0,0,.1)",
        padding:scale(5),
        width:wp(98)-2
    },
    ItemView:{
        flexDirection:"row",
        elevation:2,
       
        paddingHorizontal:scale(8),
        borderRadius:scale(5),
        borderRightColor:"rgba(0,0,0,.1)",
        alignItems:"center", 
        margin:scale(5), 
        backgroundColor:"#fff", 
        height:scale(40)
    },
    ItemViewTitle:{
        ...textStyles.Label,
        color:colors.text_primary_color,
        includeFontPadding:false,
        fontSize:scale(10)
    },
})