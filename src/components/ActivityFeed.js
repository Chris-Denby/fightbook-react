import { StatusBar } from 'expo-status-bar';
import {View, FlatList, StyleSheet, Text, SafeAreaView} from 'react-native'
import Post from './Post.js'

const ActivityFeed = ({itemList}) => {
    return(
    <View style={styles.container}>
        <FlatList 
            contentContainerStyle={{alignItems: "stretch"}}
            data={itemList} 
            renderItem={({item}) =>
        <Post item={item}/>
    }/>
    </View>
    )   
}

// //THIS IS WORKING HERE - BUT NOT WHEN IMPORTED FROM ANOTHER FILE?
// const checkIfLiked = function(postId) {
//     return( postId > 0 ? true : false )
// }


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


export default ActivityFeed;