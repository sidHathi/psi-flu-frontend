import React, { useState, useEffect } from 'react';
import { login, logout, register } from '../../services';
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import styles from './login-styles';
import { Button, Card, TextInput } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';

interface LoginProps {
    toggleSignup: () => void;
    onSuccess: () => void;
}

export default function Login(props: LoginProps) : JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { toggleSignup, onSuccess } = props;

    const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(e.nativeEvent.text);
    };

    const onChangePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(e.nativeEvent.text);
    }

    const handleSubmit = async () => {
        login(email, password).then(
            () => onSuccess()
        ).catch(err => {
            console.log(err);
        });
    }

    const handleModeSwitch = async () => {
        toggleSignup();
    }

    return <View style={styles.loginContainer}>
        <Card style={[styles.loginCard, { shadowOpacity: 0.05 }]}>
            <Text style={styles.loginHeader}>
                Log In
            </Text>

            <TextInput
                style={styles.authInput}
                onChange={onChangeEmail}
                value={email}
                keyboardType='visible-password'
                autoCapitalize='none'
                autoComplete='email'
                placeholder="email"
                underlineColor='transparent'
            />
            <TextInput
                style={styles.authInput}
                onChange={onChangePass}
                value={password}
                keyboardType='visible-password'
                secureTextEntry
                placeholder="password"
                underlineColor='transparent'
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
            >Sign up</Button>
        </Card>
    </View>
}