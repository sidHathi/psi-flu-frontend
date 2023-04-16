import styles from './CommonSymptoms-styles';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Surface, Card } from 'react-native-paper'
import theme from '../Theme'
import { SymptomIcon } from '../SymptomIcon/SymptomIcon';
import { useState, useEffect } from 'react';

interface CommonSymptomsProps {

  open: boolean;
}

export const CommonSymptoms = ({ open }: CommonSymptomsProps) => {

  const [commonSymptoms, setCommonSymptoms] = useState([{}])

  var mockdata = [
    {symptom: 'cough', count: 54},
    {symptom: 'sore_throat', count: 34},
    {symptom: 'fever', count: 69},
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
        {/* {commonSymptoms.map((stat) => (
          <View>
            <SymptomIcon icon={stat.symptom} />
          </View>

        ))} */}




      </View>

    </Card>
  )
};

