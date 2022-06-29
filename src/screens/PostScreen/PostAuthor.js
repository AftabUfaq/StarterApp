import React from 'react'
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../services/users/usersSlice";
import {View,Text} from 'react-native';
import { textStyles} from '../../styles';
const  PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)
    return(
        <Text style={textStyles.Label} >by {author ? author.name : "unknow"}</Text>
    )
}
export default PostAuthor