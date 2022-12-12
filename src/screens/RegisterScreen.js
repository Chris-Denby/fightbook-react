import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import PageHeader from "../components/PageHeader"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref, set } from 'firebase/database'
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase/firebaseConfig';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../states/CurrentUserState';

export default function RegisterScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase();
    const setUserRecoilState = useSetRecoilState(currentUserState);

    const onRegisterPress = () => {
        if(password !== confirmPassword) {
            alert("Passwords must match")
            return
        }
        //create user in firebase auth
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
                //do when promise is returned
                const user = {
                    uid: userCredential.user.uid,
                    email: email,
                    name: fullName,
                }
                //set the usermrecoil state
                setUserRecoilState(user);
                // store user data in firestore 
                set(ref(database, 'Users/' + user.uid), user);
                //once user created - navigate to home screen
                //with payload of user data to home screen
                navigation.navigate('Home')
            }).catch((error)=> {
            alert(error)
        })
    }

    const onSignInFooterPress = () => {
        //TO DO: When the login link is pressed
        navigation.navigate('SignIn')
    }

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#4c4c4c',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
        },
        form_container: {
            flex: 1,
            backgroundColor: '#4c4c4c',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            height: 48,
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 16
        },
        button: {
            backgroundColor: '#788eec',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            height: 48,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: 'center'
        },
        buttonTitle: {
            color: 'white',
            fontSize: 16,
            fontWeight: "bold"
        },
        footerView: {
            flex: 1,
            alignItems: "center",
            marginTop: 20
        },
        footerText: {
            fontSize: 16,
            color: '#2e2e2d'
        },
        footerLink: {
            color: "#788eec",
            fontWeight: "bold",
            fontSize: 16
        }
    });

    return(
        <View style={styles.container}>
            <PageHeader pageName='Sign Up'/>
            <KeyboardAwareScrollView style= {{flex:1, width:'100%'}} keyboardShouldPersistTaps="always">
            <View style={styles.form_container}>
                <TextInput
                style={styles.input}
                placeholder='Full name'
                placeholderTextColor='#aaaaaa'
                autoCapitalize='none'
                value={fullName}
                onChangeText={(text) => setFullName(text)}
                />
                <TextInput
                style={styles.input}
                placeholder='Email address'
                placeholderTextColor='#aaaaaa'
                autoCapitalize='none'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor='#aaaaaa'
                autoCapitalize='none'
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                style={styles.input}
                placeholder='Confirm password'
                placeholderTextColor='#aaaaaa'
                autoCapitalize='none'
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={()=>onRegisterPress()}>
                        <Text style={styles.buttonTitle}>Sign up</Text>
                </TouchableOpacity>
                <View  styles={styles.footerView}>
                    <Text styles={styles.footerText} 
                    onPress={onSignInFooterPress}>
                        Already have an account? Sign in here
                    </Text>
                </View>
            </View>
            </KeyboardAwareScrollView>
        </View>
    )
}