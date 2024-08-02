import { StatusBar } from 'expo-status-bar';
import {View, FlatList, StyleSheet, Text, Button, Image} from 'react-native'
import ActionButton from './ActionButton';

const NotificationList = ({itemList}) => {
    return(
    <View style={styles.container}>
        <FlatList 
            contentContainerStyle={{alignItems: "stretch"}}
            data={itemList} 
            renderItem={({item}) =>
        <Notification 
        item={item}
        // liked={checkIfLiked(item.id)}
        />
    }/>
    </View>
    )   
}

const Notification = (props) => {
    return(
    <View style={notificationStyles.container}>
    <Image source={require('../../images/10.png')} style={notificationStyles.avatar} />
        <View style={notificationStyles.postHeader}>
            <View style={notificationStyles.container_text}>
                <Text style={notificationStyles.title}>{props.item.username}</Text>
                <Text style={notificationStyles.description}>{props.item.text}</Text>
                <Text style={notificationStyles.date}>{props.item.date}</Text>
            </View>
        </View>
        <ButtonBar style={notificationStyles.buttonBar} id={props.item.id}/>
    </View>
    )
}

const ButtonBar = (id) => {
    return(
        <View>
            <ActionButton
            onClickHandler={acceptChallenge({id})}
            label="Accept"/>
        </View>
    )
}

function acceptChallenge (notificationId) {
    //TO DO: accept challenge by id
    
}

const notificationStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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
    avatar: {
        height: 50,
        width: 50,
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        // width: "100%",
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20
    },
    title: {
        fontSize: 18
    }
});


export default NotificationList;