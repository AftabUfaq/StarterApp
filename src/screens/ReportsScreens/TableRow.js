import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { textStyles } from '../../styles';
import { width } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
import { fonts } from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
const TableRow = ({item}) => {

    return(
        <View style={styles.mainView}> 
              <View style={styles.headerView}>
                  <Text style={{...textStyles.tableLabel, fontFamily:fonts.Bold}}>
                      User name: -- {item?.UsersIDs}
                  </Text>
                  <TouchableOpacity 
                      style={styles.buttonView}>
                      <Text style={{...textStyles.Label,fontSize:scale(10), color:"#000"}}>
                          View Details
                      </Text>
                      <AntDesign name={'right'} color={"#000"} size={scale(10)} />
                  </TouchableOpacity>
              </View>

              <View style={styles.row}>
                  <View style={styles.row2} >
                      <Text style={textStyles.tableLabel}>
                          Companies
                      </Text>
                      <Text style={textStyles.Label}>
                          {item?.Companies}
                      </Text>
                  </View>
                  <View style={styles.row3} >
                      <Text style={textStyles.tableLabel}>
                          Contacts
                      </Text>
                      <Text style={textStyles.Label}>
                        {item?.Contacts}
                      </Text>
                  </View>
              </View>         
              
              <View style={styles.row}>
                  
                  <View style={styles.row2} >
                      <Text style={textStyles.tableLabel}>
                        Job Orders
                      </Text>
                      <Text style={textStyles.Label}>
                        {item?.JobOrders}
                      </Text>
                  </View>
                  
                  <View style={styles.row3} >
                      <Text style={textStyles.tableLabel}>
                        Candidates
                      </Text>
                      <Text style={textStyles.Label}>
                        {item?.Candidates}
                      </Text>
                  </View>
              </View>
          
              <View style={{...styles.row, borderBottomWidth:0}}>
                  <View style={styles.row2} >
                      <Text style={textStyles.tableLabel}>
                          Opportunities
                      </Text>
                      <Text style={textStyles.Label}>
                          {item?.Opportunities}
                      </Text>
                  </View>
                  <View style={styles.row3} >
                      <Text style={textStyles.tableLabel}>
                        Vendors
                      </Text>
                      <Text style={textStyles.Label}>
                        {item?.Vendors}
                      </Text>
                  </View>
              </View>
        </View>    
    )
  }

  export default TableRow
  const styles = StyleSheet.create({
    mainView:{
      alignSelf:"center",
      borderWidth:0,
      backgroundColor:"#fff", 
      overflow:"hidden",
      margin:5, 
      borderRadius:scale(5),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    headerView:{
      flexDirection:"row",
      width:width-scale(10),
      justifyContent:"space-between",
      backgroundColor:"rgba(255,255,255,1)",
      padding:scale(10),
      borderBottomWidth:2,
      borderBottomColor:"rgba(0,0,0,.2)"
    },
    buttonView:{
      flexDirection:"row",
      borderRadius:scale(5),
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor:"rgba(0,0,0,.05)", 
      paddingHorizontal:scale(10), 
      paddingVertical:scale(5)
    },
    row:{
      flexDirection:"row",
      width:width-scale(10),
      justifyContent:"space-between",
      borderBottomWidth:1,
      borderBottomColor:"rgba(0,0,0,.2)",
      backgroundColor:"rgba(255,255,255,1)"
    },
    row2:{
      flexDirection:"row",
      width:(width-scale(10))/2,
      justifyContent:"space-between",
      alignItems:"center",
      paddingVertical:scale(10),
      borderRightWidth:1,
      borderRightColor:"rgba(0,0,0,.2)",
      paddingHorizontal:scale(10),
    },
    row3:{
      flexDirection:"row",
      width:(width-scale(10))/2,
      paddingVertical:scale(10),
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:scale(10),
    }
  })