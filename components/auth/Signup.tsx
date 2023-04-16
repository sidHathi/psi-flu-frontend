import React, {useState, useEffect} from "react";
import { Button, Card, TextInput } from 'react-native-paper';
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { login, logout, register } from '../../services';
import styles from "./login-styles";

interface SignupProps {
    toggleSignup: () => void;
    onSuccess: () => void;
}

export default function Signup(props: SignupProps): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("");
    const { toggleSignup, onSuccess } = props;

    const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(e.nativeEvent.text);
    };

    const onChangePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(e.nativeEvent.text);
    };

    const onChangeConfirmPass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setConfirmPass(e.nativeEvent.text);
    }

    const handleSubmit = async () => {
        register(email, password, confirmPass)
        .then(
            () => onSuccess()
        ).catch(err => {
            console.log(err);
        })
    }

    const handleModeSwitch = async () => {
        toggleSignup();
    }

    return <View style={styles.loginContainer}>
        <Card style={styles.loginCard}>
            <Text style={styles.loginHeader}>
                Sign up
            </Text>

            <TextInput
                style={styles.authInput}
                onChange={onChangeEmail}
                value={email}
                keyboardType='visible-password'
                autoCapitalize='none'
                autoComplete='email'
                placeholder="email"
            />
            <TextInput
                style={styles.authInput}
                onChange={onChangePass}
                value={password}
                keyboardType='visible-password'
                secureTextEntry
                placeholder="password"
            />
            <TextInput
                style={styles.authInput}
                onChange={onChangeConfirmPass}
                value={confirmPass}
                keyboardType='visible-password'
                secureTextEntry
                placeholder="confirm password"
            />

            <Button
                style={styles.authSubmit}
                onPress={() => {
                    handleSubmit()
                }}
                mode="contained"
            >Submit</Button>

            <Button 
                style={styles.switchMode}
                onPress={() => handleModeSwitch()}
            >Log in</Button>
        </Card>
    </View>
}