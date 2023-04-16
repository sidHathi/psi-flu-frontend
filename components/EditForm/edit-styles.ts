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
    confirmButton: {
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        margin: 'auto',
        borderRadius: 30,
        height: 36,
        backgroundColor: '#A243E0',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        color: 'white'
    },
    exitButton: {
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        margin: 'auto',
        borderRadius: 30,
        height: 36,
        backgroundColor: '#ddd',
        fontWeight: 'bold',
        fontSize: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50,
    }
});

export default styles;