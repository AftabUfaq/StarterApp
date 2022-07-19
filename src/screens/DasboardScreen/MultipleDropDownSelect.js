import React, {useState} from 'react'
import MultiSelect from 'react-native-multiple-select';
import { scale } from 'react-native-size-matters';
import { hp, wp } from '../../constants/sacling';
import { colors, fonts } from '../../constants/theme';
    const items = [{
        id: 'zackbrown',
        name: 'zackbrown'
    }, {
        id: 'zuyijece',
        name: 'zuyijece'
    }, {
        id: 'ehtisham',
        name: 'ehtisham'
    }, {
        id: 'amichaell',
        name: 'amichaell'
    }, {
        id: 'Hamza',
        name: 'Hamza'
    }, {
        id: 'ghauri',
        name: 'ghauri'
    }, {
        id: 'Aftab',
        name: 'Aftab'
    }, {
        id: 'Abbas',
        name: 'Abbas'
    }, 
    {
        id: 'Ali',
        name: 'Ali'
    }, 
    {
        id: 'Asad',
        name: 'Asad'
    }, 
    {
        id: 'IKKhan',
        name: 'IK Khan'
    }, 
    {
        id: 'Zardari',
        name: 'Zardari'
    }, 
    {
        id: 'Bajwa',
        name: 'Bajwa bhi'
    }, 
    {
        id: 'Alam',
        name: 'Noor Alam'
    }, 
    {
        id: 'Hassan',
        name: 'Hassan'
    }
    ];

    const MultipleDropDownSelect = () => {
        const [selectedItems  ,setSelectedItems ] = useState([])
        const onSelectedItemsChange = selectedItems => {
            setSelectedItems(selectedItems);
          };
        return (
            <MultiSelect 
                items={items}
                uniqueKey="id" 
                onSelectedItemsChange={onSelectedItemsChange}  
                selectedItems={selectedItems}
                selectText="Please select users"
                searchInputPlaceholderText="Choose user from user ..."
                styleRowList={{
                    borderBottomWidth:1,
                    paddingVertical:scale(4),
                    borderColor:"rgba(0,0,0,.4)"
                }}
                styleDropdownMenuSubsection={{
                    backgroundColor:'#fff',
                    paddingLeft:scale(10),
                    flexDirection:"column",
                    paddingRight:0,
                    borderBottomWidth:1,
                    borderWidth:1,
                    minHeight:hp(6),
                    borderRadius:scale(5),
                    justifyContent:"space-evenly",
                    paddingHorizontal:scale(10)
                }}
              
                altFontFamily={fonts.Medium}
                selectedItemFontFamily={fonts.Medium}
                fontFamily={fonts.Medium}
                hideDropdown={true}
                fontSize={scale(12)}
                styleDropdownMenu={{
                    backgroundColor:"#0000",
                    borderRadius:scale(5),
                    padding:1,
                    borderBottomWidth:0
                }}
                styleMainWrapper={{
                    backgroundColor:colors.white,
                    width:wp(100),
                    paddingVertical:wp(2),
                    paddingBottom:0,
                    
                    paddingHorizontal:wp(2)
                }}
                styleTextTag={{
                    color:"rgba(0,0,0,.7)",
                    fontFamily:fonts.Medium,
                    fontSize:scale(12)
                }}
                tagContainerStyle={{
                    backgroundColor:"#fff",
                    borderWidth:1,
                    borderColor:colors.divide_color,
                    paddingHorizontal:0,
                    paddingVertical:0,
                    height:scale(30)
                }}
                styleInputGroup={{
                    backgroundColor:"rgba(0,0,0,.1)",
                    borderRadius:scale(5),
                    paddingVertical:scale(3),
                    paddingTop:0,
                    paddingBottom:0,
                    height:hp(6)
                }}
                noItemsText={"No user found"}
                selectedItemIconColor={colors.dark_primary_color}
                selectedItemTextColor={colors.dark_primary_color}
                submitButtonColor={colors.dark_primary_color}
                itemFontFamily={fonts.Medium}
                itemFontSize={scale(12)}
            />
        )
    }

export default MultipleDropDownSelect