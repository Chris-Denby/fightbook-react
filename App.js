import { Text, NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { default as HomeScreen } from './src/screens/HomeScreen';
import { default as NotificationsScreen } from './src/screens/NotificationsScreen';
import { default as RegisterScreen } from './src/screens/RegisterScreen';
import { default as SignInScreen } from './src/screens/SignInScreen';
import { firebaseConfig } from './src/firebase/firebaseConfig';
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  //https://docs.expo.dev/guides/using-firebase/
  const app = initializeApp(firebaseConfig)

  // const database = getDatabase(app)

  return (
    //https://reactnavigation.org/docs/material-bottom-tab-navigator
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Sign In" backBehavior='history'>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Events" component={NotificationsScreen}/>
        {/* <Tab.Screen name="Register" children={()=> <RegisterScreen firebaseApp={firebaseApp}/>}/> */}
        <Tab.Screen name="Sign In" component={SignInScreen}/>
        <Tab.Screen name="Register" component={RegisterScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}