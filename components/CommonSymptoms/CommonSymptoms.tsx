import styles from './CommonSymptoms-styles';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Surface, Card } from 'react-native-paper'
import theme from '../Theme'
import { SymptomIcon } from '../SymptomIcon/SymptomIcon';
import { useState, useEffect } from 'react';
import { CommonSymptom } from '../../types';
import strings from '../../strings';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface CommonSymptomsProps {

  open: boolean;
}

export const CommonSymptoms = ({ open }: CommonSymptomsProps) => {

  const [commonSymptoms, setCommonSymptoms] = useState<CommonSymptom[]>([])

  var mockdata = [
    {symptom: 'headache', count: 54},
    {symptom: 'sore_throat', count: 34},
    {symptom: 'red_eyes', count: 69},
    {symptom: 'runny_nose', count: 45}
  ]

  useEffect(() => {
    setCommonSymptoms(mockdata)
  }, []);

  return (
    
    <Card style={[styles.surface, { shadowOpacity: 0.05 }]} elevation={2}>
      <View style={styles.header}>
        <Text style={styles.Text}>Common Symptoms</Text>
      </View>
      <View style={styles.symptomBox}>
        {commonSymptoms.map((stat) => (
          <View key={stat.symptom} style={styles.symptomGrid}>
            <View style={styles.iconBox}>
              <SymptomIcon icon={strings.icons[stat.symptom]}/>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.symptomText}>{strings.symptoms[stat.symptom]}</Text>
              <Text style={styles.countText}>{stat.count} People</Text>
            </View>
          </View>
        ))}
      </View>

    </Card>
  )
};

