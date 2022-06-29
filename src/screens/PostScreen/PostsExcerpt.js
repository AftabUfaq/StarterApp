import React from 'react'
import PostAuthor from "./PostAuthor";0
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { View,Text,TouchableOpacity,} from 'react-native';
import { textStyles} from '../../styles';
import { useSelector } from "react-redux";
import { selectPostById } from "../../services/posts/postsSlice";
import { scale } from 'react-native-size-matters';
import { AppScreenWidth } from '../../constants/sacling';
import { useNavigation } from '@react-navigation/native';
const PostsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))
    const navigation = useNavigation();
    return (
        <View style={{
            padding:scale(10),
            width:AppScreenWidth,borderColor:"rgba(0,0,0,.5)",
            alignSelf:"center", borderWidth:1,borderRadius:scale(10), marginVertical:scale(10)}}>
            <Text style={textStyles.smallheading}>{post.title}</Text>
            <Text  style={{...textStyles.disabletext,textAlign:"left", fontSize: scale(12)}}>{post.body.substring(0, 65)} ...</Text>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={() => navigation.navigate("SinglePostPage",{postId:postId})}>
                    <Text style={{...textStyles.Label, marginRight:10}}>
                        View Post 
                    </Text>
                </TouchableOpacity>
                <PostAuthor userId={post.userId} /> 
            </View>
            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post} />
        </View>
    )
}

export default PostsExcerpt