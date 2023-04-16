import React, {useState, useEffect, useContext} from "react";
import Signup from "./Signup";
import Login from './Login';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from "../../services/AuthContext";

type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
    Home: undefined;
  };

export default function AuthContainer(props: NativeStackScreenProps<RootStackParamList, 'Login'>): JSX.Element {
    const [signUp, setSignUp] = useState(false);
    const { route, navigation } = props;
    const { state, dispatch } = useContext(AuthContext);

    useEffect(() => {
        const checkAccess = async () => {
            const access = await SecureStore.getItemAsync('access_token');
            console.log(access);
            if (!access) {
                return;
            } else {
                navigation.navigate('Home');
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
            dispatch({type: "login"});
            navigation.navigate('Home');
        }
    };

    const toggleSignup = () => {
        setSignUp(!signUp);
    }

    return (
        signUp ? <Signup toggleSignup={toggleSignup} onSuccess={() => {handleLogin()}} /> : <Login toggleSignup={toggleSignup}  onSuccess={() => {handleLogin()}}/>
    )
}