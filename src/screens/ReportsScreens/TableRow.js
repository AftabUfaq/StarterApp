import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { textStyles } from '../../styles';
import { width } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
import { colors } from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
const TableRow = () => {
  const item = {
    name:"Aftab Ameen",
    companies:10,
    contacts:10,
    opportunities:7,
    job_order:"10",
    candidate:3,
    vendors:12,
  }
    return(
      <View style={{borderWidth:1,borderColor:"rgba(0,0,0,.2)", borderRadius:scale(5), }}>
          <View style={styles.row}>
            <Text style={textStyles.tableLabel}>
            {item.name}
            </Text>
            <TouchableOpacity style={{
                flexDirection:"row",
                borderRadius:scale(5),
                justifyContent:"space-between",
                alignItems:"center",
                backgroundColor:colors.dark_primary_color, paddingHorizontal:scale(10), paddingVertical:scale(5)}}>
              <Text style={{...textStyles.Label, color:"#fff"}}>
                View Details
              </Text>
              <AntDesign name={'caretright'} color={"#fff"} size={scale(14)} />
            </TouchableOpacity>
          </View>
          <View style={styles.row2}>
            <Text style={textStyles.tableLabel}>
              Companies
            </Text>
            <Text style={textStyles.Label}>
              {item.companies}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={textStyles.tableLabel}>
            Contacts
            </Text>
            <Text style={textStyles.Label}>
              {item.contacts}
            </Text>
          </View>
          <View style={styles.row2}>
            <Text style={textStyles.tableLabel}>
            Opportunities
            </Text>
            <Text style={textStyles.Label}>
              {item.opportunities}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={textStyles.tableLabel}>
              Job Orders
            </Text>
            <Text style={textStyles.Label}>
              {item.job_order}
            </Text>
          </View>
          <View style={styles.row2}>
            <Text style={textStyles.tableLabel}>
            Candidates
            </Text>
            <Text style={textStyles.Label}>
              {item.candidate}
            </Text>
          </View>
          <View style={{...styles.row, borderBottomWidth:0}}>
            <Text style={textStyles.tableLabel}>
            Vendors
            </Text>
            <Text style={textStyles.Label}>
              {item.vendors}
            </Text>
          </View>
      </View>    
    )
  }

  export default TableRow
  const styles = StyleSheet.create({
    row:{
      flexDirection:"row",
      width:width-scale(10),
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:scale(10),
      paddingVertical:scale(5),
      borderBottomWidth:1,
      borderBottomColor:"rgba(0,0,0,.2)",
      backgroundColor:"rgba(0,0,0,.05)"
    },
  
    row2:{
      flexDirection:"row",
      width:width-scale(10),
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:scale(10),
      paddingVertical:scale(5),
      borderBottomWidth:1,
      borderBottomColor:"rgba(0,0,0,.2)",
      backgroundColor:"rgba(0,0,0,.15)"
    }
  })