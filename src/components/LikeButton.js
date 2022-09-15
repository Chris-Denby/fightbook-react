import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const LikeButton = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.liked ? [styles.button, styles.button_liked] : [styles.button, styles.button_notLiked] }>
                <Text style={styles.buttonText}>Like{props.numLikes}</Text>
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
    button_liked: {
        backgroundColor: "red",
    },
    button_notLiked: {
        backgroundColor: "grey",
    },
    buttonText: {
        color: "white",
        fontSize: 10
    }
});

export default LikeButton