import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const LikeButton = (props) => {

    //neact native icons library
    //https://github.com/oblador/react-native-vector-icons#android

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.liked ? [styles.button, styles.button_liked] : [styles.button, styles.button_notLiked] }>
                <FontAwesomeIcon name="heart" size={15} color="#ffffff"/>
                <Text style={styles.buttonText}>   {props.numLikes}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft:0,
        marginRight:0,
        marginTop: 10,
        marginBottom: 0,
        borderRadius: 25,
    },
    button_liked: {
        backgroundColor: "red",
    },
    button_notLiked: {
        backgroundColor: "grey",
    },
    buttonText: {
        color: "white",
        fontSize: 15
    }
});

export default LikeButton