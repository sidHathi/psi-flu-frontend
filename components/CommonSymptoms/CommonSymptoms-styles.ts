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
        fontSize: 12,
    },
    countText: {
      ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 18,
        flexWrap: 'nowrap',
        paddingTop: 6,
    },
    surface: {
      padding: 8,
      height: '30%',
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
      height: '80%',
      paddingLeft: 18,
      // paddingRight: 18,
      // paddingTop: 8,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      
    },
    symptomGrid: {
      width:'50%',
      height: '50%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconBox: {
      paddingTop: 4,
    },
    textWrapper: {
      display:'flex',
      paddingLeft: 6,
      flexDirection: 'column',
      alignItems:'flex-start',
      justifyContent: 'space-between'
    }
})
export default styles
