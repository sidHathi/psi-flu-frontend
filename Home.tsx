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
import { Button } from 'react-native-paper';
import aggregatesApi from './services/aggregatesApi';

type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
    Edit: {user: User};
    Home: undefined;
  };


const HomeScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'Profile'>) => {
    const { state, dispatch } = useContext(AuthContext);
    const [user, setUser] = useState<User | undefined>(undefined);

    // to use api -> call await aggregatesApi().method similar to how usersApi is used in this file

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
                 return
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

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

            <Text style={styles.Text}>Home</Text>


            <GraphComp open={true} />
            <CommonSymptoms open={true} />
            <View style={{width: '100%'}}>
                <Button style={styles.editButton}
                    onPress={() => {openEdit()}}>
                    <Text style={{color: "white", fontWeight: 'bold'}}>
                        Update Symptoms +
                    </Text>
                </Button>
            </View>
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
    },
    editButton: {
        textAlign: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 30,
        height: 40,
        backgroundColor: '#A243E0',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 30,
        width: 'auto'
    },
  });

export default HomeScreen;