import styles from './CommonSymptoms-styles';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Surface, Card } from 'react-native-paper'
import theme  from '../Theme'
import { SymptomIcon } from '../SymptomIcon/SymptomIcon';

interface CommonSymptomsProps {

  open: boolean;
}

export const CommonSymptoms = ({ open }: CommonSymptomsProps) => {

  // export const CommonSymptoms = JSX.Element {

  return (
    <Card style={[styles.surface, {shadowOpacity: 0.05}]} elevation={2}>
      <View style={styles.header}>
        <Text style={styles.Text}>Common Symptoms</Text>
      </View>
      <View style={styles.symptomBox}>
        <SymptomIcon icon={'head'}/>


      </View>
      
    </Card>
  )
};

