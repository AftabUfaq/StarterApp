import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import SplashScreen from '../screens/WelcomeScreens/SplashScreen';
import AddPostForm from '../screens/PostScreen/AddPostForm';
import SinglePostPage from '../screens/PostScreen/SinglePostPage';
import EditPostForm from '../screens/PostScreen/EditPostForm';
import PostsList from '../screens/PostScreen/PostsList';
import { scale } from 'react-native-size-matters';
import { colors, fonts } from '../constants/theme';
const Stack = createNativeStackNavigator();
const options = { 
    title: 'Welcome',
    
    headerStyle: {
        backgroundColor:colors.dark_primary_color,
    },
    headerTintColor:colors.text_primary_color,
        headerTitleStyle: {
            fontSize:scale(18),
            color:colors.white,
            
            fontFamily:fonts.Bold
        }, 
}
const ReduxStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='SplashScreen'
        >
             <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{headerShown:false}}
            />
           
            <Stack.Screen 
                name="AddPostForm" 
                component={AddPostForm} 
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="SinglePostPage" 
                component={SinglePostPage} 
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="EditPostForm" 
                component={EditPostForm} 
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="PostsList" 
                component={PostsList} 
                options={{headerShown:false}}
            />

        </Stack.Navigator>
    )
}

export default ReduxStack