import { StyleSheet, Text, View, Image, Button } from 'react-native';
import LikeButton from './LikeButton'

const Post = (props) => {
    return(
    <View style={styles.container}>
        <View style={styles.postHeader}>
            <Image source={require('../../images/10.png')} style={styles.avatar} />
            <View style={styles.container_text}>
                <Text>bla</Text>
                <Text style={styles.title}>{props.item.eventText}</Text>
            </View>
        </View>
        <Image source={'../../images/'+props.item.id+'.png'} style={styles.photo} />
        {/* <PostSummaryBar/> */}
        <ButtonBar item={props.item}/>
    </View>
    )
}

const ButtonBar = (props) => {
    return (
        <View style={styles.buttonBar}>
            <LikeButton numLikes={props.item.likesCount} liked={props.liked} onPress={onLikePress}/>
        </View>
    )
}

const onLikePress = () => {
    alert("Click")
}

const PostSummaryBar = () => {
    return (
        <View>
            <Text>Post summary goes here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginLeft:5,
        marginRight:5,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        elevation: 2,
        backgroundColor: '#ffffff',
        // width: "100%"
    },
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        marginBottom: 10,
    },
    buttonBar: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    date: {
        fontSize: 8,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
    description: {
        fontSize: 14,
    },
    photo: {
        height: 200,
        width: '100%',
        backgroundColor: '#e5e5e5',
    },
    avatar: {
        height: 50,
        width: 50,
    }
});

export default Post;