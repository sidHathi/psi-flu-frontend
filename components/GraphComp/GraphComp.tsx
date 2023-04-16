import styles from './GraphComp-styles';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Surface, Card } from 'react-native-paper'
import theme from '../Theme'
import { SymptomIcon } from '../SymptomIcon/SymptomIcon';
import { useState, useEffect } from 'react';
import { CommonSymptom } from '../../types';
import strings from '../../strings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit'

interface GraphCompProps {

  open: boolean;
}

export const GraphComp = ({ open }: GraphCompProps) => {

  const [GraphComp, setGraphComp] = useState<CommonSymptom[]>([])

  const chartConfig = {
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(176, 28, 199, ${opacity})`,
    decimalPlaces: 0,
    style: {
      borderRadius: 24
    },
    
  }

  const graphStyle = {
    // marginVertical: 8,
    ...chartConfig.style,
    // marginHorizontal: 0,
    marginRight: 10
  }

  

  const data = {
    labels: ['January', '', '', '', '', 'June'],
    datasets: [{
      data: [
        50,
        20,
        2,
        86,
        71,
        100
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    }]
  }
  // useEffect(() => {
  //   setGraphComp(mockdata)
  // }, []);

  return (
    
    <Card style={[styles.surface, { shadowOpacity: 0.05 }]} elevation={2}>
     
      <View style={styles.symptomBox}>
          <View style={styles.symptomGrid}>
            <View style={styles.textWrapper}>
              <Text style={styles.symptomText}>Total infections:</Text>
              <Text style={styles.countText}>48</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.symptomText}>Cases this month:</Text>
              <Text style={styles.countText}>69</Text>
            </View>
            
            

          </View>
          <View style={styles.graphBox}>
            <LineChart
                data={data}
                width={210}
                height={170}
                chartConfig={chartConfig}
                bezier
                style={graphStyle}
                
              />
            </View>
   
      </View>

    </Card>
  )
};

