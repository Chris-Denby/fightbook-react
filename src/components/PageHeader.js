import { StyleSheet, Text, View } from 'react-native';


const PageHeader = (props) => {
    return(
        <View style={styles.container}>
            {/* <Text style={styles.text}>{props.pageName}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: '100%',
        height: 100,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default PageHeader