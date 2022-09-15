import {useEffect, useInsertionEffect, useState} from 'react';
import ActivityFeed from "../components/ActivityFeed"
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from "../components/PageHeader"
import { getDatabase, ref, onValue } from "firebase/database"
import { testData } from '../components/testData';

export default function HomeScreen({route, navigation}) {

    const { userId, email } = route.params
    // alert(email)

    const database = getDatabase();
    const postsRef = ref(database, 'path to data')
    const [posts, setPosts] = useState([]);
    const retrievedDataArray = [];
    //on value change listener recieves a snapshot that contains
    //the data at the specified location in the database
    //at the time of the event
    //data can be retrieved from the snapshot with val()
    onValue(postsRef, (snapshot) => {
        const currentData = snapshot.forEach(topLevelObject => {
            topLevelObject.forEach(post => {
                retrievedDataArray.push(post)
            })
        });                                   
    })
    
    const title = 'Home';

    return(
        <View style={styles.container}>
            <PageHeader pageName='Activity'/>
            <ActivityFeed 
            itemList={testData}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4c4c4c',
      // alignItems: 'center',
      // justifyContent: 'center',
    }
  });