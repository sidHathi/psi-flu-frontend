import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CommonSymptoms } from './components/CommonSymptoms/CommonSymptoms';
import React, { useState, useEffect, useContext } from 'react';
import { AppBar } from './components/AppBar/AppBar';
import { GraphComp } from './components/GraphComp/GraphComp';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import GlobalStyles from './components/GlobalStyles';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from './services/AuthContext';
import User from './types/user_resp';
import usersApi from './services/usersApi';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
    Edit: {user: User};
    Home: undefined;
  };


const HomeScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'Profile'>) => {
    const { state, dispatch } = useContext(AuthContext);
    const [user, setUser] = useState<User | undefined>(undefined);

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

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

            <Text style={styles.Text}>Home</Text>


            <GraphComp open={true} />
            <CommonSymptoms open={true} />
            <AppBar open={true} navigation={navigation} />
        </SafeAreaView>
        </SafeAreaProvider>
    );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    Text: {
      ...GlobalStyles.Text,
      color: '#000000',
      fontSize: 38,
      paddingTop: 40,
      paddingLeft: 30,
      alignSelf: 'flex-start'
    },
    HeaderBox: {
  
      bottom: 0,
      alignItems: 'flex-start',
      height: 60
    }
  });

export default HomeScreen;