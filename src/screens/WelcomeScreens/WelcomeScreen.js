import React from 'react';
import { SafeAreaView,View,StyleSheet,Text} from 'react-native';
import { commonStyles,textStyles } from '../../styles';
import CustomButton from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import { AuthRoutes } from '../../constants/routes';
import { scale } from 'react-native-size-matters';
    const WelcomeScreen = ({navigation}) => {
        return (
            <View style={commonStyles.container} >
                <CustomHeader 
                    show_backButton={true}
                    isdrawer={true}
                    onPress={() => navigation.openDrawer()}
                    title={"Time Sheet"}
                />
            </View>
        );
    };


export default WelcomeScreen;
