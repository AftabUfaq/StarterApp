import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from '../../services/posts/postsSlice'
import { selectAllUsers } from "../../services/users/usersSlice";
import { useUpdatePostMutation, useDeletePostMutation  } from "../../services/posts/postsSlice";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import {commonStyles, textStyles} from '../../styles';
  import {AppScreenWidth, width} from '../../constants/sacling';
  import {scale} from 'react-native-size-matters';
  import CustomButton from '../../components/Button';
  import CustomHeader from '../../components/CustomHeader';
  import CustomTextInput from '../../components/TextInput';
import Spacer from '../../components/Spacer';
const EditPostForm = ({navigation, route}) => {
    const { postId } = route.params
    const [updatePost, { isLoading }] = useUpdatePostMutation()
    const [deletePost] = useDeletePostMutation()
    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const users = useSelector(selectAllUsers)
  
    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)

    if (!post) {
        return (
            <View>
                <Text style={textStyles.errorText} >Post not found!</Text>
            </View>
        )
    }

    const canSave = [title, content, userId].every(Boolean) && !isLoading;

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                await updatePost({ id: post.id, title, body: content, userId }).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigation.navigate("SinglePostPage",{postId})
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

    const onDeletePostClicked = async () => {
        try {
            await deletePost({ id: post.id }).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigation.navigate("PostsList")
        } catch (err) {
            console.error('Failed to delete the post', err)
        }
    }

    return (
        <View style={commonStyles.container}>
            <CustomHeader 
                title={"Edit Post"}
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
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    errorMessage={""}
                />
                 <CustomTextInput
                    placeholder={"Enter content"}
                    value={content}
                    onChangeText={value => setContent(value)}
                    errorMessage={""}
                />
               {usersOptions}
               <Spacer />
               <Spacer />
                <CustomButton
                    onPress={() => onSavePostClicked()}
                    loading={isLoading}
                    text={'Edit Post'}
                    loadingText={'Processing'}
                />
                <Spacer />
                <Spacer />
                <CustomButton
                    onPress={() => onDeletePostClicked()}
                    loading={isLoading}
                    text={'Delete Post'}
                    loadingText={'Processing'}
                />
                <Spacer />
            </ScrollView>
        </View>  
    )
}

export default EditPostForm