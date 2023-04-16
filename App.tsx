import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CommonSymptoms } from './components/CommonSymptoms/CommonSymptoms';
import React, {useState, useEffect} from 'react';
import AuthContainer from './components/auth/AuthContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import { logout } from './services';
import * as SecureStore from 'expo-secure-store';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


export type RootStackParamList = {
  Profile: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function PlaceHolder(props: NativeStackScreenProps<RootStackParamList, 'Home'>): JSX.Element {
  const { navigation } = props;

  useEffect(() => {
    const checkAccess = async () => {
      if (await SecureStore.getItemAsync('access_token') === undefined) {
        navigation.navigate('Profile');
      }
    }
    checkAccess();
  }, [SecureStore, navigation]);

  return <View>
    <Text>
      placeholder
      <Button onPress={() => {
        logout();
        navigation.navigate('Profile');
      }}>log out</Button>
    </Text>
  </View>
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Profile" 
        component={AuthContainer} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={PlaceHolder}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});
