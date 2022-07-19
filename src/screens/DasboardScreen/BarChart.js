import React, {memo } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { 
    VictoryBar, VictoryChart,VictoryContainer, 
    VictoryTheme,VictoryAxis,VictoryLabel,
    LineSegment, VictoryPie  
} from "victory-native";
import { scale } from 'react-native-size-matters';
import {textStyles } from '../../styles';
import { colors, fonts } from '../../constants/theme';
import { width, wp } from '../../constants/sacling';
const BarChart = ({data, title}) => {
   
    return(
        <View style={styles.CardView}>
            <Text style={styles.CardViewTitle}>{title}</Text>
            <VictoryChart
                
                height={wp(60)}
                width={wp(100)} 
                animate={{ 
                    duration: 1000,
                    onLoad: { duration: 1000 }
                }}
                theme={VictoryTheme.material}
            >
                <VictoryBar  
                    alignment={"start"}
                    data={data}
                    labels={({ datum }) => `${datum.earnings}`}
                    labelComponent={
                        <VictoryLabel 
                            style={{
                                fontFamily:fonts.Medium,
                                fontSize:scale(8),
                                
                            }} 
                            
                            dx={scale(6)}
                            dy={scale(-1)}
                        />
                    
                    }
                    style={{ 
                        data:{ 
                            fill: "#007998" 
                        },
                        labels: { fill: "white" }
                    }} 
                    x="quarter" 
                    y="earnings"
                />
                <VictoryAxis 
                    dependentAxis
                    gridComponent={<LineSegment type={"fill"} />}
                    tickValues={[.1, .2, .3, .4,.5,.6,.7,.8,.9,1]}
                    style={{  
                        axis: {
                            stroke:"rgba(0,0,0,.1)"
                        },
                        grid: {
                            stroke:"rgba(0,0,0,.1)", 
                            strokeWidth: 1, 
                            strokeDasharray:false
                        },
                        ticks: {stroke: "#0000", size:1},
                        tickLabels:{
                            
                            fontSize:scale(8),
                            fontFamily:fonts.Medium,
                        }
                    }}
                />
                <VictoryAxis
                    style={{ 
                        axis: {
                            stroke:"rgba(0,0,0,.1)"
                        }, 
                        grid: {
                            stroke:"#0000", 
                            strokeWidth: 1, 
                            strokeDasharray:false
                        },
                        ticks: {stroke: "#0000", size:10},
                        tickLabels:{
                            angle :-45,
                            fontSize:scale(8),
                            fontFamily:fonts.Medium,
                        }
                    }}
                />
            </VictoryChart>
        </View>
    )
}
const areEqual = (prevProps, nextProps) => {
 
    if (prevProps.data === nextProps.data) {
      return true                                    // donot re-render
    }
    return false                                     // will re-render
  }
  
export default memo(BarChart,areEqual);


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
})