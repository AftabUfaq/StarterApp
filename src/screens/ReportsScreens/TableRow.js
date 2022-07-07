import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { textStyles } from '../../styles';
import { width } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
import { colors } from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
const TableRow = ({item}) => {

    return(
      <View style={{borderWidth:1, marginTop:scale(10), borderColor:"rgba(0,0,0,.2)", borderRadius:scale(5), }}>
          <View style={styles.row}>
            <Text style={textStyles.tableLabel}>
            {item?.UsersIDs}
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
              {item?.Companies}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={textStyles.tableLabel}>
            Contacts
            </Text>
            <Text style={textStyles.Label}>
              {item?.Contacts}
            </Text>
          </View>
          <View style={styles.row2}>
            <Text style={textStyles.tableLabel}>
            Opportunities
            </Text>
            <Text style={textStyles.Label}>
              {item?.Opportunities}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={textStyles.tableLabel}>
              Job Orders
            </Text>
            <Text style={textStyles.Label}>
              {item?.JobOrders}
            </Text>
          </View>
          <View style={styles.row2}>
            <Text style={textStyles.tableLabel}>
            Candidates
            </Text>
            <Text style={textStyles.Label}>
              {item?.Candidates}
            </Text>
          </View>
          <View style={{...styles.row, borderBottomWidth:0}}>
            <Text style={textStyles.tableLabel}>
            Vendors
            </Text>
            <Text style={textStyles.Label}>
              {item?.Vendors}
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