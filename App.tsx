import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CommonSymptoms } from './components/CommonSymptoms/CommonSymptoms';
import React, {useState, useEffect} from 'react';
import AuthContainer from './components/Auth/AuthContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import { logout } from './services';
import * as SecureStore from 'expo-secure-store';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProfilePage from './components/Profile/ProfilePage';


type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={AuthContainer} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
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
