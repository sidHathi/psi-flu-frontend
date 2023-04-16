import styles from './CommonSymptoms-styles';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Surface, Card } from 'react-native-paper'
import theme from '../Theme'
import { SymptomIcon } from '../SymptomIcon/SymptomIcon';
import { useState, useEffect, useContext } from 'react';
import { CommonSymptom } from '../../types';
import strings from '../../strings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import aggregatesApi from '../../services/aggregatesApi';
import {AuthContext} from '../../services/AuthContext';

interface CommonSymptomsProps {
  open: boolean;
}

export const CommonSymptoms = ({ open }: CommonSymptomsProps) => {
  const { state } = useContext(AuthContext);
  const api = aggregatesApi();
  const [cs, setCs] = useState<CommonSymptom[]>([]);

  var mockdata = [
    {symptom: 'fever', count: 28},
    {symptom: 'rash', count: 25},
    {symptom: 'runny_nose', count: 20},
    {symptom: 'chills', count: 17}
  ]

  useEffect(() => {
    setCs(mockdata);
    }, []);

  if (!cs || cs.length < 1 || !state.authenticated) {
    console.log('not rendering')
    return <></>;
  } else {
    console.log(cs);
  }

  return (
    <Card style={[styles.surface, { shadowOpacity: 0.05 }]} elevation={2}>
      <View style={styles.header}>
        <Text style={styles.Text}>Common Symptoms</Text>
      </View>
      <View style={styles.symptomBox}>
        {cs.map((stat) => {
          console.log(stat);
          return (
          <View key={stat.symptom} style={styles.symptomGrid}>
            <View style={styles.iconBox}>
              <SymptomIcon icon={strings.icons[stat.symptom]}/>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.symptomText}>{strings.symptoms[stat.symptom]}</Text>
              <Text style={styles.countText}>{stat.count} People</Text>
            </View>
          </View>)
        })}
      </View>

    </Card>
  )
};

