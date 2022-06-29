import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from '../../services/posts/postsSlice'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { View,Text,TouchableOpacity,} from 'react-native';
import { textStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { scale } from 'react-native-size-matters';
import { AppScreenWidth } from '../../constants/sacling';
const SinglePostPage = ({navigation, route}) => {
    const { postId } = route.params
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    
    if (!post) {
        return (
            <View>
                <Text style={textStyles.errorText} >Post not found!</Text>
            </View>
        )
    }

    return (
        <View>
            <CustomHeader 
                title={"Post View"}
            />
            <View 
                style={{
                    padding:scale(10),
                    width:AppScreenWidth,
                    borderColor:"rgba(0,0,0,.5)",
                    alignSelf:"center",
                    borderWidth:1,
                    borderRadius:scale(10), 
                    marginVertical:scale(10)
                }}>
                <Text style={textStyles.heading}>{post.title}</Text>
                <Text style={textStyles.Label}>{post.body}</Text>
                <View className="postCredit">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("EditPostForm",{postId:postId})}
                        >
                        <Text style={textStyles.errorText}>
                            Edit Post
                        </Text>
                    </TouchableOpacity>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </View>
                <ReactionButtons post={post} />
            </View>
        </View>
    )
}

export default SinglePostPage