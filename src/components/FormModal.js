import React from 'react';
import {View,TouchableOpacity, Text, StyleSheet,} from 'react-native';
import Modal from 'react-native-modal';
import { scale,verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { wp } from '../constants/sacling';
import {colors, fonts} from '../constants/theme'


const FormModal = ({isVisible,children=null, title="Add Periority", onClose}) => {
    return(
        <Modal
            style={styles.ModalView}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            backdropTransitionOutTiming={200}
            backdropTransitionInTiming={500}
            animationInTiming={500}
            animationIn={"fadeInUp"}
            animationOut={"fadeOutDown"}
            backdropOpacity={.4}
            animationOutTiming={200}
            isVisible={isVisible}
            onBackdropPress={() => onClose()}>
            <View  style={styles.mainView}>
                <View style={styles.HeaderView}>
                    <TouchableOpacity onPress={onClose} >
                        <Ionicons color={"#fff"} name="close" size={scale(28)}  />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                            {title}
                    </Text> 
                </View>
                {children}
            </View>
        </Modal>
    )
} 

export default FormModal

const styles = StyleSheet.create({
    ModalView:{
        justifyContent:"flex-end",
        margin:0,
       
    },
    mainView:{
        justifyContent: 'center',
        backgroundColor:"#fff",
        alignItems:"center",
        elevation:10,
        overflow:"hidden",
        alignItems:"baseline",
        paddingBottom: verticalScale(16),
        borderTopLeftRadius: scale(10),
        borderTopRightRadius:scale(10)
    },
    HeaderView:{
        width:wp(100),
        paddingTop:scale(15),
        paddingBottom:scale(10),
        marginBottom:wp(5),
        alignSelf:"center", 
        alignItems:"center",
        backgroundColor:colors.dark_primary_color,
        flexDirection:"row"
    },
    headerText:{
        fontFamily:fonts.Medium,
        fontSize: scale(15),
        color:colors.white,
        marginLeft:scale(90)
    },
})