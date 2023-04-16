import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CommonSymptoms } from './components/CommonSymptoms/CommonSymptoms';
import React, { useState, useEffect } from 'react';
import AuthContainer from './components/Auth/AuthContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from './components/Profile/ProfilePage';
const Stack = createNativeStackNavigator<RootStackParamList>();
import { AppBar } from './components/AppBar/AppBar';
import { GraphComp } from './components/GraphComp/GraphComp';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import GlobalStyles from './components/GlobalStyles';
type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  Home: undefined;
};


export default function App() {

  const Stack = createNativeStackNavigator();


  const HomeScreen = ({ navigation }) => {

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
  const ProfileScreen = ({ navigation }) => {

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text>This is my's profile</Text>
          <AppBar open={true} navigation={navigation} />

        </SafeAreaView>
      </SafeAreaProvider>

    )
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationTypeForReplace: 'pop',
            fullScreenGestureEnabled: true,

          }}
        >

          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Profile"
            component={ProfilePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={AuthContainer}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </SafeAreaProvider>
  );
}

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

