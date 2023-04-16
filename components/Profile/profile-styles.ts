import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";

const styles = StyleSheet.create({
    ...GlobalStyles,
    profileContainer: {
        width: "100%",
        display: "flex",
        padding: 20,
        paddingBottom: 200,
        paddingTop: 200
    },
});

export default styles;