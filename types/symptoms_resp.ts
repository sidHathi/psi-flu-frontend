export default interface Symptoms {
    abdominal_symptoms: {
        vomiting: boolean,
        diarrhea: boolean,
        abdominal_pain: boolean
    };
    chest_symptoms: {
        cough: boolean,
        chest_pain: boolean,
        shortness_of_breath: boolean
    };
    eye_symptoms: {
        red_eyes: boolean,
        watery_eyes: boolean,
        itchy_eyes: boolean,
        sensitivity_to_light: boolean
    };
    full_body_symptoms: {
        fever: boolean,
        fatigue: boolean,
        chills: boolean,
        sweating: boolean,
        body_aches: boolean,
        joint_pain: boolean,
        muscle_weakness: boolean,
        weight_loss: boolean,
        stiff_neck: boolean
    };
    head_symptoms: {
        headache: boolean,
        nausea: boolean,
        dizziness: boolean
    };
    mouth_symptoms: {
        dry_mouth: boolean,
        loss_of_taste: boolean
    };
    nasal_symptoms: {
        congestion: boolean,
        runny_or_stuffy_nose: boolean,
        loss_of_smell: boolean,
        sneezing: boolean
    };
    skin_symptoms: {
        rash: boolean
    };
    throat_symptoms: {
        sore_throat: boolean,
        dry_throat: boolean,
        difficulty_swallowing: boolean,
        swollen_lymph_nodes: boolean
    };
};