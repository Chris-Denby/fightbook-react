
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-paper';

const scoreInputButton = (props) => {
<TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>{props.target}</Text>
    </View>
</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginLeft:0,
        marginRight:0,
        marginTop: 10,
        marginBottom: 0,
        borderRadius: 25,
        backgroundColor: "blue",
    },
    buttonText: {
        color: "white",
        fontSize: 10
    }
});

export default scoreInputButton