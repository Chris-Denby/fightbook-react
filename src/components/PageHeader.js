import { StyleSheet, Text, View } from 'react-native';


const PageHeader = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.pageName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'red',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        paddingTop: 50,
        paddingLeft: 20,
    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
    },
});

export default PageHeader