import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";

const styles = StyleSheet.create({
    ...GlobalStyles,
    loginContainer: {
        width: "100%",
        display: "flex",
        padding: 20,
        paddingBottom: 200
    },
    loginCard: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 40,
        paddingBottom: 40,
        marginTop: '10%',
        marginBottom: 'auto',
        marginLeft: 10,
        marginRight: 10,
        boxShadow: "5px 5px 20px 2px rgba(0, 0, 0, 0.1)",
        overflow: "visible"
    },
    loginHeader: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    authInput: {
        marginTop: 20,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
        border: "none",
        outline: "none",
        borderBottomWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomColor: "transparent"
    },
    authSubmit: {
        marginTop: 20,
        height: 40,
        backgroundColor: '#A243E0',
    },
    switchMode: {
        backgroundColor: "transparent",
        color: "#000",
        textAlign: "center",
        marginTop: 10,
        fontSize: 10
    }
});

export default styles;