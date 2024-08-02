
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRecoilState } from 'recoil';
import ActionButton from './ActionButton';
import { TextInput } from 'react-native-paper';

const PostCreator = (Props) => {

    const [postText, setPostText] = useState('');
    // const [postList, setPostList] = useRecoilState(ActivityFeedState)

    const onClickHandler =()=>{

    }

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Type here..."
                // onChangeText={setPostText()}
                multiline={true}
                maxLength={128}
                style={styles.input}
            />
            <ActionButton
                onClickHandler={setPostText}
                label="Post"
                style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "powderblue",
        width: "100%",
        height: "40%",
        display: "flex",
    },
    input: {
        flex: 4,
    },
    button: {
        flex: 1
    }
})

export default PostCreator