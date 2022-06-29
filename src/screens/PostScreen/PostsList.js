import React from 'react'
import { useSelector } from "react-redux";
import { selectPostIds } from "../../services/posts/postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from './../../services/posts/postsSlice';
import {ScrollView, View,Text,TouchableOpacity,} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {commonStyles, textStyles} from '../../styles';
const PostsList = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    const orderedPostIds = useSelector(selectPostIds)

    let content;
    if (isLoading) {
        content = <Text style={textStyles.heading}>Loading ...</Text>
    } else if (isSuccess) {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <Text style={textStyles.errorText}>Error in geting data</Text>
    }

    return (
        <View style={commonStyles.container}>
            <CustomHeader 
                title={"All Posts"}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: '#fff',
                    flexGrow: 1,
                    alignItems: 'center',
                }}>
        
                {content}
            </ScrollView>
        </View>
    )
}
export default PostsList