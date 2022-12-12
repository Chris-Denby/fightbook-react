import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PageHeader from "../components/PageHeader"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { currentUserState } from '../states/CurrentUserState'
import { firebaseConfig } from '../firebase/firebaseConfig';
import { initializeApp } from '@firebase/app';
import { useSetRecoilState } from 'recoil';

export default function SignInScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const setUserRecoilState = useSetRecoilState(currentUserState);

    const onSignInPress = () => {
        // signInWithEmailAndPassword(auth, "tehownerort00l@gmail.com", "111111")
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                name: userCredential.user.displayName,
            }
            //set the usermrecoil state
            setUserRecoilState(user);
            navigation.navigate('Home');
            })
        .catch((error)=>{
            alert(error)
        });
    };

    const onRegisterFooterPress = () => {
        //TO DO: When the login link is pressed
        navigation.navigate('Register')
    };

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
            <PageHeader pageName='Sign In'/>
            <KeyboardAwareScrollView style= {{flex:1, width:'100%'}} keyboardShouldPersistTaps="always">
            <View style={styles.form_container}>
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
                <TouchableOpacity style={styles.button} onPress={onSignInPress}>
                        <Text style={styles.buttonTitle}>Sign in</Text>
                </TouchableOpacity>
                <View styles={styles.footerView}>
                    <Text styles={styles.footerText} 
                    onPress={onRegisterFooterPress}>
                        Dont have an account? Sign up here
                    </Text>
                </View>
            </View>
            </KeyboardAwareScrollView>
        </View>
    )
}