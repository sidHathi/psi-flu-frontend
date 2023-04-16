import React, {useState, useEffect} from "react";
import Signup from "./Signup";
import Login from './Login';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';

type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
  };

export default function AuthContainer(props: NativeStackScreenProps<RootStackParamList, 'Login'>): JSX.Element {
    const [signUp, setSignUp] = useState(false);
    const { route, navigation } = props;

    useEffect(() => {
        const checkAccess = async () => {
            const access = await SecureStore.getItemAsync('access_token');
            console.log(access);
            if (!access) {
                return;
            } else {
                navigation.navigate('Profile');
            }
        }

        checkAccess();
    }, [navigation, SecureStore]);

    const handleLogin = async () => {
        const access = await SecureStore.getItemAsync('access_token');
        console.log(access);
        if (!access) {
            return;
        } else {
            navigation.navigate('Profile');
        }
    };

    const toggleSignup = () => {
        setSignUp(!signUp);
    }

    return (
        signUp ? <Signup toggleSignup={toggleSignup} onSuccess={() => {handleLogin()}} /> : <Login toggleSignup={toggleSignup}  onSuccess={() => {handleLogin()}}/>
    )
}