
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import ScoreInputButton from './ScoreInputButton';

const scoreInputPanel = () => {
    <View>
        <ScoreInputButton target="head"/>
        <ScoreInputButton target="torso"/>
        <ScoreInputButton target="limb"/>
    </View>
}