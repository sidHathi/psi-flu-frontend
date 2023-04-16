import styles from './AppBar-styles';
import * as React from 'react';
import { Appbar } from 'react-native-paper'
import { useState, useEffect } from 'react';
import { CommonSymptom } from '../../types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface AppBarProps {

  open: boolean;

  navigation: any;
}

export const AppBar = ({ open, navigation }: AppBarProps) => {

  
  const { bottom } = useSafeAreaInsets();
  // const navigation = useNavigation();

  
  
  return (
      <Appbar
        style={[
          styles.bottom,
          {
            height: 50 + bottom,
            backgroundColor: '#FFFFFF',
            width: '100%',
          },
        ]}
        safeAreaInsets={{ bottom }}
        elevated={true}
      
      >
        <Appbar.Action icon="home" size={30} onPress={() => {navigation.navigate('Home')}} style={styles.LeftAction}/>
        <Appbar.Action icon="account-circle" size={30} onPress={() => {navigation.navigate('Profile')}} style={styles.RightAction}/>
      
      </Appbar>
  )
};

