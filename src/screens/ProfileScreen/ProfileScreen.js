import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function ProfileScreen(route){
    const { userId, email } = route.params
    const currentUserId = 0;

    return(
        <View>
            <Image source={'../../images/'+props.item.id+'.png'} style={styles.photo} />
            <Text>Username</Text>
            <Text>Location</Text>
            <Text>Followers</Text>
            {!userId == currentUserId ? <View><FollowButton/><ChallengeButton/></View> : null}
        </View>
        )
}

const FollowButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.followed ? [styles.button, styles.button_followed] : [styles.button, styles.button_notFollowed] }>
                <Text style={styles.buttonText}>{props.followed ? 'Unfollow' : 'Follow'}</Text>
            </View>
        </TouchableOpacity>
    )
}

const ChallengeButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.challenged ? [styles.button, styles.button_challenged] : [styles.button, styles.button_notChallenged] }>
                <Text style={styles.buttonText}>{props.followed ? 'Unchallenge' : 'Challenge'}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginLeft:0,
        marginRight:0,
        marginTop: 10,
        marginBottom: 0,
        borderRadius: 25,
    },
    button_challenged: {
        backgroundColor: "red",
    },
    button_notChallenged: {
        backgroundColor: "grey",
    },
    button_followed: {
        backgroundColor: "red",
    },
    button_notFollowed: {
        backgroundColor: "grey",
    },
    buttonText: {
        color: "white",
        fontSize: 10
    }
});