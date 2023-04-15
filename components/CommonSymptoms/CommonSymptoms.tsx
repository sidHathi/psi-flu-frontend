import styles from './CommonSymptoms-styles';
import React from 'react';
import { Text, View } from 'react-native';

interface CommonSymptomsProps {

    open: boolean;
}

export const CommonSymptoms = ({open} : CommonSymptomsProps) => {

// export const CommonSymptoms = JSX.Element {

    return (
    <View>
        <Text style={styles.Text}>Testing</Text>
    </View>
    )
};

