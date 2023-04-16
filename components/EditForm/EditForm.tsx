import React, {useState} from "react";
import User from "../../types/user_resp";
import { Button, List } from "react-native-paper";
import strings from '../../strings';
import { SymptomIcon } from "../SymptomIcon/SymptomIcon";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './edit-styles';
import usersApi from "../../services/usersApi";
import Symptoms from "../../types/symptoms_resp";
import { err } from "react-native-svg/lib/typescript/xml";

const symptomTypes: {[key:string]: string[]}[] = [
    {"abdominal_symptoms": [
        "vomiting",
        "diarrhea",
        "abdominal_pain",
    ]},
    {"chest_symptoms": [
        "cough",
        "chest_pain",
        "shortness_of_breath",
    ]},
    {"eye_symptoms": [
        "red_eyes",
        "watery_eyes",
        "itchy_eyes",
        "sensitivity_to_light"
    ]},
    {"full_body_symptoms": [
        "fever",
        "fatigue",
        "chills",
        "sweating",
        "body_aches",
        "joint_pain",
        "muscle_weakness",
        "weight_loss",
        "stiff_neck"
    ]},
    {"head_symptoms": [
        "headache",
        "nausea",
        "dizziness"
    ]},
    {"mouth_symptoms": [
        "dry_mouth",
        "loss_of_taste"
    ]},
    {"nasal_symptoms": [
        "congestion",
        "runny_or_stuffy_nose",
        "loss_of_smell",
        "sneezing"
    ]},
    {"skin_symptoms": [
        "rash"
    ]},
    {"throat_symptoms": [
        "sore_throat",
        "dry_throat",
        "difficulty_swallowing",
        "swollen_lymph_nodes"
    ]}
];

type RootStackParamList = {
    Login: undefined;
    Profile: undefined;
    Home: undefined;
    Edit: {user: User}
  };

const convertSymptomsList = () => {

}

export default function EditForm(props: NativeStackScreenProps<RootStackParamList, 'Edit'>): JSX.Element {
    const { navigation } = props;
    const [expanded, setExpanded] = useState("");
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

    const handleToggleExpand = (newExpand: string) => {
        if (expanded === newExpand) {
            setExpanded("");
        } else {
            setExpanded(newExpand);
        }
    }

    const toggleSymptomPresence = (sym: string) => {
        if (selectedSymptoms.filter(s => s === sym).length > 0) {
            console.log('removing');
            setSelectedSymptoms(selectedSymptoms.filter(s => s !== sym));
        } else {
            console.log('adding');
            console.log(selectedSymptoms)
            setSelectedSymptoms([...selectedSymptoms, sym]);
        }
    }

    const handleUpdate = () => {
        if (selectedSymptoms.length > 0) {
            updateUser().then((success) => {
                navigation.navigate('Profile');
            }).catch(err => {
                return null
            });
        } else {
            navigation.navigate('Profile');
        }
    }

    const updateUser = async () => {
        const symptoms: Symptoms = {
            abdominal_symptoms: {
                vomiting: selectedSymptoms.filter(s => s === "vomiting").length > 0,
                diarrhea: selectedSymptoms.filter(s => s === "diarrhea").length > 0,
                abdominal_pain: selectedSymptoms.filter(s => s === "abdominal_pain").length > 0
            },
            chest_symptoms: {
                cough: selectedSymptoms.filter(s => s === "cough").length > 0,
                chest_pain: selectedSymptoms.filter(s => s === "chest_pain").length > 0,
                shortness_of_breath: selectedSymptoms.filter(s => s === "shortness_of_breath").length > 0
            },
            eye_symptoms: {
                red_eyes: selectedSymptoms.filter(s => s === "red_eyes").length > 0,
                watery_eyes: selectedSymptoms.filter(s => s === "watery_eyes").length > 0,
                itchy_eyes: selectedSymptoms.filter(s => s === "itchy_eyes").length > 0,
                sensitivity_to_light: selectedSymptoms.filter(s => s === "sensitivity_to_light").length > 0
            },
            full_body_symptoms: {
                fever: selectedSymptoms.filter(s => s === "fever").length > 0,
                fatigue: selectedSymptoms.filter(s => s === "fatigue").length > 0,
                chills: selectedSymptoms.filter(s => s === "chills").length > 0,
                sweating: selectedSymptoms.filter(s => s === "sweating").length > 0,
                body_aches: selectedSymptoms.filter(s => s === "body_aches").length > 0,
                joint_pain: selectedSymptoms.filter(s => s === "joint_pain").length > 0,
                muscle_weakness: selectedSymptoms.filter(s => s === "muscle_weakness").length > 0,
                weight_loss: selectedSymptoms.filter(s => s === "weight_loss").length > 0,
                stiff_neck: selectedSymptoms.filter(s => s === "stiff_neck").length > 0
            },
            head_symptoms: {
                headache: selectedSymptoms.filter(s => s === "headache").length > 0,
                nausea: selectedSymptoms.filter(s => s === "nausea").length > 0,
                dizziness: selectedSymptoms.filter(s => s === "dizziness").length > 0
            },
            mouth_symptoms: {
                dry_mouth: selectedSymptoms.filter(s => s === "dry_mouth").length > 0,
                loss_of_taste: selectedSymptoms.filter(s => s === "loss_of_taste").length > 0
            },
            nasal_symptoms: {
                congestion: selectedSymptoms.filter(s => s === "congestion").length > 0,
                runny_or_stuffy_nose: selectedSymptoms.filter(s => s === "runny_or_stuffy_nose").length > 0,
                loss_of_smell: selectedSymptoms.filter(s => s === "loss_of_smell").length > 0,
                sneezing: selectedSymptoms.filter(s => s === "sneezing").length > 0,
            },
            skin_symptoms: {
                rash: selectedSymptoms.filter(s => s === "rash").length > 0,
            },
            throat_symptoms: {
                sore_throat: selectedSymptoms.filter(s => s === "sore_throat").length > 0,
                dry_throat: selectedSymptoms.filter(s => s === "dry_throat").length > 0,
                difficulty_swallowing: selectedSymptoms.filter(s => s === "difficulty_swallowing").length > 0,
                swollen_lymph_nodes: selectedSymptoms.filter(s => s === "swollen_lymph_nodes").length > 0
            },
        };
        const res = await usersApi().updateMe(symptoms).catch(err => {
            console.error(err);
            return Promise.reject(err);
        });

        if (res) {
            return Promise.resolve(res);
        }
    }

    return (<>
        {
            selectedSymptoms.length > 0 ? 
            <Button textColor="white"
                onPress={() => handleUpdate()}
                style={styles.confirmButton}>Update</Button> :
            <Button style={styles.exitButton}
            onPress={() => handleUpdate()}>Close</Button>
        }
        <List.Section title="Symptoms">
            {symptomTypes.map((sType: {[key:string]: string[]}) => 
                {return <List.Accordion
                    title={Object.keys(sType)[0]}
                    left={(props) => <SymptomIcon {...props} icon={strings.icons[Object.values(sType)[0][0] as any]} />}
                    expanded={expanded===Object.keys(sType)[0]}
                    onPress={() => handleToggleExpand(Object.keys(sType)[0])}
                    key={Object.keys(sType)[0]}>
                    {
                        sType[Object.keys(sType)[0]].map(sym => {
                            return <List.Item key={sym} 
                            left={(props) => selectedSymptoms.filter(s => s === sym).length > 0 && <Ionicons name='md-checkmark-circle' size={32} color='black' />}
                            title={sym} onPress={()=> {
                                toggleSymptomPresence(sym)
                            }}/>
                        })
                    }
                </List.Accordion>}
            )}
        </List.Section>
        <Button onPress={() => navigation.navigate('Profile')} >Close</Button>
        </>
    )
}