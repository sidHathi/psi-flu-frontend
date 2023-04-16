import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CommonSymptoms } from './components/CommonSymptoms/CommonSymptoms';
import { AppBar } from './components/AppBar/AppBar';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList}   from './types';

export default function App() {

  const Stack = createNativeStackNavigator();

  const HomeScreen = ({ navigation }) => {
    
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <CommonSymptoms open={true} />
          <AppBar open={true} navigation={navigation}/>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  };
  const ProfileScreen = ({navigation }) => {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text>This is my's profile</Text>
          <AppBar open={true} navigation={navigation}/>
          
        </SafeAreaView>
      </SafeAreaProvider>

    )
  };
  return (

    <SafeAreaProvider>

      <NavigationContainer>
        <Stack.Navigator>

          

            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>

            
            {/* <StatusBar style="auto" /> */}
          


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
    justifyContent: 'center',
  },
});
