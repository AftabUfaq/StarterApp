import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns';
import { View,Text } from 'react-native';
import { textStyles} from '../../styles';
const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <View>
            <Text style={textStyles.Label}>{timeAgo}</Text>
        </View>
    )
}
export default TimeAgo