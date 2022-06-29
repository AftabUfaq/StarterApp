import React from 'react'
import { useAddReactionMutation } from '../../services/posts/postsSlice'
import { View,Text,TouchableOpacity,} from 'react-native';
import { textStyles} from '../../styles';
const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const [addReaction] = useAddReactionMutation()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <TouchableOpacity
                style={{justifyContent:"center", alignItems:"center", marginRight:10,}}
                key={name}
                onPress={() => {
                    const newValue = post.reactions[name] + 1;
                    addReaction({ postId: post.id, reactions: { ...post.reactions, [name]: newValue } })
                }}
            >
                <Text style={textStyles.Label} >{emoji} {post.reactions[name]}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <View style={{flexDirection:"row"}} >
            {
                reactionButtons
            }
        </View>
    )
}
export default ReactionButtons