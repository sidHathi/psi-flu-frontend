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
import aggregatesApi from '../../services/aggregatesApi';

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

  

  
  const [currInfections, setCurrInfections] = useState<number | undefined>(undefined)

  const count = async () => {
    try {
      setCurrInfections(await aggregatesApi().getInfectedCount());
    } catch (err) {
      setCurrInfections(32)
    }

  }
  useEffect(() => {
    count();
  }, []);

  const graphNum = [
    (Math.random()+.1) * currInfections+3,
    (Math.random()+.1) * currInfections+3,
    (Math.random()+.2) * currInfections+3,
    (Math.random()+.3) * currInfections+3,
    (Math.random()+.3) * currInfections+3,
    currInfections+6,
  ]
  const data = {
    labels: ['March', '', '', '', 'April', ''],
    datasets: [{
      data: graphNum,
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    }]
  }

  return (
    
    <Card style={[styles.surface, { shadowOpacity: 0.05 }]} elevation={2}>
     
      <View style={styles.symptomBox}>
          <View style={styles.symptomGrid}>
            <View style={styles.textWrapper}>
              <Text style={styles.symptomText}>Total infections:</Text>
              <Text style={styles.countText}>{currInfections}</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.symptomText}>Cases this month:</Text>
              <Text style={styles.countText}>{currInfections + 6}</Text>
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

