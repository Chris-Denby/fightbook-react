import {useState} from 'react';
import NotificationList from '../components/NotificationList';
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from "../components/PageHeader"

export default function NotificationsScreen() {

    const [tasks, setTasks] = useState([
        {
            id: 0,
            username: 'User',
            userId: 1,
            text: 'Chris\' Birthday',
            date: 'Jan 27th at 12:00pm',
            numLikes: 0 
        },
        {
            id: 1,
            username: 'User',
            userId: 1,
            text: 'Maynards Birthday',
            date: 'June 16th at 12:00pm',
            numLikes: 0 
        },
        {
            id: 2,
            username: 'User',
            userId: 1,
            text: 'Freyas Birthday',
            date: 'Dec 11th at 12:00pm',
            numLikes: 0 
        },
        {
            id: 3,
            username: 'User',
            userId: 1,
            text: 'Celestes Birthday',
            date: 'Jan 16th at 12:00pm',
            numLikes: 0 
          },
        {
          id: 4,
          username: 'User',
          userId: 1,
          text: 'Chris\' Birthday',
          date: 'Jan 27th at 12:00pm',
          numLikes: 0 
        },
        {
            id: 5,
            username: 'User',
            userId: 1,
            text: 'Maynards Birthday',
            date: 'June 16th at 12:00pm',
            numLikes: 0 
        },
        {
            id: 6,
            username: 'User',
            userId: 1,
            text: 'Freyas Birthday',
            date: 'Dec 11th at 12:00pm',
            numLikes: 0 
          },
        {
            id: 7,
            username: 'User',
            userId: 1,
            text: 'Celestes Birthday',
            date: 'Jan 16th at 12:00pm',
            numLikes: 0 
        },
        {
          id: 8,
          username: 'User',
          userId: 1,
          text: 'Chris\' Birthday',
          date: 'Jan 27th at 12:00pm',
          numLikes: 0 
      },
      {
          id: 9,
          username: 'User',
          userId: 1,
          text: 'Maynards Birthday',
          date: 'June 16th at 12:00pm',
          numLikes: 0 
      },
      {
          id: 10,
          username: 'User',
          userId: 1,
          text: 'Freyas Birthday',
          date: 'Dec 11th at 12:00pm',
          numLikes: 0 
      },
      {
          id: 11,
          username: 'User',
          userId: 1,
          text: 'Celestes Birthday',
          date: 'Jan 16th at 12:00pm',
          numLikes: 0 
      },
      {
        id: 12,
        username: 'User',
        userId: 1,
        text: 'Chris\' Birthday',
        date: 'Jan 27th at 12:00pm',
        numLikes: 0 
      }   
      ]);

      const title = 'Home';

    return(
        <View style={styles.container}>
            <PageHeader pageName='Notifications'/>
            <NotificationList
            itemList={tasks}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    }
  });