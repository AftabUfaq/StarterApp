import React, { useState,useEffect } from 'react';
import {ScrollView,View,SafeAreaView} from 'react-native';
import CustomStatusBar from '../../components/StatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomHeader from '../../components/SearchHeader';
import { commonStyles} from '../../styles';
import FiltersComponent from './FiltersComponent';
import TableRow from './TableRow';
import data from './reports.json'
import PaginationView from './PaginationView'
const UserActivitySummaryScreen =  ({navigation})  => {
  const [result_per_page , setResultPerPage] = useState("5")
  const [page_number,setPageNumber] = useState("0")
  const [page_start , setPageStart] = useState(`${page_number*result_per_page}`)
  useEffect(() => {
    setPageStart(`${page_number*result_per_page}`)
  }, [page_number,result_per_page])
  
  console.log('######################################################################################');
  console.log(page_number ,"Page Number");
  console.log(result_per_page ,"result_per_page");
  console.log(page_start ,"page_start");
  console.log((parseInt(page_start)+parseInt(result_per_page)) ,"page_start+result_per_page");
  console.log('######################################################################################');
  return (  
    <SafeAreaProvider>
        <CustomStatusBar />  
        <SafeAreaView style={commonStyles.container} >
            <CustomHeader 
                show_backButton={true}
                isdrawer={false}
                SearchPress={(text) => console.log(text)}
                onPress={() =>  navigation.goBack()}
                title={"User Activity Summary"}
                isfilter={false}
                iswidgets={false}
            />
            <FiltersComponent 
              result_per_page={result_per_page}
              page_number={page_number}
              total_records={data.length}
              setResultPerPage={setResultPerPage}
              page_start={page_start}
             
            />
            <View style={{height:10}} />
            <ScrollView 
              showsVerticalScrollIndicator={false} 
              contentContainerStyle={{
                alignItems:"center",
                justifyContent:"center"
              }}>
              {data.slice(page_start,(parseInt(page_start)+parseInt(result_per_page))).map((item, index) => <TableRow item={item} key={`${index}`}  />)}
              <View style={{height:10}} />
                <PaginationView 
                    setPageNumber={setPageNumber}
                    page_number={page_number}
                    total_pages={parseInt(data.length)/parseInt(result_per_page)}
                    records_done={(parseInt(page_start)+parseInt(result_per_page))}
                    result_per_page={parseInt(result_per_page)}
                />
              <View style={{height:10}} />
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default UserActivitySummaryScreen

