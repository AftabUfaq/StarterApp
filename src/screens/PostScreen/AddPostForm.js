
import React, {useState} from 'react';
import { useSelector } from "react-redux";

import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {commonStyles, textStyles} from '../../styles';
import {AppScreenWidth, width} from '../../constants/sacling';
import {scale} from 'react-native-size-matters';
import CustomButton from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import { selectAllUsers } from "../../services/users/usersSlice";
import { useAddNewPostMutation } from "../../services/posts/postsSlice";
import CustomTextInput from '../../components/TextInput';
import Spacer from '../../components/Spacer';
const AddPostForm = ({navigation}) => {
    const [addNewPost, { isLoading }] = useAddNewPostMutation()
  
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const users = useSelector(selectAllUsers)
    const onTitleChanged = e => setTitle(e)
    const onContentChanged = e => setContent(e)
   
    const canSave = [title, content, userId].every(Boolean) && !isLoading;
    
    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                await addNewPost({ title, body: content, userId }).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    const usersOptions = users.map(user => (
        <TouchableOpacity 
            style={{width:AppScreenWidth,borderWidth:1,borderRadius:10, marginTop:scale(10), height:50, alignItems:"center", justifyContent:"center"}}
            key={user.id} onPress={() => setUserId(user.id) }>
           <Text style={textStyles.Label}> {user.name}</Text>
        </TouchableOpacity>
    ))

    return (
        <View style={commonStyles.container}>
            <CustomHeader 
                title={"Add Post"}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: '#fff',
                    flexGrow: 1,
                    alignItems: 'center',
                }}>
                <CustomTextInput
                    placeholder={"Enter title"}
                    value={content}
                    onChangeText={onTitleChanged}
                    errorMessage={""}
                />
                 <CustomTextInput
                    placeholder={"Enter content"}
                    value={title}
                    onChangeText={onContentChanged}
                    errorMessage={""}
                />
               {usersOptions}
               <Spacer />
               <Spacer />
                <CustomButton
                    onPress={() => onSavePostClicked()}
                    loading={isLoading}
                    text={'Add Post'}
                    loadingText={'Processing'}
                />
                <Spacer />
            </ScrollView>
        </View>  
    )
}
export default AddPostForm