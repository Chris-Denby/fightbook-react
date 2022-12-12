import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { default as HomeScreen } from './src/screens/HomeScreen';
import { default as NotificationsScreen } from './src/screens/NotificationsScreen';
import { default as RegisterScreen } from './src/screens/RegisterScreen';
import { default as SignInScreen } from './src/screens/SignInScreen';
import { default as ProfileScreen } from './src/screens/ProfileScreen/ProfileScreen'
import { RecoilRoot } from 'recoil'; 
import { Text } from 'react-native';
import { useEffect } from 'react';

  //https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  
  return (
    <RecoilRoot>
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Register" backBehavior='history'>
          {/* <Tab.Screen name="Profile" component={ProfileScreen}/> */}
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Events" component={NotificationsScreen}/>
          <Tab.Screen name="Sign In" component={SignInScreen} />
          <Tab.Screen name="Register" component={RegisterScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}