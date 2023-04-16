import { StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';


const styles = StyleSheet.create ({

    Text: {
        ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 16,
    },
    symptomText: {
      ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 11,
    },
    countText: {
      ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 38,
        flexWrap: 'nowrap',
        paddingTop: 2,
    },
    
    surface: {
      padding: 8,
      marginTop: 25,
      marginBottom: 25,
      height: '25%',
      width: '90%',
      // alignItems: 'center',
      // justifyContent: 'center',
      borderRadius: 24,
      backgroundColor: '#FFFFFF',
      color: '#FF0000',
      display: 'flex',

    },
    header: {
      display: 'flex',

    },
    symptomBox: {
      width:'100%',
      height: '100%',
      paddingLeft: 18,
      // paddingRight: 18,
      paddingTop: 4,
      display: 'flex',
      flexDirection: 'row',
      // flexWrap: 'wrap',
      justifyContent: 'space-between',
      
    },
    graphBox: {
      alignItems: 'flex-start',
      // marginTop: -5
    },
    symptomGrid: {
      width:'35%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: 25,
      
    },
    textWrapper: {
      display:'flex',
      paddingLeft: 5,
      flexDirection: 'column',
      alignItems:'flex-start',
      justifyContent: 'space-between',
      paddingBottom: 5,
    }
})
export default styles
