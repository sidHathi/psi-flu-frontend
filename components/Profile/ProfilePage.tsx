import React, {useState, useEffect} from "react";
import usersApi from "../../services/usersApi";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as SecureStore from 'expo-secure-store';
import User from "../../types/user_resp";
import { View, Text } from "react-native";
import styles from "./profile-styles";
import { logout } from "../../services";
import { Button } from "react-native-paper";

type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
  };

export default function ProfilePage(props: NativeStackScreenProps<RootStackParamList, 'Profile'>): JSX.Element {
    const { navigation } = props;
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
      const checkAccess = async () => {
        if (await SecureStore.getItemAsync('access_token') === undefined) {
          navigation.navigate('Login');
        }
      }
      checkAccess();
    }, [SecureStore, navigation]);

    useEffect(() => {
        if (user !== undefined) {
            return;
        }

        const fetchUser = async () => {
            setUser(await usersApi().getMe());
        };
        fetchUser();
    }, [navigation, setUser, user]);


    return <View style={styles.profileContainer}>
        <>
        {user !== undefined &&
            (<Text>
                {`${user.email}\n${JSON.stringify(user.symptoms)}`}
            </Text>)
        }

        <Button 
            onPress={() => {
                logout();
                navigation.navigate('Login');
        }}>log out</Button>
        </>
    </View>
}