import React from "react";
import {View, StyleSheet, Button} from 'react-native'

const ActionButton = ({onClickHandler, label})=> {
    return(
        <View>
            <Button
            style={styles.button}
            onPress={onClickHandler}
            title={label}/>
        </View>
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
        backgroundColor: 'blue',
        fontSize: 8,
    },
});


export default ActionButton;