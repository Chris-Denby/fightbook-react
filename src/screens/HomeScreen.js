import { useEffect, useInsertionEffect, useState, useTransition} from 'react';
import ActivityFeed from "../components/ActivityFeed"
import { Alert, StyleSheet, Text, View } from 'react-native';
import PageHeader from "../components/PageHeader"
import { getDatabase, ref, onValue } from "firebase/database"
import { useRecoilValue, useRecoilState } from 'recoil';
import { currentUserState } from '../states/CurrentUserState';
import { activityFeedState } from '../states/ActivityFeedState'
import { AuthCredential, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useFocusEffect } from '@react-navigation/native';
import PostCreator from '../components/PostCreator';

export default function HomeScreen({navigation}) {

    const auth = getAuth();
    const database = getDatabase();
    // const user = auth.currentUser;
    let currentUser = useRecoilValue(currentUserState);

    //change to postsArray triggers re-render
    const [postsArray, setPostsArray]= useState();

    //do when page renders
    useEffect(()=>{
        if(currentUser) {
            getPosts();
        }
    },[currentUser]);

    // //do when page comes in to focus
    // https://reactnavigation.org/docs/function-after-focusing-screen/
    // useFocusEffect(() => {
    //     //do something

    // },[]);
    
    const getPosts = () => {
        const postsRef = ref(database, 'Events/'+currentUser.uid);  
        const retrievedPosts = [];
        alert(currentUser.email)
        onValue(postsRef, (snapshot) => {
            //to happen everytime the snapshot val and its children change
            snapshot.forEach((post) => {
                retrievedPosts.push(
                    {
                        commentsCount: post.child('commentsCount').val(),
                        createdById: post.child('createdById').val(),
                        createByNickname: post.child('createdByNickname').val(),
                        dateCreated: post.child('dateCreated').val(),
                        eventText: post.child('eventText').val(),
                        likesCount: post.child('likesCount').val(),
                        nodeID: post.child('nodeID').val(),
                        photoPath: post.child('photoPath').val(),
                        userBID: post.child('userBID').val(),
                        userBNickName: post.child('userBNicknName').val(),
                    }
                );
            });
            setPostsArray(retrievedPosts);
        });
    };

    return(
        <View style={styles.container}>
            <PageHeader pageName='Activity'/>
            <PostCreator/>
            <ActivityFeed itemList={postsArray}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   backgroundColor: '#4c4c4c',
      width: "100%"
    }
  });