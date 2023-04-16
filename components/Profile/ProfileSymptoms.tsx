import styles from './profile-styles';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Surface, Card } from 'react-native-paper'
import theme from '../Theme'
import { SymptomIcon } from '../SymptomIcon/SymptomIcon';
import { useState, useEffect } from 'react';
import strings from '../../strings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import User from '../../types/user_resp';

interface ProfileSymptomsProps {
    user: User;
    openEdit: () => void;
}

export const ProfileSymptoms = ({ user, openEdit }: ProfileSymptomsProps) => {
    const [userSymptoms, setUserSymptoms] = useState<string[]>([]);

    const getUserSymptoms = () => {
        if (!user.symptoms) {
            return [];
        }

        let symptoms = [];
        Object.values(user.symptoms).forEach((area) => {
            if (!area || area.length < 1) return;
            symptoms = [...symptoms, ...(Object.entries(area).filter(([key, val]) => val)).map(([key, val]) => key as string)]
        });
        return symptoms.slice(0, Math.min(symptoms.length, 4));
    }
    
    useEffect(() => {
        console.log(getUserSymptoms());
        setUserSymptoms(getUserSymptoms());
    }, []);

    return (

    <Card style={[styles.surface, { shadowOpacity: 0.05 }]} elevation={2}>
        <View style={styles.header}>
            <Text style={styles.Text}>Your Symptoms</Text>
        </View>
        <View style={styles.symptomBox}>
            {userSymptoms.map((sym) => (
                <View key={sym} style={styles.symptomGrid}>
                    <View style={styles.iconBox}>
                        <Text style={styles.symptomText}>{strings.symptoms[sym]}</Text>
                        <SymptomIcon icon={strings.icons[sym]}/>
                    </View>
                </View>
            ))}
        </View>
        <View style={styles.sideBySide}>
            <View style={styles.statContainer}>
                <Text style={styles.subHeader}>
                    Duration
                </Text>
                <Text style={styles.stat}>
                    2 days
                </Text>
            </View>
            <View>
                <Button style={styles.editButton}
                    onPress={() => {openEdit()}}>
                    <Text style={{color: "white"}}>
                        Update {`>`}
                    </Text>
                </Button>
                <Button style={styles.deleteButton}
                    onPress={() => {}}>
                    Remove
                </Button>

            </View>
        </View>
    </Card>
    )
};

