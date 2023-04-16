import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";

const styles = StyleSheet.create({
    ...GlobalStyles,
    profileContainer: {
        width: "100%",
        height: '100%',
        padding: 20,
        paddingBottom: 200,
        paddingTop: 60,
        backgroundColor: 'white',
        alignItems: "flex-start",
    },
    profileHeader: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    Text: {
        ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 18,
        paddingLeft: 16,
    },
    symptomText: {
      ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 12,
        paddingBottom: 6
    },
    countText: {
      ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 18,
        flexWrap: 'nowrap',
        paddingTop: 6,
    },
    header: {
        marginBottom: 20,
        paddingTop: 10
    },
    surface: {
      padding: 10,
      height: 300,
      width: '100%',
      // alignItems: 'center',
      // justifyContent: 'center',
      borderRadius: 24,
      backgroundColor: '#FFFFFF',
      color: '#FF0000',

    },
    symptomBox: {
      width:'100%',
      paddingLeft: 20,
      // paddingRight: 18,
      // paddingTop: 8,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItem:'flex-start',
      marginBottom: 10,
    },
    symptomGrid: {
      width:'50%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 'auto',
      flexWrap: 'wrap',
    },
    iconBox: {
      paddingTop: 4,
    },
    statContainer: {
        paddingLeft: 8,
        paddingRight: 10,
        margin: 20
    },
    subHeader: {
        fontSize: 10,
        color: 'purple',
        fontWeight: 'bold'
    },
    stat: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple',
    },
    sideBySide: {
        display: 'flex',
        flexDirection: 'row',
    },
    editButton: {
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        margin: 'auto',
        borderRadius: 30,
        height: 36,
        backgroundColor: '#A243E0',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 10,
    },
    deleteButton: {
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        margin: 'auto',
        borderRadius: 30,
        height: 36,
        backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 10,
    },
    logOutButton: {
        height: 40,
        width: '100%',
        backgroundColor: '#f5f5f5',
        color: 'black',
        marginTop: 20,
        fontWeight: '800',
    }
});

export default styles;