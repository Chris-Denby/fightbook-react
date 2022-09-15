import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import PageHeader from "../../components/PageHeader"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/firebaseConfig'

export default function ChallengeScreen(){

    return (
        <View style={styles.container}>
            
            

        </View>
    )
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
