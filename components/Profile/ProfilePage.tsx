import React, {useState, useEffect, useContext} from "react";
import usersApi from "../../services/usersApi";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as SecureStore from 'expo-secure-store';
import User from "../../types/user_resp";
import { View, Text } from "react-native";
import styles from "./profile-styles";
import { logout } from "../../services";
import { Button } from "react-native-paper";
import { AppBar } from "../AppBar/AppBar";
import { AuthContext } from "../../services/AuthContext";
import { AxiosError } from "axios";
import { ProfileSymptoms } from "./ProfileSymptoms";

type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
    Edit: {user: User};
    Home: undefined;
  };

export default function ProfilePage(props: NativeStackScreenProps<RootStackParamList, 'Profile'>): JSX.Element {
    const { navigation } = props;
    const [user, setUser] = useState<User | undefined>(undefined);
    const { state, dispatch } = useContext(AuthContext);

    useEffect(() => {
      const checkAccess = async () => {
        if (await SecureStore.getItemAsync('access_token') === undefined) {
          navigation.navigate('Login');
          dispatch({type: 'logout'});
        } else {
          dispatch({type: 'login'});
        }
      }
      checkAccess();
    }, [SecureStore, navigation]);

    useEffect(() => {
        if (user !== undefined) {
            return;
        }
        if (!state.authenticated) {
            navigation.navigate('Login');
            return;
        }

        const fetchUser = async () => {
            try {
                setUser(await usersApi().getMe());
            } catch (err) {
                navigation.navigate('Login');
                dispatch({type: 'logout'});
            }
        };
        fetchUser();
    }, [navigation, setUser, user, state]);


    const openEdit = () => {
        navigation.navigate('Edit', {user: user});
    }

    return <>
        <View style={styles.profileContainer}>
        <Text style={styles.profileHeader}>Profile</Text>
        {user !== undefined &&
            <ProfileSymptoms user={user} openEdit={openEdit}/>
        }

        <Button 
            onPress={() => {
                logout();
                navigation.navigate('Login');
        }}
        style={styles.logOutButton}>log out</Button>
    </View>
    <AppBar open={true} navigation={navigation}/></>
}